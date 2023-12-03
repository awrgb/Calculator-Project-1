import inquirer from 'inquirer';
async function simulateShopping() {
    console.log('Welcome to the Supermarket!');
    // Scenario 1 - Buying Groceries
    const groceryChoice = await inquirer.prompt({
        type: 'list',
        name: 'groceryType',
        message: 'What do you want to buy?',
        choices: ['Fruits', 'Vegetables'],
    });
    let items;
    if (groceryChoice.groceryType === 'Fruits') {
        items = ['Apple', 'Banana', 'Orange', 'Mango', 'Orange', 'Grapes'];
    }
    else {
        items = ['Carrot', 'Broccoli', 'Tomato', 'Peas', 'Potato', 'Onion'];
    }
    console.log(`Available items: ${items.join(', ')}`);
    const selectedItems = await inquirer.prompt({
        type: 'checkbox',
        name: 'selectedItems',
        message: 'Select items to purchase:',
        choices: items,
    });
    const totalBill = selectedItems.selectedItems.length * 6;
    console.log(`Total Bill: $${totalBill.toFixed(2)}`);
    // Scenario 2 - Checking Discounts
    let discountedTotal = totalBill;
    if (totalBill > 5) {
        // Apply a 10% discount if the total bill is above $10
        discountedTotal = totalBill - totalBill * 0.3;
        console.log('Discount applied!');
    }
    console.log(`Discounted Total: $${discountedTotal.toFixed(2)}`);
    // Scenario 3 - Checkout Process
    const paymentMethod = await inquirer.prompt({
        type: 'list',
        name: 'paymentMethod',
        message: 'Choose your payment method:',
        choices: ['Credit Card', 'Cash', 'Mobile Payment'],
    });
    console.log(`You chose to pay with ${paymentMethod.paymentMethod}.`);
    console.log('Thank you for shopping with us!');
}
simulateShopping();
