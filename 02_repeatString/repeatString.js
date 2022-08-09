const repeatString = function(word, repeatCount) {
  if(repeatCount<0) return 'ERROR'
  let str = '';
  for(let i=0 ; i<repeatCount ; i++)
  {
    str+=word;
  }
  return str;
};

// Do not edit below this line
module.exports = repeatString;
