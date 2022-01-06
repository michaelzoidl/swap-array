/**
  * helps to validate the incoming arguments for this package
  **/

module.exports = ({array, firstIndex, secondIndex}) => {
  let errorString = "";
  let hasError = true;

  /* validation process is needed here */
  if (!Array.isArray(array)) {
    errorString = ": requireds first argument 'array' to be of type array";
  }
  else if (Number.isNaN(firstIndex) || Number.isNaN(secondIndex)) {
    errorString = ": requires index arguments to not be a 'NAN' Type";
  }
  else if (typeof firstIndex !== "number" || typeof secondIndex !== "number") {
    errorString = ": requires index arguments to be of number type only";
  }
  /* here it means that the validation process was fine */
  else {
    hasError = false;
  }

  return {errorString, hasError};
}
