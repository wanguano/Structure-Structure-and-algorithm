// 封装一个栈结构-基于数组
class ArrayStack {
  // 定义栈/数组中的数据
  private data: any[] = []

  // 实现栈相关的操作
  // push: 将一个元素压入栈
  push(element: any): void {
    this.data.push(element)
  }

  // pop：将栈顶元素出栈
  pop(): any {
    return this.data.pop()
  }

  // peek：查看栈顶元素
  peek(): any {
    return this.data[this.data.length - 1]
  }

  // 检查栈中元素是否为空
  isEmpty(): boolean {
    return this.data.length === 0
  }

  // 查看栈中元素数量
  size(): number {
    return this.data.length
  }
}

// 创建Stack的实例
const stack1 = new ArrayStack()
stack1.push('aa')
stack1.push('bbb')
stack1.push('cccc')
console.log(stack1.peek())
console.log(stack1.size())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.pop())
console.log(stack1.isEmpty())

export {}