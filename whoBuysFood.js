function food(names){

    let name = names.lenght
    let randomPeople = Math.floor(Math.random * name)
    let randomPerson = names[randomPeople];


    console.log(`${randomPerson} is the random person`);



}

food(["Angela", "Val", "Ben"])