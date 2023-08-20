//запит користувача
let num1 = prompt('Please enter the first random number', 'your answer');
let num2 = prompt('Please enter the second random number', 'your answer');

// Формули мат операцій
let sum = Number(num1) + Number(num2);
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

// Вивід результатів 
alert(`results:
${num1} + ${num2} = ${sum}
${num1} - ${num2} = ${difference}
${num1} * ${num2} = ${product}
${num1} / ${num2} = ${quotient}`);