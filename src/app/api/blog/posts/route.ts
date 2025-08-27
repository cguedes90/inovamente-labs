import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { z } from 'zod';

const createPostSchema = z.object({
  title: z.string().min(1, 'Título é obrigatório'),
  content: z.string().min(1, 'Conteúdo é obrigatório'),
  excerpt: z.string().min(1, 'Resumo é obrigatório'),
  slug: z.string().min(1, 'Slug é obrigatório'),
  image: z.string().optional(),
  category: z.string().min(1, 'Categoria é obrigatória'),
  author: z.string().default('Equipe InovaMente'),
  readTime: z.string().min(1, 'Tempo de leitura é obrigatório'),
  published: z.boolean().default(true),
});

// GET - Listar todos os posts
export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM blog_posts ORDER BY "createdAt" DESC'
    );

    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}

// POST - Criar novo post
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados
    const validatedData = createPostSchema.parse(body);

    // Verificar se o slug já existe
    const existingPost = await pool.query(
      'SELECT id FROM blog_posts WHERE slug = $1',
      [validatedData.slug]
    );

    if (existingPost.rows.length > 0) {
      return NextResponse.json(
        { error: 'Slug já existe. Use um slug único.' },
        { status: 400 }
      );
    }

    // Criar post
    const result = await pool.query(
      `INSERT INTO blog_posts (title, content, excerpt, slug, image, category, author, "readTime", published, "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
       RETURNING *`,
      [
        validatedData.title,
        validatedData.content,
        validatedData.excerpt,
        validatedData.slug,
        validatedData.image || null,
        validatedData.category,
        validatedData.author,
        validatedData.readTime,
        validatedData.published,
      ]
    );

    const newPost = result.rows[0];
    
    return NextResponse.json({
      message: 'Post criado com sucesso!',
      post: newPost,
      url: `/blog/${newPost.id}`
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Dados inválidos', details: error.issues },
        { status: 400 }
      );
    }

    console.error('Erro ao criar post:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
