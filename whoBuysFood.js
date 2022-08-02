function food(names){

    let name = names.lenght
    let randomPeople = Math.floor(Math.random * name)
    let randomPerson = names[randomPeople];


    console.log(`${randomPerson} this is the random person`);

    let a = 10
    let b = 5
    let c = 9 

    let result = a + b
    let resukt1 = a + b * c
    let result2 = a * b

    let j = resukt1 +  result2
    console.log(j);
    console.log("is the final result");
    console.log("Thank you");




}

food(["Angela", "Val", "Ben"])