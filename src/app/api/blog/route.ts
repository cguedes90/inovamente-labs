import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    
    const where = category ? { category, published: true } : { published: true }
    
    const posts = await prisma.blogPost.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        excerpt: true,
        slug: true,
        image: true,
        category: true,
        author: true,
        readTime: true,
        createdAt: true
      }
    })

    // Formatar as datas
    const formattedPosts = posts.map((post: any) => ({
      ...post,
      id: Number(post.id),
      date: post.createdAt.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    }))

    return NextResponse.json({ posts: formattedPosts })

  } catch (error) {
    console.error('Erro ao buscar posts:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}
