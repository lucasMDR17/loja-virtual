// Menu toggle mobile
document.getElementById('btn-menu').addEventListener('click', () => {
  const menu = document.querySelector('nav ul.menu');
  menu.classList.toggle('show');
});

// Formulário contato validação
const form = document.getElementById('contact-form');
if(form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();
    const formMessage = document.getElementById('form-message');

    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Por favor, preencha todos os campos.';
      formMessage.style.color = 'red';
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formMessage.textContent = 'Digite um email válido.';
      formMessage.style.color = 'red';
      return;
    }

    formMessage.textContent = 'Mensagem enviada com sucesso!';
    formMessage.style.color = 'green';
    this.reset();
  });
}

// Efeito fade-in ao scroll
window.addEventListener('scroll', () => {
  const fadeElems = document.querySelectorAll('.fade-in');
  fadeElems.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50) {
      el.classList.add('visible');
    }
  });
});

// Efeito botão comprar: alerta simples
document.querySelectorAll('.btn-comprar').forEach(button => {
  button.addEventListener('click', () => {
    alert('Produto adicionado ao carrinho!');
  });
});
