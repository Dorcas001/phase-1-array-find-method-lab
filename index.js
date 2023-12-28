// code your solution here

function superbowlWin(record){
    let result1 = record.find((x) => x.result === 'W');
    if(result1){
        return result1.year;
    }else{
        return undefined
    }
}

