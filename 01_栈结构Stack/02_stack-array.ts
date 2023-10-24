// 封装一个栈结构-基于数组
// 添加泛型：1.可以在运行时，知道传递类型的参数（有更好的JS提示）
// 封装接口： 1.因为多种数据类型都可以实现栈结构
//           2.那么实现栈结构都有一个通用性的方法 push() pop() peek() size() isEmpty()

import IStack from "./IStack"

//           3.将通用的方法放入接口中,可以让多个类来实现接口
class ArrayStack<T> implements IStack<T> {
  // 定义栈/数组中的数据
  private data: T[] = []

  // 实现栈相关的操作
  // push: 将一个元素压入栈
  push(element: T): void {
    this.data.push(element)
  }

  // pop：将栈顶元素出栈
  pop(): T | undefined {
    return this.data.pop()
  }

  // peek：查看栈顶元素
  peek(): T | undefined {
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

export default ArrayStack