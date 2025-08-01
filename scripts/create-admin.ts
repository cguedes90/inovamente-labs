import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function createAdminUser() {
  try {
    // Verificar se já existe um admin
    const existingAdmin = await prisma.admin.findFirst({
      where: {
        OR: [
          { username: 'admin' },
          { email: 'admin@inovamente.com' }
        ]
      }
    })

    if (existingAdmin) {
      console.log('Admin já existe:', existingAdmin.username, existingAdmin.email)
      return
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash('admin123', 10)

    // Criar admin
    const admin = await prisma.admin.create({
      data: {
        username: 'admin',
        email: 'admin@inovamente.com',
        name: 'Administrador',
        password: hashedPassword
      }
    })

    console.log('Admin criado com sucesso:', admin.username, admin.email)

  } catch (error) {
    console.error('Erro ao criar admin:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdminUser()
