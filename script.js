const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.textContent = isOpen ? '×' : '☰';
  menu.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.textContent = '☰';
    menu.setAttribute('aria-expanded', 'false');
  });
});

const filterButtons = document.querySelectorAll('[data-filter]');
const eventCards = document.querySelectorAll('.event-card');
const count = document.getElementById('count');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    let visible = 0;
    eventCards.forEach(card => {
      const show = button.dataset.filter === 'all' || card.dataset.kind === button.dataset.filter;
      card.hidden = !show;
      if (show) visible++;
    });
    count.textContent = `${visible} ${visible === 1 ? 'experience' : 'experiences'}`;
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
