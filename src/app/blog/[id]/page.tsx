import type { Metadata } from 'next';
import type { ReactElement } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

interface BlogPostProps {
  params: Promise<{
    id: string;
  }>;
}

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  category: string;
  readTime: string;
  image?: string;
  slug: string;
  createdAt?: string;
  seoTitle?: string | null;
  seoDescription?: string | null;
}

const DEFAULT_BASE_URL = 'https://www.inovamentelabs.com.br';

async function fetchPost(id: string): Promise<BlogPost | null> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || DEFAULT_BASE_URL;
  const response = await fetch(`${baseUrl}/api/blog/${encodeURIComponent(id)}`, {
    cache: 'no-store'
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return data.post || data;
}

function buildBlocks(content: string) {
  const blocks: ReactElement[] = [];
  const lines = content.split('\n');
  let paragraph: string[] = [];
  let list: string[] = [];
  let keyIndex = 0;

  const flushParagraph = () => {
    if (paragraph.length === 0) return;
    blocks.push(
      <p
        key={`p-${keyIndex++}`}
        className="text-lg text-muted-foreground mb-6 leading-relaxed"
      >
        {paragraph.join(' ')}
      </p>
    );
    paragraph = [];
  };

  const flushList = () => {
    if (list.length === 0) return;
    blocks.push(
      <ul
        key={`ul-${keyIndex++}`}
        className="pl-5 mb-6 text-muted-foreground space-y-2"
      >
        {list.map((item, index) => (
          <li key={`li-${keyIndex++}-${index}`} className="list-disc">
            {item}
          </li>
        ))}
      </ul>
    );
    list = [];
  };

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      flushParagraph();
      return;
    }

    if (trimmed.startsWith('### ')) {
      flushList();
      flushParagraph();
      blocks.push(
        <h3
          key={`h3-${keyIndex++}`}
          className="font-display text-2xl font-semibold text-foreground mt-8 mb-4"
        >
          {trimmed.slice(4)}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('## ')) {
      flushList();
      flushParagraph();
      blocks.push(
        <h2
          key={`h2-${keyIndex++}`}
          className="font-display text-3xl font-bold text-foreground mt-10 mb-5"
        >
          {trimmed.slice(3)}
        </h2>
      );
      return;
    }

    if (trimmed.startsWith('# ')) {
      flushList();
      flushParagraph();
      blocks.push(
        <h1
          key={`h1-${keyIndex++}`}
          className="font-display text-4xl font-extrabold text-foreground mt-10 mb-5"
        >
          {trimmed.slice(2)}
        </h1>
      );
      return;
    }

    if (trimmed.startsWith('- ')) {
      flushParagraph();
      list.push(trimmed.slice(2));
      return;
    }

    paragraph.push(trimmed);
  });

  flushList();
  flushParagraph();

  return blocks;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { id } = await params;
  const post = await fetchPost(id);
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || DEFAULT_BASE_URL;

  if (!post) {
    return {
      title: 'Post nao encontrado - InovaMente Labs'
    };
  }

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt;
  const url = `${baseUrl}/blog/${post.slug || id}`;
  const image = post.image && post.image.startsWith('http') ? post.image : `${baseUrl}/og-blog.png`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { id } = await params;
  const post = await fetchPost(id);

  if (!post) {
    notFound();
  }

  const date = post.createdAt
    ? new Date(post.createdAt).toLocaleDateString('pt-BR')
    : '';
  const heroImage = post.image || 'IA';
  const showImage = heroImage.startsWith('http');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingWhatsApp />

      {/* Article Hero */}
      <section className="bg-primary pt-28 pb-16 px-4 text-center text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center justify-center gap-3 mb-5">
            <Link
              href="/blog"
              className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium transition-colors"
            >
              &larr; Voltar ao Blog
            </Link>
            <span className="text-primary-foreground/50">&bull;</span>
            <span className="bg-primary-foreground/20 px-3 py-1 rounded-full text-xs font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="font-display text-3xl lg:text-5xl font-extrabold mb-5 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-5 text-sm text-primary-foreground/90">
            <span>Por {post.author}</span>
            <span>&bull;</span>
            <span>{date}</span>
            <span>&bull;</span>
            <span>{post.readTime} de leitura</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <main className="container mx-auto max-w-3xl px-4 py-16">
        <article className="glass-card rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="mb-10">
            {showImage ? (
              <img
                src={heroImage}
                alt={post.title}
                className="w-full max-h-[420px] object-cover rounded-2xl mb-8"
              />
            ) : (
              <div className="bg-secondary rounded-2xl p-10 text-center text-5xl mb-8">
                {heroImage}
              </div>
            )}
          </div>

          <div className="text-lg leading-relaxed text-foreground">
            {buildBlocks(post.content)}
          </div>

          {/* CTA inside article */}
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 mt-10 text-center">
            <h3 className="font-display text-xl font-bold mb-4">
              Pronto para acelerar sua transformacao digital?
            </h3>
            <p className="mb-5 text-primary-foreground/90">
              Fale com a InovaMente Labs e descubra como aplicar automacao e IA com foco em ROI.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
              >
                Fale Conosco
              </Link>
              <Link
                href="/solucoes"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Ver Solucoes
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
