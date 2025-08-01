const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

async function testConnection() {
  try {
    console.log('🔌 Testando conexão com Neon PostgreSQL...')
    console.log('DATABASE_URL:', process.env.DATABASE_URL?.substring(0, 50) + '...')
    
    await prisma.$connect()
    console.log('✅ Conexão com banco Neon estabelecida com sucesso!')
    
    // Test a simple query
    const result = await prisma.$queryRaw`SELECT version()`
    console.log('📊 Versão do PostgreSQL:', result)
    
    return true
  } catch (error) {
    console.error('❌ Erro ao conectar com banco:', error.message)
    return false
  } finally {
    await prisma.$disconnect()
  }
}

testConnection()
  .then((connected) => process.exit(connected ? 0 : 1))
  .catch((error) => {
    console.error('Error:', error)
    process.exit(1)
  })
