// COUNTER ANIMATION
document.querySelectorAll('.count').forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100; // smoother and quicker animation

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(update, 15); // smoother step timing
    } else {
      counter.innerText = target;
    }
  };
  update();
});

// SCROLL REVEAL ANIMATION
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section').forEach(section => {
  revealObserver.observe(section);
});

// NAVIGATION HIGHLIGHTING (adds 'active' class to current nav link)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    if (pageYOffset >= top - height / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});
