import * as R from 'ramda';

const addSeparators = R.reduce((arr, item: any) => {
  const prev = arr[arr.length - 1];
  if (!prev || item - prev == 1) {
    return [...arr, item];
  }

  const result = [...arr, '...', item];
  return result;
}, []);

const calculate = ({ page, pages }) => {
  const pageRangeDisplayed = 3;
  const marginPagesDisplayed = 1;

  const pageArray = R.compose(
    addSeparators,
    R.filter((item: any) => item > 0 && item <= pages),
    R.uniq
  )([
    1,
    ...R.range(2, 2 + marginPagesDisplayed),
    ...R.range(page - pageRangeDisplayed, page + pageRangeDisplayed + 1),
    ...R.range(pages - marginPagesDisplayed, pages + 1),
  ]);

  return pageArray;
};

export default calculate;
