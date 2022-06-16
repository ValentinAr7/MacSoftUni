function demo1(input){

let needMoney = Number(input[0]);
let currentMoney = Number(input[1]);
let index = 3;
let currentInput = input[index];
let spendDays = 1;
let days = 0;
let a = 9;
let b = 7;
let result = a / b

console.log(result);


while(currentMoney < needMoney){
    days++
    index++
    

    if(currentInput === "spend"){
        spendDays++

        if(spendDays === 5){
            console.log("You can't save enough money.");
            console.log(days);
            break;
        }

            let moneyToSpend = Number(input[index]);
            currentMoney -= moneyToSpend
    
        if(currentMoney < 0){
            currentMoney = 0;
        }
    } else if (currentInput === "save"){
        spendDays = 0;
        
        let moneyToSva = Number(input[index]);
        currentMoney+=moneyToSva

    }
    index++
    currentInput = input[index]
}

    if(currentMoney >= needMoney){
        console.log(`You saved the money for ${days} days. Thank you`);
    }
}

    demo1(["2000", "1000", "spend", "1200", "save", "2000"])
