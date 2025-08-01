const testTicketsAPI = async () => {
  try {
    // Primeiro fazer login para obter o token
    const loginResponse = await fetch('http://localhost:3003/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'cliente@exemplo.com',
        password: '123456',
        type: 'client'
      }),
    });

    const loginResult = await loginResponse.json();
    console.log('Login Status:', loginResponse.status);
    console.log('Token obtido:', !!loginResult.token);

    if (loginResult.token) {
      // Agora testar a API de tickets
      const ticketsResponse = await fetch('http://localhost:3003/api/tickets', {
        headers: {
          'Authorization': `Bearer ${loginResult.token}`
        }
      });

      const ticketsResult = await ticketsResponse.json();
      console.log('Tickets Status:', ticketsResponse.status);
      console.log('Tickets Response:', ticketsResult);
      console.log('É array?', Array.isArray(ticketsResult));
      console.log('Tipo:', typeof ticketsResult);
    }
  } catch (error) {
    console.error('Erro:', error);
  }
};

testTicketsAPI();
