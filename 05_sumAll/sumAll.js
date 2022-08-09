const sumAll = function(a,b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number')
    return 'ERROR';
  let min = Math.min(a,b);
  let max = Math.max(a,b);
  if(min<0)
    return 'ERROR';
  else
  {
    let sum = 0;
    for(let i=min ; i<=max ; i++)
    {
      sum += i;
    }
    return sum;
  }
  
};

// Do not edit below this line
module.exports = sumAll;
