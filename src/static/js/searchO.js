import MyFetch from './class/MyFetch.class.js';
import SearchOwners from './class/SearchOwners.class.js';
console.log('search Owner');

const searchOFormEl = document.getElementById('search-o');
const searchInputEl = searchOFormEl.querySelector('input');
const ownersListEl = document.getElementById('owners-list');

searchOFormEl.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('submit event');
  const userInput = searchInputEl.value;
  const userInputJson = JSON.stringify({ search: userInput });

  MyFetch.searchOwners(userInputJson, (ats) => {
    // istrinti esamus elementus sarase
    new SearchOwners(ats.found, ownersListEl);
    console.log(' ats', ats);
    // sugeneruoti sarasa is to ka gavom ats
  });
});

searchInputEl.addEventListener('input', () => {
  const userInput = searchInputEl.value;
  console.log('input event');
});
