import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: postId } = await params
    
    let post
    
    // Tentar buscar por ID numérico primeiro
    if (!isNaN(Number(postId))) {
      const numericId = Number(postId)
      post = await prisma.blogPost.findFirst({
        where: {
          AND: [
            { published: true },
            {
              OR: [
                { slug: postId },
                { id: { equals: numericId.toString() } }
              ]
            }
          ]
        }
      })
    } else {
      // Buscar por slug
      post = await prisma.blogPost.findFirst({
        where: {
          slug: postId,
          published: true
        }
      })
    }

    if (!post) {
      return NextResponse.json(
        { error: 'Post não encontrado' },
        { status: 404 }
      )
    }

    // Formatar data
    const formattedPost = {
      ...post,
      id: Number(post.id),
      date: post.createdAt.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    }

    return NextResponse.json({ post: formattedPost })

  } catch (error) {
    console.error('Erro ao buscar post:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
