#!/user/bin/env node
import inquirer from "inquirer";
//import inquirer from node modules
// currency exchange values
let currency = {
    USD: 1, //baseCurrency
    Euro: 0.96,
    INR: 0.74,
    PKR: 280,
};
let ans = await inquirer.prompt([{
        message: "Select from currency: ",
        type: "list",
        name: "from",
        choices: ["USD", "Euro", "INR", "PKR"]
    },
    {
        message: "Select to currency: ",
        type: "list",
        name: "to",
        choices: ["USD", "Euro", "INR", "PKR"]
    },
    {
        message: "Enter your amount: ",
        type: "number",
        name: "amount"
    }
]);
let fromAmount = currency[ans.from];
let toAmount = currency[ans.to];
let amount = ans.amount;
let baseAmount = Math.floor(amount / fromAmount);
let convertAmount = Math.floor(toAmount * baseAmount);
console.log(`Converted amount: ${convertAmount}`);
