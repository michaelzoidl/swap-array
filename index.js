/* app imports */
const inputValidator = require("./service/validate-inputs.js");
const indexNumberValidator = require("./service/validate-index-numbers.js");

module.exports = (array, firstIndex, secondIndex) => {
  /* lets validate inputs first */
  let validationResult = inputValidator({array, firstIndex, secondIndex});

  if (validationResult.hasError === true) {
    throw new Error(validationResult.errorString);
  }
  else {
    /* keep the original array intact, so take a clone here */
    let resultArray = array.splice(0);

    /* set the values of both the index numbers (consider possibilities of negative values */
    let indexOne = (firstIndex >= 0) ? firstIndex : array.length - firstIndex;
    let indexTwo = (secondIndex >= 0) ? secondIndex : array.length - secondIndex;

    /* validate the index numbers at this point */
    let validateIndexOne = indexNumberValidator(indexOne, resultArray.length); 
    let validateIndexTwo = indexNumberValidator(indexTwo, resultArray.length);

    if (validateIndexOne.hasError === true) {
      throw new Error(validateIndexOne.errorString);
    }
    else if (validateIndexTwo.hasError === true) {
      throw new Error(validateIndexTwo.errorString);
    }
    else {
      let temp = resultArray[indexOne];
      resultArray[indexOne] = resultArray[indexTwo];
      resultArray[indexTwo] = temp;

      /* return to caller after the swap process */
      return resultArray;
    }
  }
}
