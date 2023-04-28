const isShadow = n => {
  return n.n % 2 ? ' 0px 0px 16px 5px #262625ad' : '';
};
const isOdd = n => {
  return n.n % 2 ? '#dcdcdcd9' : '#0000004b';
};

export { isOdd, isShadow };
