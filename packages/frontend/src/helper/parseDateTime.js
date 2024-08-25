export const toDateFormat = function (input) {
  return new Date(input);
};

export const formatTwoDigit = (input) => {
  return input < 10 ? '0' + input : input;
};
