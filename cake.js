function cake(input){

    let lenght = Number(input[0]);      /// lenght of the cake
    let width = Number(input[1]);       /// width of the cake
    let cakeSize = lenght * width
    let index = 2;
    let inputIndex = input[index];
    let numPieces = 0;

    while(inputIndex !== 'STOP'){
        let cakeParts = Number(inputIndex)
        numPieces += cakeParts;

        if(numPieces > cakeSize){
            console.log(`No more cake left! You need ${numPieces - cakeParts} pieces more.`)
            break;
        }

        index++
        inputIndex = input[index];
    }

    if (inputIndex === 'STOP'){
        if(numPieces <= sizeCake){

        }
    }

}
cake (["10", "2", "2", "4", "6", "STOP"])