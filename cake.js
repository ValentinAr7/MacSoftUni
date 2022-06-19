function cake(input){

    let lenght = Number(input[0]);      /// lenght of the cake
    let width = Number(input[1]);       /// width of the cake
    let cakeSize = lenght * width
    let index = 2;
    let command = input[index];
    let numPieces = 0;

    while(command !== 'STOP'){
        let cakeParts = Number(command)
        numPieces += cakeParts;

        if(numPieces > sizeCake){
            console.log(`No more cake left! You need ${numPieces - cakeParts} pieces more.`)
            break;
        }

        index++
        command = input[index];
    }

    if (command === 'STOP'){
        if(numPieces <= sizeCake){

        }
    }

}
cake (["10", "2", "2", "4", "6", "STOP"])