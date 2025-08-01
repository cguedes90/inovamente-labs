'use client';

import { useState, useEffect, useRef } from 'react';

interface ChatMessage {
  id: string;
  content: string;
  isBot: boolean;
  messageType: 'TEXT' | 'OPTION' | 'LEAD_CAPTURE';
  timestamp: Date;
}

interface ChatbotProps {
  onClose?: () => void;
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState('welcome');
  const [leadData, setLeadData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [sessionId, setSessionId] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Gerar ID da sessão
    setSessionId(`session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
    
    // Mensagem inicial
    addBotMessage('👋 Olá! Bem-vindo à InovaMente Labs! Sou seu assistente virtual. Como posso ajudá-lo hoje?', 'OPTION');
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (content: string, type: 'TEXT' | 'OPTION' | 'LEAD_CAPTURE' = 'TEXT') => {
    const newMessage: ChatMessage = {
      id: `bot_${Date.now()}`,
      content,
      isBot: true,
      messageType: type,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const addUserMessage = (content: string) => {
    const newMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      content,
      isBot: false,
      messageType: 'TEXT',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    addUserMessage(message);
    setInputValue('');

    // Simular delay de resposta
    setTimeout(() => {
      handleBotResponse(message);
    }, 1000);
  };

  const handleBotResponse = (userMessage: string) => {
    const lowerMessage = userMessage.toLowerCase();

    switch (currentStep) {
      case 'welcome':
        if (lowerMessage.includes('serviço') || lowerMessage.includes('desenvolvimento') || lowerMessage.includes('tecnologia')) {
          addBotMessage('Ótimo! Oferecemos diversos serviços de tecnologia. Que tal me contar um pouco sobre você para personalizar nossa conversa?');
          setCurrentStep('collect_name');
          setTimeout(() => {
            addBotMessage('Qual é o seu nome?', 'LEAD_CAPTURE');
          }, 1000);
        } else if (lowerMessage.includes('contato') || lowerMessage.includes('orçamento')) {
          addBotMessage('Perfeito! Vou coletar seus dados para que nossa equipe entre em contato. Qual é o seu nome?', 'LEAD_CAPTURE');
          setCurrentStep('collect_name');
        } else {
          addBotMessage('Entendi! Posso ajudá-lo com informações sobre nossos serviços ou coletuar seus dados para um contato personalizado. O que prefere?', 'OPTION');
        }
        break;

      case 'collect_name':
        setLeadData(prev => ({ ...prev, name: userMessage }));
        addBotMessage(`Prazer em conhecê-lo, ${userMessage}! Qual é o seu email para contato?`, 'LEAD_CAPTURE');
        setCurrentStep('collect_email');
        break;

      case 'collect_email':
        if (validateEmail(userMessage)) {
          setLeadData(prev => ({ ...prev, email: userMessage }));
          addBotMessage('Ótimo! Qual é o seu telefone?', 'LEAD_CAPTURE');
          setCurrentStep('collect_phone');
        } else {
          addBotMessage('Por favor, insira um email válido.');
        }
        break;

      case 'collect_phone':
        setLeadData(prev => ({ ...prev, phone: userMessage }));
        addBotMessage('Perfeito! Qual é o nome da sua empresa?', 'LEAD_CAPTURE');
        setCurrentStep('collect_company');
        break;

      case 'collect_company':
        const finalLeadData = { ...leadData, company: userMessage };
        setLeadData(finalLeadData);
        addBotMessage('Excelente! Seus dados foram coletados com sucesso. Nossa equipe entrará em contato em breve. Obrigado pelo interesse na InovaMente Labs! 🚀');
        setCurrentStep('completed');
        
        // Salvar no banco
        saveChatToDatabase(finalLeadData);
        break;

      default:
        addBotMessage('Obrigado pela conversa! Se precisar de mais alguma coisa, estarei aqui.');
    }
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const saveChatToDatabase = async (finalLeadData: any) => {
    try {
      const response = await fetch('/api/chatbot/conversation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sessionId,
          leadData: finalLeadData,
          messages
        })
      });

      if (!response.ok) {
        console.error('Erro ao salvar conversa');
      }
    } catch (error) {
      console.error('Erro ao salvar conversa:', error);
    }
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(option);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H16M8 8H16M8 16H12M21 12C21 16.4183 16.4183 21 12 21C10.8989 20.9975 9.81501 20.7516 8.826 20.281L3 21L4.719 15.174C4.24836 14.185 4.00246 13.1011 4 12C4 7.58172 8.58172 3 13 3C17.4183 3 21 7.58172 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <span className="font-semibold">InovaMente Assistant</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.isBot
                  ? 'bg-gray-100 text-gray-800'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {/* Opções iniciais */}
        {currentStep === 'welcome' && messages.length === 1 && (
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => handleOptionClick('Quero saber sobre seus serviços')}
              className="bg-blue-50 hover:bg-blue-100 text-blue-600 p-2 rounded-lg transition-colors text-sm"
            >
              📋 Conhecer nossos serviços
            </button>
            <button
              onClick={() => handleOptionClick('Quero um orçamento')}
              className="bg-purple-50 hover:bg-purple-100 text-purple-600 p-2 rounded-lg transition-colors text-sm"
            >
              💰 Solicitar orçamento
            </button>
            <button
              onClick={() => handleOptionClick('Preciso de suporte')}
              className="bg-green-50 hover:bg-green-100 text-green-600 p-2 rounded-lg transition-colors text-sm"
            >
              🛠️ Suporte técnico
            </button>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      {currentStep !== 'completed' && (
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
