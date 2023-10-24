import IList from '../types/IList'
interface IQueue<T> extends IList<T> {
  enqueue(element: T): void
  dequeue(): T | undefined
  
  // peek(): T | undefined
  // isEmpty(): boolean
  // size(): number
}
export default IQueue
