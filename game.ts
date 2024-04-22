#! /usr/bin/env node

import inquirer from "inquirer";
const randomnumber=Math.floor(Math.random()*6+1)
const gaming = await inquirer.prompt({
name:"gm",
message:"please guess a number",
type:"number"
})

if(gaming.gm===randomnumber){
    console.log("congralations! you guessed right number");
}
else{
    console.log("you guessed wrong number");
}