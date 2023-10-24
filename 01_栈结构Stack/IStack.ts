interface IStack<T> extends IList<T> {
  push(element: T): void
  pop(): T | undefined
  // isEmpty(): boolean
  // size(): number
  // peek(): T | undefined
}

export default IStack
