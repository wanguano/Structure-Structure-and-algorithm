/**
 * 二分查找
 * @param numsList 有序性数组
 * @param value 要查找的值
 * @returns 索引
 */
function binarySearch(numsList: number[], value: number) {
  // 1.定义左边的索引
  let leftIndex = 0
  // 2.定义右边的索引
  let rigthIndex = numsList.length - 1
  
  // 3.开始查找
  while (leftIndex <= rigthIndex) {
    let midIndex = Math.floor((rigthIndex + leftIndex) / 2)
    if (numsList[midIndex] === value) {
      return midIndex
    } else if (numsList[midIndex] < value) {
      leftIndex = midIndex + 1
    } else {
      rigthIndex = midIndex - 1
    }
  }
  return -1
}
console.log(binarySearch([1, 22, 33, 45, 52, 67, 100, 222], 67))
