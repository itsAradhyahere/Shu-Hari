const WhatsAppChat = () => {
  const phoneNumber = '919876543210';
  const message = 'Hi! I would like to know more about your biomass products.';
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 animate-bounce group"
    >
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 3.002c-7.18 0-13 5.82-13 13 0 2.287.6 4.53 1.736 6.5L3 29l6.678-1.717c1.855 1.01 3.945 1.537 6.324 1.537h.001c7.18 0 13-5.82 13-13s-5.82-13-13-13zm0 23.938c-1.987 0-3.905-.52-5.6-1.502l-.4-.234-3.967 1.02 1.06-3.866-.26-.4a10.9 10.9 0 01-1.72-5.922c0-6.066 4.936-11.002 11-11.002 6.066 0 11.002 4.936 11.002 11.002 0 6.065-4.936 11-11.002 11zm5.855-8.14c-.3-.15-1.77-.87-2.047-.97-.274-.1-.475-.15-.675.15-.198.3-.775.97-.95 1.17-.174.198-.35.224-.65.075s-1.27-.47-2.42-1.5c-.89-.79-1.49-1.77-1.66-2.07-.175-.3-.02-.46.13-.61.134-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.25-.6-.5-.52-.675-.53l-.575-.01c-.2 0-.525.075-.8.375s-1.05 1.025-1.05 2.5 1.075 2.9 1.225 3.1c.15.2 2.12 3.23 5.13 4.53.717.31 1.276.49 1.71.63.717.23 1.37.2 1.885.12.575-.086 1.77-.72 2.02-1.413.25-.693.25-1.287.175-1.413-.075-.125-.275-.2-.575-.35z" />
      </svg>
    </a>
  );
};

export default WhatsAppChat;