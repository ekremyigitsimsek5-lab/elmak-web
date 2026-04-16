// Filter buttons
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  if (navLinks.style.display === 'flex') {
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#f8f5ef';
    navLinks.style.padding = '1.5rem 5%';
    navLinks.style.gap = '1rem';
    navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
  }
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .service-card, .testi-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  nav.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.08)' : 'none';
});

// Form submit
document.querySelector('.contact-form button').addEventListener('click', function() {
  const inputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
  let valid = true;
  inputs.forEach(i => { if (!i.value.trim() && i.type !== 'tel') valid = false; });
  if (valid) {
    this.textContent = '✓ Mesajınız İletildi!';
    this.style.background = '#2d7a4f';
    setTimeout(() => {
      this.textContent = 'Gönder';
      this.style.background = '';
      inputs.forEach(i => i.value = '');
    }, 3000);
  } else {
    this.textContent = 'Lütfen alanları doldurun';
    this.style.background = '#c0392b';
    setTimeout(() => {
      this.textContent = 'Gönder';
      this.style.background = '';
    }, 2000);
  }
});
