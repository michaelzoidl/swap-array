/**
  * helps to check the validity of index numbers
  **/

module.exports = (indexNumber, arrayLength) => {
  let hasError = true;
  let errorString = "";

  if (indexNumber < 0) {
    errorString = ": 'index' number value to greater than zero";
  }
  else if (indexNumber >= arrayLength) {
    errorString = ": 'index' number value to be less than array.length value";
  }
  else {
    hasError = false;
  }

  return {hasError, errorString};
};
