function start(input){

    let w = Number(input[0]);       /// width of space  
    let l = Number(input[1]);       /// lenght of space
    let h = Number(input[2]);       /// highth of space

    let freeSpace = w * l * h       /// free space in Cubic meters

    let index = 3;
    let command = input[index];

    while(command !== "Done"){

        let numberOfBoxes = Number(command);
        freeSpace -= numberOfBoxes;

        if(freeSpace < 0){
            console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`);
            break;
        }
        index++
        command = input[index];
    }

    if(freeSpace >= 0){
        console.log(`${freeSpace} Cubic meters left.`);
    }



}
start (["10",
"1",
"2",
"4",
"6",
"Done"])