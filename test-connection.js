import { testConnection } from '../src/lib/prisma'

async function main() {
  console.log('🔌 Testando conexão com Neon PostgreSQL...')
  console.log('DATABASE_URL:', process.env.DATABASE_URL?.substring(0, 50) + '...')
  
  const connected = await testConnection()
  process.exit(connected ? 0 : 1)
}

main().catch(console.error)
