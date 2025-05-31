import React from 'react';

type WhatsAppChatProps = {
  phoneNumber: string;
};

const WhatsAppChat: React.FC<WhatsAppChatProps> = ({ phoneNumber }) => {
  const message = 'Hi! I would like to know more about your biomass products.';
  const link = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
    >
      <img src="/src/assets/Whatsapp.png" alt="WhatsApp" className="h-7 w-7" />
    </a>
  );
};

export default WhatsAppChat;
