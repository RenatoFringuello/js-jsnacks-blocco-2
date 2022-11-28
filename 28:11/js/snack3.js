const nums = [12,123,134,432,63,756,6,789,9876,434,332,1,4,5645,477];
let sum = 0;
for (let i = 0; i < nums.length ; i++) {
    if(nums[i] % 2 === 0){
        sum += nums[i];
    }
}
console.log(sum);