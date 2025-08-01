import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { z } from 'zod';

const updatePostSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório').optional(),
  content: z.string().min(1, 'Conteúdo é obrigatório').optional(),
  excerpt: z.string().min(1, 'Resumo é obrigatório').optional(),
  slug: z.string().min(1, 'Slug é obrigatório').optional(),
  image: z.string().optional(),
  category: z.string().min(1, 'Categoria é obrigatória').optional(),
  author: z.string().optional(),
  readTime: z.string().min(1, 'Tempo de leitura é obrigatório').optional(),
  published: z.boolean().optional(),
});

// GET - Buscar post específico
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await pool.query(
      'SELECT * FROM blog_posts WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// PUT - Atualizar post
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Validar dados
    const validatedData = updatePostSchema.parse(body);

    // Verificar se o post existe
    const existingPost = await pool.query(
      'SELECT * FROM blog_posts WHERE id = $1',
      [id]
    );

    if (existingPost.rows.length === 0) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      );
    }

    // Se atualizando slug, verificar se já existe outro post com o mesmo slug
    if (validatedData.slug && validatedData.slug !== existingPost.rows[0].slug) {
      const slugExists = await pool.query(
        'SELECT id FROM blog_posts WHERE slug = $1 AND id != $2',
        [validatedData.slug, id]
      );

      if (slugExists.rows.length > 0) {
        return NextResponse.json(
          { error: 'Slug já existe. Use um slug único.' },
          { status: 400 }
        );
      }
    }

    // Construir query de atualização dinamicamente
    const updateFields = [];
    const values = [];
    let paramIndex = 1;

    Object.entries(validatedData).forEach(([key, value]) => {
      if (value !== undefined) {
        updateFields.push(`"${key}" = $${paramIndex}`);
        values.push(value);
        paramIndex++;
      }
    });

    if (updateFields.length === 0) {
      return NextResponse.json(existingPost.rows[0]);
    }

    // Adicionar updatedAt
    updateFields.push(`"updatedAt" = $${paramIndex}`);
    values.push(new Date());
    paramIndex++;

    // Adicionar ID para WHERE
    values.push(id);

    const updateQuery = `
      UPDATE blog_posts 
      SET ${updateFields.join(', ')} 
      WHERE id = $${paramIndex}
      RETURNING *
    `;

    const result = await pool.query(updateQuery, values);

    return NextResponse.json(result.rows[0]);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Erro ao atualizar post:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// DELETE - Deletar post
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    // Verificar se o post existe
    const existingPost = await pool.query(
      'SELECT id FROM blog_posts WHERE id = $1',
      [id]
    );

    if (existingPost.rows.length === 0) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      );
    }

    // Deletar post
    await pool.query(
      'DELETE FROM blog_posts WHERE id = $1',
      [id]
    );

    return NextResponse.json({ message: 'Post deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar post:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
