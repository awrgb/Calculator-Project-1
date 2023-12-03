
import inquirer from 'inquirer';
async function runCalculator() {
    const userInput = await inquirer.prompt([
        {
            type: 'number',
            name: 'num1',
            message: 'Enter the first number:',
        },
        {
            type: 'list',
            name: 'operation',
            message: 'Select operation:',
            choices: ['add', 'subtract', 'multiply', 'divide'],
        },
        {
            type: 'number',
            name: 'num2',
            message: 'Enter the second number:',
        },
    ]);
    const { num1, operation, num2 } = userInput;
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                console.log('Error: Cannot divide by zero');
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log('Invalid operation');
            return;
    }
    console.log(`Result of ${num1} ${operation} ${num2}: ${result}`);
}
runCalculator();
