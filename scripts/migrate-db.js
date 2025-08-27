#!/usr/bin/env node

const { execSync } = require('child_process');

async function migrateDatabase() {
  console.log('🔄 Starting database migration...');
  
  try {
    // Primeiro, vamos tentar aplicar as mudanças sem forçar
    console.log('📝 Generating Prisma client...');
    execSync('npx prisma generate', { stdio: 'inherit' });
    
    console.log('🗄️ Pushing schema to database...');
    
    try {
      // Tentar push normal primeiro
      execSync('npx prisma db push', { stdio: 'inherit' });
      console.log('✅ Database migration completed successfully!');
    } catch (pushError) {
      console.log('⚠️ Normal push failed, checking if we need to handle existing data...');
      
      // Se falhar, tentar com reset apenas em ambiente de desenvolvimento
      if (process.env.NODE_ENV !== 'production') {
        console.log('🔄 Attempting to reset database (development only)...');
        try {
          execSync('npx prisma db push --force-reset', { stdio: 'inherit' });
          console.log('✅ Database reset and migration completed!');
        } catch (resetError) {
          console.error('❌ Database migration failed:', resetError.message);
          process.exit(1);
        }
      } else {
        console.log('🏭 Production environment detected. Manual intervention may be required.');
        console.log('💡 Consider using migrations instead of db push in production.');
        
        // Para produção, vamos tentar criar uma migração
        try {
          console.log('📋 Creating migration...');
          execSync('npx prisma migrate dev --name add-default-values', { stdio: 'inherit' });
          console.log('✅ Migration created and applied!');
        } catch (migrateError) {
          console.error('❌ Migration failed:', migrateError.message);
          console.log('🔧 You may need to manually fix the database schema.');
          process.exit(1);
        }
      }
    }
    
  } catch (error) {
    console.error('❌ Migration process failed:', error.message);
    process.exit(1);
  }
}

// Execute if this script is run directly
if (require.main === module) {
  migrateDatabase();
}

module.exports = { migrateDatabase };