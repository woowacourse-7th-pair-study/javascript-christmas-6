const stringToNumber = (string) => Number(string);

const stringToArray = (string) => string.split(',').map((item) => item.trim());

const priceToLocaleString = (price) => price.toLocaleString('ko-KR');

const parser = {
  stringToNumber,
  stringToArray,
  priceToLocaleString,
};

export default parser;
