import lunr from 'lunr';
import { SELECTOR } from '../constants';
import dataJson from '../data.json';
import getSearchData from '../helpers/get-search-data';
import getSearchResult from '../helpers/get-search-result';

export default function search() {
  const searchFormElement = document.getElementById(SELECTOR.searchForm);
  const data = getSearchData(dataJson);

  function searchParams(param) {
    const index = lunr(function () {
      this.ref('id');
      this.field('name');
      this.field('text');
    
      data.forEach(function(doc) {
        this.add(doc)
      }, this);
    });

    const result = getSearchResult(index.search(param), data);
    /* denig */console.debug(result);
    
    return result;
  }

  function handleSearchForm(event) {
    const { target } = event;
    searchParams(target.value);
  };

  searchFormElement.addEventListener('input', handleSearchForm);
  searchFormElement.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      handleSearchForm(e);
    };
  });
}
