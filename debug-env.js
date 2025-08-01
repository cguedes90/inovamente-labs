console.log('DATABASE_URL from env:', process.env.DATABASE_URL)
require('dotenv').config({ path: '.env.local' })
console.log('DATABASE_URL from .env.local:', process.env.DATABASE_URL)
