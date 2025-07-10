// Arquivo: src/components/WhatsAppButton.tsx
import React from 'react';

/**
 * Botão flutuante do WhatsApp.
 * Este botão fica fixado no canto inferior direito da tela e, ao ser clicado,
 * abre uma conversa no WhatsApp no número da empresa.
 */
const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5521981616840?text=Olá,%20gostaria%20de%20informações%20sobre%20o%20curso%20de%20inglês%20da%20SmartWay%20Idioms"
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg 
                 flex items-center justify-center"
      /* 
        Classes Tailwind utilizadas:
        - fixed bottom-4 right-4: posiciona o elemento fixo a 1rem (16px) do bottom e right (canto inferior direito).
        - bg-green-500 hover:bg-green-600: botão verde (tom padrão do WhatsApp) que escurece no hover.
        - text-white: ícone em branco para contraste.
        - p-4: padding interno para deixar o botão circular proporcional.
        - rounded-full: bordas totalmente arredondadas (forma de círculo).
        - shadow-lg: adiciona sombra ao botão.
        - flex items-center justify-center: centraliza o conteúdo (ícone) dentro do botão.
      */
    >
      {/* Imagem ou ícone do WhatsApp */}
      <img 
        src="/whatsappbutton.svg" 
        alt="WhatsApp" 
        className="w-8 h-8"
        /*
          Aqui usamos uma imagem do ícone do WhatsApp.
          - w-8 h-8: define largura e altura do ícone (2rem, aproximadamente 32px).
          Você pode baixar um ícone oficial do WhatsApp (formato PNG/SVG) e colocá-lo na pasta public/assets.
          Certifique-se de atualizar o caminho src acima de acordo com a localização do arquivo do ícone.
        */
      />
    </a>
  );
};

export default WhatsAppButton;
