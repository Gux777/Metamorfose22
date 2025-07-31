document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    // Newsletter subscription
    function subscribeNewsletter(event) {
      event.preventDefault();
      const email = event.target.querySelector('input').value;
      
      // Simulate subscription
      alert(`Obrigado por se inscrever! Você receberá nossas novidades em ${email}`);
      event.target.reset();
      
      // Add success animation
      const button = event.target.querySelector('button');
      button.innerHTML = '✓ Inscrito!';
      button.style.background = '#4CAF50';
      
      setTimeout(() => {
        button.innerHTML = 'Assinar';
        button.style.background = '';
      }, 3000);
    }

    // Contact form
    function sendMessage(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const name = formData.get('nome');
      
      // Simulate message sending
      alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Responderemos em breve!`);
      event.target.reset();
      
      // Add success animation
      const button = event.target.querySelector('button');
      button.innerHTML = '✓ Enviado!';
      button.style.background = '#4CAF50';
      
      setTimeout(() => {
        button.innerHTML = 'Enviar Mensagem';
        button.style.background = '';
      }, 3000);
    }

    

    // Add scroll effects
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 100) {
        nav.style.background = 'rgba(255,255,255,0.98)';
      } else {
        nav.style.background = 'rgba(255,255,255,0.95)';
      }
    });

    // Animate cards on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Initialize animations
    document.addEventListener('DOMContentLoaded', () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
      });
    });