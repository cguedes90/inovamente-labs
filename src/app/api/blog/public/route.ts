import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';

// GET - Listar posts públicos para o blog
export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM blog_posts WHERE published = true ORDER BY "createdAt" DESC'
    );

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar posts públicos:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
