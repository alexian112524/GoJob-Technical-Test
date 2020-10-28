const closestToZero = (intArray) => {
    if(!intArray || intArray.length === 0) return 0;

    let closestToZero = intArray[0];
    for(let i=1; i < intArray.length; i++) {
        if(intArray[i] === 0) return 0;
        if(Math.abs(closestToZero) > Math.abs(intArray[i])) {
            closestToZero = intArray[i];
        }
        else if(Math.abs(closestToZero) === Math.abs(intArray[i])) {
            closestToZero = closestToZero > intArray[i] ? closestToZero : intArray[i];
        }
    }

    return closestToZero;
}

exports.closestToZero = closestToZero;