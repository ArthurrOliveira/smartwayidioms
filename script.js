// Seleciona elementos necessários
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const contactForm = document.getElementById('contact-form');

// Função para alternar visibilidade do menu (adiciona/remove classe "active")
function toggleMenu() {
  // Adiciona ou remove a classe .active na lista de links do nav
  navLinks.classList.toggle('active');
}

// Ao clicar no botão de menu (hamburger), executa a função de toggle
hamburger.addEventListener('click', toggleMenu);

// Função para tratar envio do formulário de contato
function handleFormSubmit(event) {
  event.preventDefault(); // Impede o envio real do formulário
  // Exibe um alerta de confirmação (simulação de envio bem-sucedido)
  alert('Obrigado! Seus dados foram enviados com sucesso. Em breve entraremos em contato.');
  // Opcional: limpar os campos do formulário após enviar
  contactForm.reset();
}

// Ao submeter o formulário, executa a função de tratamento
contactForm.addEventListener('submit', handleFormSubmit);
