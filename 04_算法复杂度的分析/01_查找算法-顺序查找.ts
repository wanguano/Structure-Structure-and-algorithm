function sequenceSearch(nums: number[], value: number) {
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === value) {
      return index
    }
  }
  return -1
}

console.log(sequenceSearch([1, 22, 33, 45, 52, 67, 100, 222], 67))
