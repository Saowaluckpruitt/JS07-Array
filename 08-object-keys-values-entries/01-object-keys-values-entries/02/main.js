const checkEmptyObj = (obj) => {
  if (obj === null || obj === {}) {
    return true;
  }
  return false;
};
