const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function checkTables() {
  try {
    console.log('🔍 Verificando tabelas no banco Neon...')
    
    // Verificar se as tabelas existem
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `
    
    console.log('📊 Tabelas encontradas:')
    tables.forEach((table, index) => {
      console.log(`  ${index + 1}. ${table.table_name}`)
    })
    
    // Verificar dados em cada tabela
    console.log('\n📈 Contagem de registros:')
    
    try {
      const adminCount = await prisma.admin.count()
      console.log(`  - admins: ${adminCount} registros`)
    } catch (e) {
      console.log(`  - admins: tabela não encontrada`)
    }
    
    try {
      const clientCount = await prisma.client.count()
      console.log(`  - clients: ${clientCount} registros`)
    } catch (e) {
      console.log(`  - clients: tabela não encontrada`)
    }
    
    try {
      const ticketCount = await prisma.ticket.count()
      console.log(`  - tickets: ${ticketCount} registros`)
    } catch (e) {
      console.log(`  - tickets: tabela não encontrada`)
    }
    
    try {
      const messageCount = await prisma.message.count()
      console.log(`  - messages: ${messageCount} registros`)
    } catch (e) {
      console.log(`  - messages: tabela não encontrada`)
    }
    
    try {
      const blogCount = await prisma.blogPost.count()
      console.log(`  - blog_posts: ${blogCount} registros`)
    } catch (e) {
      console.log(`  - blog_posts: tabela não encontrada`)
    }
    
  } catch (error) {
    console.error('❌ Erro ao verificar tabelas:', error.message)
  } finally {
    await prisma.$disconnect()
  }
}

checkTables()
