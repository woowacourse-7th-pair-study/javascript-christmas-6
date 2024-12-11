const stringToNumber = (string) => Number(string);

const stringToArray = (string) => string.split(',').map((item) => item.trim());

const parser = {
  stringToNumber,
  stringToArray,
};

export default parser;
