function steps(input){

let index = 0;
let steps = Number(input[index]);

let stepsCounter = 0;

while(steps <= 10000){
    stepsCounter = input[index]
    index++
    steps += stepsCounter

    if(steps > 10000){
        console.log(`Goal reached! Good Job!`);
        console.log(`${steps - stepsCounter} steps over the goal!`);

    } else if (input[index] === "Going Home"){
        stepsCounter = input[index]
        index++
        steps += stepsCounter
        break;

    }


}
console.log(steps);

}

steps (["1000", "1500", "Going Home", "2000", " 6500"])