console.log('search Owner');

const searchOFormEl = document.getElementById('search-o');
const searchInputEl = searchOFormEl.querySelector('input');

searchOFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit event');
});

searchInputEl.addEventListener('input', () => console.log('input event'));
