import lunr from "lunr";
import { SELECTOR } from "./constants";

export default function search() {
  console.log('search is here');
  const searchFormElement = document.getElementById(SELECTOR.searchForm);

  function handleSearchForm(event) {
    console.debug(event);
    console.debug('press Enter');
  };

  searchFormElement.addEventListener('change', handleSearchForm);
}
