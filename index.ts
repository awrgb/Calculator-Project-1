

import inquirer from 'inquirer';


const Details = await inquirer.prompt([
    {
        name: "Name",
        type: "string",
        message: "Enter your name: ",
    },
    {
        name: "Age",
        type: "number",
        message: "Enter your Age: ",
    },
    {
        name: "Qualification",
        type: "string, number",
        message: "Enter your Qualification: "
    }
])

console.log("Your Name is " + Details.Name)
console.log("Your Age is " + Details.Age)
console.log("Your Qualification is " + Details.Qualification)