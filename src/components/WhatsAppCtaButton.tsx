'use client'

interface WhatsAppCtaButtonProps {
  message: string
  text: string
  style?: React.CSSProperties
}

export default function WhatsAppCtaButton({ message, text, style }: WhatsAppCtaButtonProps) {
  const handleClick = () => {
    const phoneNumber = "5511974508168";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        background: '#25d366',
        border: 'none',
        color: 'white',
        padding: '16px 32px',
        borderRadius: '12px',
        fontSize: '16px',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        boxShadow: '0 8px 32px rgba(37, 211, 102, 0.3)',
        ...style
      }}
    >
      💬 {text}
    </button>
  )
}
