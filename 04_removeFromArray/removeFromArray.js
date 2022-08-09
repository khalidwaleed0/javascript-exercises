const removeFromArray = function(original=[],...unwantedArr) {
  let newArr = [];
  for(element of original)
  {
    if(!(unwantedArr.includes(element)))
      newArr.push(element);
  }
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
