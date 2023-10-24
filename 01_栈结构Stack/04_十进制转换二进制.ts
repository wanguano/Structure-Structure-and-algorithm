import ArrayStack from './02_stack-array'

// 十进制转换二进制
function DecimalToBinary(decimal: number): string {
  // 主要目的：将余数送入栈
  let stack = new ArrayStack<number>()
  let binary: number

  while (decimal > 0) {
    binary = decimal % 2
    stack.push(binary)
    decimal = Math.floor(decimal / 2)
  }
  let res = ''
  while (!stack.isEmpty()) {
    res += stack.pop()
  }

  return res
}

console.log(DecimalToBinary(15))
console.log(DecimalToBinary(32))
export {}
