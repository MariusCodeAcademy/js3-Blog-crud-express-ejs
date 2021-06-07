import MyFetch from './class/MyFetch.class.js';
import SearchOwners from './class/SearchOwners.class.js';
console.log('search Owner');

const searchOFormEl = document.getElementById('search-o');
const searchInputEl = searchOFormEl.querySelector('input');
const ownersListEl = document.getElementById('owners-list');

searchOFormEl.addEventListener('submit', (event) => {
  event.preventDefault();

  MyFetch.searchOwners(searchInputEl.value, (ats) => new SearchOwners(ats.found, ownersListEl));
});

searchInputEl.addEventListener('input', () => {
  MyFetch.searchOwners(searchInputEl.value, (ats) => new SearchOwners(ats.found, ownersListEl));
});
