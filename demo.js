function demo(input){

let needMoney = Number(input[0]);
let currentMoney = Number(input[1]);
let index = 2;
let currentInput = input[index];
let spendDays = 0;
let days = 0;

while(spendDays !== 5){
    days++

    if(currentInput === "spend"){

        index++
        currentInput = Number(input[index]);
        currentMoney -= currentInput
        spendDays++
    
        if(currentMoney < 0){
            currentMoney = 0;
        }
    } else if (currentInput === "save"){
        spendDays = 0;
        index++;
        currentInput = Number(input[index]);
        currentMoney+=currentInput

    }

}

}
