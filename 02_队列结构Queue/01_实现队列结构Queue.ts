import IQueue from "./IQueue";
// 实现队列结构
class ArrayQueue<T> implements IQueue<T> {

  // 队列存放的数据
  private data: T[] = []

  // 添加元素进入队列
  enqueue(element: T): void {
    this.data.push(element)
  }
  dequeue(): T | undefined {
    return this.data.shift()
  }
  peek(): T | undefined {
    return this.data[0]
  }
  isEmpty(): boolean {
    return this.data.length===0
  }
  size(): number {
    return this.data.length
  }

}

export default ArrayQueue