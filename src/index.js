
exports.min = function min(array) {
    if(array != null && array.length > 0){
        let min = array[0];
        array.forEach(element => {
            if(element < min) min = element;
        });
        return min;
    }
    else return 0;
}

exports.max = function max(array) {
    if(array != null && array.length > 0){
        let max = array[0];
        array.forEach(element => {
            if(element > max) max = element;
        });
        return max;
    }
    else return 0;
}

exports.avg = function avg(array) {
    if(array != null && array.length > 0){
        let avg = 0;
        array.forEach(element => {
            avg += element;
        });
        return avg / array.length;
    }
    else return 0;
}
