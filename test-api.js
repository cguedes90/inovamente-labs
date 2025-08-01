const testApi = async () => {
  try {
    console.log('🧪 Testando API de posts do blog...')
    
    const response = await fetch('http://localhost:3000/api/blog')
    const data = await response.json()
    
    console.log('Status:', response.status)
    console.log('Posts encontrados:', data.posts?.length || 0)
    
    if (data.posts && data.posts.length > 0) {
      console.log('Primeiro post:', data.posts[0].title)
    }
    
  } catch (error) {
    console.error('Erro no teste:', error.message)
  }
}

testApi()
