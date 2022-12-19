import lunr from 'lunr';
import { SELECTOR } from '../constants';
import dataJson from '../data.json';
import getSearchData from '../helpers/get-search-data';
import getSearchResultData from '../helpers/get-search-result-data';

const resultItemTemplate = (item) => {
  return `
    <div class="modal-search-item">
      <h4 class="modal-search-item__title">
        <a href="${item.link}" title="${item.name}">${item.name}</a>
      </h4>
      <p class="modal-search-item__short-text">${item.text}</p>
    </div>
  `;
};

const getResultTemplate = (results) => {
  const resultContainer = (items) => `<div class="modal-search-list">${items}</div>`;
  
  if (results.ok && results.data.length > 0) {
    const list = results.data.map(item => resultItemTemplate(item));
    return resultContainer(list.join(''));
  } else {
    return resultContainer(`No results for "${results.data}"`);
  }
};

const getSearch = (param) => {
  const data = getSearchData(dataJson);
  const index = lunr(function () {
    this.ref('id');
    this.field('name');
    this.field('text');
  
    data.forEach(function(doc) {
      this.add(doc)
    }, this);
  });

  if (index.search(param) && index.search(param).length > 0) {
    const resultData = getSearchResultData(index.search(param), data);
    return getResultTemplate({data: resultData, ok: true});
  } else {
    return getResultTemplate({data: param, ok: false});
  }
};

export default function search() {
  const searchFormElement = document.getElementById(SELECTOR.modalSearchFormId);
  const searchModalElement = document.getElementById(SELECTOR.modalSearchId);
  const modalBodyElement = searchModalElement.querySelector(`.${SELECTOR.modalBody}`);

  const handleSearchForm = (event) => {
    const { target } = event;
    const searchResultElement = getSearch(target.value);
    modalBodyElement.innerHTML = searchResultElement;
  };

  searchFormElement.addEventListener('input', handleSearchForm);
  searchFormElement.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
      handleSearchForm(e);
    };
  });
}
