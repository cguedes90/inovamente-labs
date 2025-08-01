import { NextRequest, NextResponse } from 'next/server';
import { authenticateAdmin } from '@/lib/auth';
import pool from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const admin = await authenticateAdmin(req);
    if (!admin) {
      return NextResponse.json(
        { message: 'Não autorizado' },
        { status: 401 }
      );
    }

    const result = await pool.query(
      `SELECT 
         t.*,
         c.name as client_name,
         c.company as client_company,
         c.email as client_email
       FROM tickets t 
       JOIN clients c ON t.client_id = c.id 
       ORDER BY t.created_at DESC`
    );

    return NextResponse.json(result.rows);

  } catch (error) {
    console.error('Erro ao buscar tickets:', error);
    return NextResponse.json(
      { message: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
