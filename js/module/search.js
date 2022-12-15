import lunr from 'lunr';
import { SELECTOR } from '../constants';
import data from '../data.json';

export default function search() {
  console.log('search is here');
  const searchFormElement = document.getElementById(SELECTOR.searchForm);

  function searchParams(param) {
    const idx = lunr(function () {
      this.ref('name');
      this.field('text');
    
      data.forEach(function (doc) {
        this.add(doc)
      }, this);
    });
    
    return idx.search(param);
  }

  function handleSearchForm(event) {
    console.debug(event);
    // console.debug('press Enter');
    console.log(searchParams('JavaScript'));
  };

  searchFormElement.addEventListener('input', handleSearchForm);
}