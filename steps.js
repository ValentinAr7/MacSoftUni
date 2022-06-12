function steps(input){

let index = 0;
let steps = Number(input[index]);

let stepsCounter = 0;

while(steps <= 10000){
    stepsCounter = Number (input[index])
    index++
    steps += stepsCounter

    if(steps > 10000){
        console.log(`Goal reached`);
    }


}
console.log(steps);

}

steps (["1000", "1500", "2000", " 6500"])