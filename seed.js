const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Populando banco de dados...')

  // Criar admin
  const hashedAdminPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.admin.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedAdminPassword,
      name: 'Administrador',
      email: 'admin@inovamente.com'
    }
  })
  console.log('✅ Admin criado:', admin.username)

  // Criar cliente exemplo
  const hashedClientPassword = await bcrypt.hash('123456', 10)
  const client = await prisma.client.upsert({
    where: { email: 'cliente@exemplo.com' },
    update: {},
    create: {
      name: 'João Silva',
      email: 'cliente@exemplo.com',
      password: hashedClientPassword,
      company: 'Empresa Exemplo Ltda',
      phone: '(11) 99999-9999'
    }
  })
  console.log('✅ Cliente criado:', client.name)

  // Criar ticket exemplo
  const ticket = await prisma.ticket.create({
    data: {
      title: 'Problema no sistema de vendas',
      description: 'Estou enfrentando dificuldades para processar pedidos no sistema. O erro aparece quando tento finalizar uma venda.',
      status: 'ABERTO',
      priority: 'ALTA',
      category: 'Suporte Técnico',
      clientId: client.id
    }
  })
  console.log('✅ Ticket criado:', ticket.title)

  // Criar mensagem no ticket
  await prisma.message.create({
    data: {
      content: 'Obrigado por entrar em contato! Vamos analisar o problema e retornar em breve.',
      author: 'Suporte InovaMente',
      isAdmin: true,
      ticketId: ticket.id
    }
  })

  // Criar posts do blog
  const posts = [
    {
      title: 'No-Code e Low-Code: A Revolução do Desenvolvimento sem Programação [2025]',
      content: 'Descubra como as plataformas No-Code e Low-Code estão transformando o desenvolvimento de software...',
      excerpt: 'Descubra como No-Code e Low-Code estão revolucionando o desenvolvimento em 2025.',
      slug: 'no-code-low-code-revolucao-2025',
      image: '💻',
      category: 'Tecnologia',
      readTime: '8 min'
    },
    {
      title: 'Desenvolvimento de Software Empresarial: Prateleira vs Sob Demanda [2025]',
      content: 'Uma análise completa sobre as vantagens e desvantagens de cada abordagem...',
      excerpt: 'Descubra como escolher entre software de prateleira e desenvolvimento sob demanda.',
      slug: 'software-empresarial-prateleira-vs-sob-demanda',
      image: '🌍',
      category: 'Desenvolvimento',
      readTime: '6 min'
    },
    {
      title: 'Blockchain para Empresas: Revolucionando Negócios Tradicionais [Guia 2025]',
      content: 'Um guia completo sobre como implementar blockchain em empresas tradicionais...',
      excerpt: 'Guia completo de blockchain para empresas: aplicações práticas e casos de sucesso.',
      slug: 'blockchain-empresas-guia-2025',
      image: '🔗',
      category: 'Blockchain',
      readTime: '10 min'
    }
  ]

  for (const post of posts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post
    })
  }
  console.log('✅ Posts do blog criados')

  console.log('🎉 Banco populado com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro ao popular banco:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
