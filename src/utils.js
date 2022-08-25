// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRange = (start, end) => [...Array(end).keys()].map((el) => el + start);

const isNumber = (num) => !isNaN(parseFloat(num)) && isFinite(num);

const isValid = (min, max, cut = 0) => {
  const START_VALUE = 0;

  return !(
    min < START_VALUE ||
    max <= START_VALUE ||
    min >= max ||
    cut < START_VALUE ||
    !isNumber(min) ||
    !isNumber(max) ||
    !isNumber(cut) ||
    !Number.isInteger(cut));
};

const getRandomFloat = (min, max, cut) => isValid(min, max, cut)
  ? Number((Math.random() * (max - min + 1) + min).toFixed(cut))
  : 'Недопустимые значения';

const getRandomArr = (items) => {

  const newArr = getRandomInteger(0, items.length - 1);

  return items.slice(newArr);
};

const generateData = (data) => {

  const randomIndex = getRandomInteger(0, data.length - 1);

  return data[randomIndex];
};

export {
  generateData,
  getRandomInteger,
  getRandomFloat,
  getRandomArr,
  getRange
};
