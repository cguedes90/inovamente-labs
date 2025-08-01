import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextRequest } from 'next/server';
import pool from './db';
import { Client } from '@/types';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

export function generateToken(payload: any): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Token inválido');
  }
}

export async function authenticateClient(req: NextRequest): Promise<Client | null> {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Token não fornecido');
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);

    if (!decoded.id || decoded.role !== 'client') {
      throw new Error('Token inválido para cliente');
    }

    const client = await pool.query(
      'SELECT * FROM clients WHERE id = $1 AND status = $2',
      [decoded.id, 'active']
    );

    if (client.rows.length === 0) {
      throw new Error('Cliente não encontrado ou inativo');
    }

    return client.rows[0];
  } catch (error) {
    return null;
  }
}

export async function authenticateAdmin(req: NextRequest): Promise<any | null> {
  try {
    const authHeader = req.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Token não fornecido');
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);

    if (!decoded.id || decoded.role !== 'admin') {
      throw new Error('Token inválido para admin');
    }

    return decoded;
  } catch (error) {
    return null;
  }
}
