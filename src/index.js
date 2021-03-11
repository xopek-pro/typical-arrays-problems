
exports.min = function min (array) {  
  if (array === undefined || array.length==0){
    return 0;
  } else {
    let minValue=array[0];
    for (let index = 1; index < array.length; index++) {
      if (array[index] < minValue){
        minValue = array[index];
      };      
    }
    return minValue;
  }
}

exports.max = function max (array) {
  if (array === undefined || array.length==0){
    return 0;
  } else {
    let maxValue=array[0];
    for (let index = 1; index < array.length; index++) {
      if (array[index] > maxValue){
        maxValue = array[index];
      };      
    }
    return maxValue;
  }
}

exports.avg = function avg (array) {
  if (array === undefined || array.length==0){
    return 0;
  } else {
    let sum=0;
    for (let index = 0; index < array.length; index++) {
        sum += array[index];
    }
    return sum/array.length;
  }
}
