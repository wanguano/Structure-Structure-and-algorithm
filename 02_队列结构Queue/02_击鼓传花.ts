import ArrayQueue from './01_实现队列结构Queue'

let queue1 = new ArrayQueue<string>()
queue1.enqueue('jack')
queue1.enqueue('why')
queue1.enqueue('vitor')

/**
 * 击鼓传花的实现(核心: 利用队列来实现,每次数字+1的同时 当前这个人扔去最后面重新排队数数)
 * @param arr 排队的人数
 * @param count 每数几个数淘汰几个人
 */
function hotPotato(arr: string[], count: number):number {
  // 创建队列,初始化数数的数字
  let i: number = 0
  let queue = new ArrayQueue<string>()

  // 存放人员
  for (const item of arr) {
    queue.enqueue(item)
  }

  // 只有游戏的人数大于一个人,游戏就一直进行
  while (queue.size() > 1) {
    // 数数的人,数的不是3,就重新排队(人数排队到最后面,重新排)
    i++
    if (i != count) {
      queue.enqueue(queue.dequeue() as string)
    } else {
      i = 0
      queue.dequeue()
    }
  }

  // 返回索引
  let name = queue.dequeue() as string
  return arr.indexOf(name) + 1
}

const leftName = hotPotato(["why", "james", "kobe", "curry","abc", "cba", "nba", "mba"], 4)
console.log(leftName)

export {
  
}