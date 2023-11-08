class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // 1.传过来的链表为空
  if (!head?.next) return null

  // 2.传过来的链表节点只有一个
  if (!head.next) return head

  // 反转链表
  let linkedList = head
  let arrNode: ListNode[] = []
  // ?? undefined
  // let newLinkList: ListNode | undefined = arrNode.pop();
  while (linkedList.val) {
    arrNode.push(linkedList)
    linkedList = linkedList.next as ListNode
  }

  let newLinkList: ListNode = new ListNode(arrNode.pop()?.val)
  while (arrNode.length) {
    newLinkList.next = arrNode.pop() as ListNode
  }

  newLinkList.next = null
  return newLinkList

  // let newList: ListNode = new ListNode()
  // let firstNode = head // = new ListNode()
  // while (firstNode) {
  //   while (head?.next) {
  //     head = head.next
  //   }
  //   newList.next = head
  //   head = null
  //   firstNode = firstNode.next
  // }

  // return newList
}
let lsNode1 = new ListNode(1)
lsNode1.next = new ListNode(2)
lsNode1.next.next = new ListNode(3)
lsNode1.next.next.next = new ListNode(4)

let reverseLinkedList = reverseList(lsNode1)
while(reverseLinkedList?.val) {
  console.log(reverseLinkedList.val)
  reverseLinkedList = reverseLinkedList.next
}

export {}
