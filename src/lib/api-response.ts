import { NextResponse } from 'next/server';
import { ZodError } from 'zod';

// Tipos para responses padronizadas
export interface ApiSuccessResponse<T = any> {
  success: true;
  data: T;
  message?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  details?: any;
  code?: string;
}

// Códigos de erro padronizados
export enum ApiErrorCode {
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR = 'AUTHORIZATION_ERROR',
  NOT_FOUND = 'NOT_FOUND',
  CONFLICT = 'CONFLICT',
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  BAD_REQUEST = 'BAD_REQUEST'
}

// Classes de erro customizadas
export class ApiError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 500,
    public code: ApiErrorCode = ApiErrorCode.INTERNAL_ERROR,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class ValidationError extends ApiError {
  constructor(message: string, details?: any) {
    super(message, 400, ApiErrorCode.VALIDATION_ERROR, details);
  }
}

export class AuthenticationError extends ApiError {
  constructor(message: string = 'Falha na autenticação') {
    super(message, 401, ApiErrorCode.AUTHENTICATION_ERROR);
  }
}

export class AuthorizationError extends ApiError {
  constructor(message: string = 'Acesso negado') {
    super(message, 403, ApiErrorCode.AUTHORIZATION_ERROR);
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string = 'Recurso não encontrado') {
    super(message, 404, ApiErrorCode.NOT_FOUND);
  }
}

export class ConflictError extends ApiError {
  constructor(message: string = 'Conflito de dados') {
    super(message, 409, ApiErrorCode.CONFLICT);
  }
}

export class RateLimitError extends ApiError {
  constructor(message: string = 'Limite de requisições excedido') {
    super(message, 429, ApiErrorCode.RATE_LIMIT_EXCEEDED);
  }
}

// Funções para criar responses padronizadas
export function createSuccessResponse<T>(
  data: T,
  message?: string,
  statusCode: number = 200
): NextResponse<ApiSuccessResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      data,
      message
    },
    { status: statusCode }
  );
}

export function createErrorResponse(
  error: string | Error | ApiError,
  statusCode?: number,
  code?: ApiErrorCode,
  details?: any
): NextResponse<ApiErrorResponse> {
  if (error instanceof ApiError) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
        code: error.code,
        details: error.details
      },
      { status: error.statusCode }
    );
  }

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        success: false,
        error: 'Dados inválidos',
        code: ApiErrorCode.VALIDATION_ERROR,
        details: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      },
      { status: 400 }
    );
  }

  const errorMessage = error instanceof Error ? error.message : String(error);
  
  return NextResponse.json(
    {
      success: false,
      error: errorMessage,
      code: code || ApiErrorCode.INTERNAL_ERROR,
      details
    },
    { status: statusCode || 500 }
  );
}

// Handler genérico para APIs
export function withErrorHandling(
  handler: (...args: any[]) => Promise<NextResponse>
) {
  return async (...args: any[]): Promise<NextResponse> => {
    try {
      return await handler(...args);
    } catch (error) {
      console.error('API Error:', error);
      
      // Log detalhado para desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        console.error('Stack trace:', error);
      }

      return createErrorResponse(error);
    }
  };
}

// Middleware para logging de requisições
export function logRequest(req: Request, startTime: number) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`${req.method} ${req.url} - ${Date.now() - startTime}ms`);
  }
}

// Validador genérico com Zod
export function validateRequest<T>(schema: any, data: unknown): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof ZodError) {
      throw new ValidationError('Dados de entrada inválidos', error.errors);
    }
    throw error;
  }
}