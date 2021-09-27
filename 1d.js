const checkPrime=function(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }

  var array=[3,27,44,30,17,97,24];

  array.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      console.log(element);
    } 
  });