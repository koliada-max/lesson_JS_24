const number = parseInt(
    prompt ("please enter a number"),
);

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  console.log( factorial(`${number}`) );
