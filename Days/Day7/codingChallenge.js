var removeElement = function(nums, val) {
    do {
        nums.splice(nums.indexOf(val), 1)
       }
      while (nums.indexOf(val) !== -1);
    return nums;
};

nums = [3,2,2,3]
val = 3
console.log(removeElement(nums, val))