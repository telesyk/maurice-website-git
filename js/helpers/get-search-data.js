import { nanoid }  from 'nanoid';

const getSearchData = (data) => {
  const dataList = typeof data === 'string'
    ? JSON.parse(data)
    : data;

  if (!dataList.length) return console.error('Error: dataList is not an array');

  return dataList.map(dataItem => {
    return {
      ...dataItem,
      id: nanoid(),
    }
  });
};

export default getSearchData;
