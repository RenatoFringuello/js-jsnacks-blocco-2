const nums = [12,234,45,65,567,76,67,34,345,35,35,2,52,64,2222,765,123,87];

let sum = 0, average;

let max = Number.MIN_VALUE;
// su max possiamo mettere banalmente il primo valore dell'array

for (let i = 0; i < 10; i++) {
    sum += nums[i];
    //(condizione) ? valoreDiVero : valoreDiFalso
    max = (max < nums[i]) ? nums[i] : max;
    
    if(max < nums[i]){
        max = nums[i];
    }
}
average = sum / 10;
console.log(sum, average, max);