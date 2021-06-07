import MyFetch from './class/MyFetch.class.js';
console.log('search Owner');

const searchOFormEl = document.getElementById('search-o');
const searchInputEl = searchOFormEl.querySelector('input');

searchOFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit event');
  const userInput = searchInputEl.value;
  const userInputJson = JSON.stringify({ search: userInput });

  MyFetch.searchOwners(userInputJson, (ats) => {
    console.log(' ats', ats);
  });
});

searchInputEl.addEventListener('input', () => {
  const userInput = searchInputEl.value;
  console.log('input event');
});
