function exercise(input){

    let change = Number(input[o]);
    let inCoins = Math.floor(change * 100);
    let cpinsCounter = 0;

    while(inCoins > 0){
        if(inCoins >= 200){
            inCoins -=200;
            cpinsCounter++;
        } else if (inCoins >= 100){
            inCoins -=100;
            cpinsCounter++;
    }


}