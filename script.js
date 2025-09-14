// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Activate tab from dropdown menu
document.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', function(e) {
    const target = this.getAttribute('href').substring(1);
    const tab = document.querySelector(`button[data-bs-target="#${target}"]`);
    if (tab) {
      tab.click();
    }
  });
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.classList.add('shadow-lg');
  } else {
    nav.classList.remove('shadow-lg');
  }
});
