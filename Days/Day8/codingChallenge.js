var removeDuplicates = function(nums) {
    for(var i = 0; i < nums.length; i++){
        for(var j = 1; j < nums.length-1; j++){
            if(nums[i] === nums[j]){
                console.log(`${nums[i]} and ${nums[j]}`)
                nums.splice(nums[j],1)
            }
        }
    }
    console.log(nums)
    return nums.length;
};

// var nums = [1,1,1];
// var nums = [0,0,1,1,1,2,2,3,3,4]
var nums = [1,1]
console.log(removeDuplicates(nums))






