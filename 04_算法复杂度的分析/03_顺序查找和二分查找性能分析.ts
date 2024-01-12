import binarySearch from "./02_查找算法_二分查找";
import sequenceSearch from './01_查找算法-顺序查找'

const MAX_LENGTH = 1000000
const list = new Array(MAX_LENGTH).fill(1).map((_,index) => index)
const number = MAX_LENGTH / 2
const startTime = performance.now()
binarySearch(list, number)
const endTime = performance.now()
console.log(`${binarySearch.name}函数执行的执行效率为： ${endTime-startTime}`)

// binarySearch()

