let todo = prompt('Яку операцію ви бажаєте виконати (add, sub, mult, div)?', 'ваша відповідь');
let num1 = prompt('Введіть перше число', 'ваша відповідь');
let num2 = prompt('Введіть друге число', 'ваша відповідь');

let result;

switch(todo) {
    case 'add':
        result = Number(num1) + Number(num2);
        alert(` ${num1} + ${num2} = ${result}`);
    break;
    case 'sub':
        result = num1 - num2;
        alert(` ${num1} - ${num2} = ${result}`);
    break;
    case 'mult':
        result = num1 * num2;
        alert(` ${num1} * ${num2} = ${result}`);
    break;
    case 'div':
        result = num1 / num2;
        alert(` ${num1} / ${num2} = ${result}`);
    break;

    default:
        alert(`Переконайтесь, що правильно записали назву операції`);
}