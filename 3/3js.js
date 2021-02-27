const first = prompt ("please enter your first number");
const second = prompt ("please enter your second number");
const third = prompt ("please enter your third number");

function factorial(a, b, c) {
    return parseInt(
     String(a) + String(b) + String(c),
    );
}
  
console.log(`your united number is ${factorial(first, second, third)}`);
