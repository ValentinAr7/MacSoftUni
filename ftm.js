function exercise(input){

    let change = Number(input[0]);
    let inCoins = Math.floor(change * 100);
    let cpinsCounter = 0;

    while(inCoins > 0){
        if(inCoins >= 200){
            inCoins -=200;
            cpinsCounter++;
        } else if (inCoins >= 100){
            inCoins -=100;
            cpinsCounter++;
    }   else if (inCoins >= 50){
        inCoins -=50;
        cpinsCounter++;
} else if (inCoins >= 20){
    inCoins -=20;
    cpinsCounter++;
}else if (inCoins >= 10){
    inCoins -=10;
    cpinsCounter++;
} else if (inCoins >= 5){
    inCoins -=5;
    cpinsCounter++;
}else if (inCoins >= 2){
    inCoins -=2;
    cpinsCounter++;
} else if (inCoins >= 1){
    inCoins -=1;
    cpinsCounter++;
}
    }
console.log(cpinsCounter); 
}

exercise(["2.2"])