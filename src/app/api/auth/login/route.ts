import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { z } from 'zod';
import prisma from '@/lib/prisma';
import { generateToken } from '@/lib/auth';
import { withErrorHandling, createSuccessResponse, createErrorResponse, AuthenticationError, validateRequest } from '@/lib/api-response';

// Schema de validação para login
const loginSchema = z.object({
  email: z.string().min(1, 'Email/usuário é obrigatório'),
  password: z.string().min(1, 'Senha é obrigatória'),
  type: z.enum(['admin', 'client']).optional().default('client')
});

async function loginHandler(request: NextRequest) {
  const startTime = Date.now();
  
  // Validar dados de entrada
  const requestData = await request.json();
  const validatedData = validateRequest(loginSchema, requestData);
  const { email, password, type } = validatedData as z.infer<typeof loginSchema>;

  console.log(`Login attempt: ${email} as ${type} [${Date.now() - startTime}ms]`);

  let user;
  
  try {
    if (type === 'admin') {
      // Login como admin (usando username ou email)
      user = await prisma.admin.findFirst({
        where: {
          OR: [
            { email: email },
            { username: email }
          ],
          isActive: true // Só admins ativos podem fazer login
        }
      });
    } else {
      // Login como cliente
      user = await prisma.client.findUnique({
        where: { 
          email,
          isActive: true // Só clientes ativos podem fazer login
        }
      });
    }

    if (!user) {
      throw new AuthenticationError('Credenciais inválidas');
    }

    // Verificar senha
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      throw new AuthenticationError('Credenciais inválidas');
    }

    // Atualizar último login
    if (type === 'admin') {
      await prisma.admin.update({
        where: { id: user.id },
        data: { lastLogin: new Date() }
      });
    } else {
      await prisma.client.update({
        where: { id: user.id },
        data: { lastLogin: new Date() }
      });
    }

    // Gerar JWT
    const token = generateToken({
      id: user.id,
      email: user.email,
      type,
      name: user.name
    });

    // Remover senha da resposta
    const { password: _, ...userWithoutPassword } = user;

    console.log(`Login successful: ${email} [${Date.now() - startTime}ms]`);

    return createSuccessResponse({
      message: 'Login realizado com sucesso',
      token,
      user: userWithoutPassword,
      type
    });

  } catch (error) {
    console.log(`Login failed: ${email} - ${error instanceof Error ? error.message : 'Unknown error'} [${Date.now() - startTime}ms]`);
    throw error;
  }
}

export const POST = withErrorHandling(loginHandler);
