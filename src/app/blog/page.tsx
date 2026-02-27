'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { Clock, User, Search } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  createdAt: string;
  category: string;
  readTime: string;
  image?: string;
  slug: string;
}

const fallbackPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Como Escolher a Tecnologia Certa para seu Projeto de Software em 2025',
    excerpt: 'Guia completo para tomar decis\u00f5es t\u00e9cnicas assertivas na escolha de tecnologias.',
    author: 'Carlos Silva',
    createdAt: '2024-12-01T10:00:00Z',
    category: 'Desenvolvimento',
    readTime: '8 min',
    slug: 'como-escolher-tecnologia-certa-projeto-2025',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=400&fit=crop&auto=format',
  },
  {
    id: '2',
    title: 'Desenvolvimento Mobile: Nativo vs H\u00edbrido em 2025',
    excerpt: 'An\u00e1lise detalhada das principais abordagens de desenvolvimento mobile.',
    author: 'Ana Santos',
    createdAt: '2024-11-28T14:30:00Z',
    category: 'Mobile',
    readTime: '12 min',
    slug: 'desenvolvimento-mobile-nativo-hibrido-2025',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop&auto=format',
  },
  {
    id: '3',
    title: '10 Processos Empresariais que Toda Empresa Deve Automatizar',
    excerpt: 'Lista pr\u00e1tica dos principais processos que podem ser automatizados.',
    author: 'Roberto Lima',
    createdAt: '2024-11-25T09:15:00Z',
    category: 'Automa\u00e7\u00e3o',
    readTime: '10 min',
    slug: 'processos-empresariais-automatizar',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop&auto=format',
  },
];

const categories = [
  { name: 'Tecnologia', count: 8 },
  { name: 'Desenvolvimento', count: 12 },
  { name: 'Blockchain', count: 5 },
  { name: 'IA & Automa\u00e7\u00e3o', count: 7 },
];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'}/api/blog/posts`
        );
        if (!response.ok) throw new Error('Erro ao buscar posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao carregar posts do banco:', error);
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
            >
              <span className="gradient-text">Blog</span>
            </motion.h1>
            <p className="text-muted-foreground text-lg mb-8">
              Artigos, tutoriais e insights sobre tecnologia e neg{'\u00f3'}cios.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="pb-24 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
              {/* Posts Grid */}
              <div>
                {loading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2, 3].map((n) => (
                      <div
                        key={n}
                        className="glass-card rounded-2xl overflow-hidden animate-pulse"
                      >
                        <div className="h-44 bg-secondary/50" />
                        <div className="p-6 space-y-3">
                          <div className="h-4 bg-secondary/50 rounded w-1/4" />
                          <div className="h-5 bg-secondary/50 rounded w-3/4" />
                          <div className="h-4 bg-secondary/50 rounded w-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : filteredPosts.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16"
                  >
                    <p className="text-muted-foreground text-lg">
                      Nenhum post encontrado.
                    </p>
                  </motion.div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredPosts.map((post, i) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="glass-card rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer"
                      >
                        <Link href={`/blog/${post.slug}`} className="block">
                          <div className="h-44 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden">
                            {post.image ? (
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                {post.category}
                              </span>
                            )}
                            <span className="absolute top-3 left-3 text-xs font-medium text-primary-foreground bg-primary px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                          </div>
                          <div className="p-6">
                            <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {post.author}
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readTime}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                              {formatDate(post.createdAt)}
                            </p>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="flex flex-col gap-6">
                {/* Categories */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    Categorias
                  </h3>
                  <div className="flex flex-col gap-3">
                    {categories.map((cat) => (
                      <div
                        key={cat.name}
                        className="flex justify-between items-center cursor-pointer hover:text-primary transition-colors"
                      >
                        <span className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                          {cat.name}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                          {cat.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <h3 className="font-display font-semibold mb-3">Newsletter</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Receba nossos {'\u00fa'}ltimos artigos e insights direto no seu email.
                  </p>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/20 border border-white/30 text-white placeholder:text-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 mb-3"
                  />
                  <button className="w-full px-4 py-2.5 rounded-xl bg-white/20 border border-white/30 text-sm font-semibold hover:bg-white/30 transition-colors">
                    Inscrever-se
                  </button>
                </div>

                {/* Popular Posts */}
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="font-display font-semibold text-foreground mb-4">
                    Posts Populares
                  </h3>
                  <div className="flex flex-col gap-4">
                    {posts.slice(0, 3).map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="block p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                      >
                        <h4 className="text-sm font-semibold text-foreground mb-1 line-clamp-2">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{formatDate(post.createdAt)}</span>
                          <span className="text-border">&#x2022;</span>
                          <span>{post.readTime}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
