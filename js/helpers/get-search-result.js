const getSearchResult = (searchParams, searchData) => {
  return searchParams.map(param => {
    const currentSearchData = searchData.find(data => data.id === param.ref);

    return {
      ...currentSearchData,
      score: param.score,
    }
  });
};

export default getSearchResult;
