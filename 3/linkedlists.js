class LinkedListNode {
  constructor() {
    this.data = 0;
    this.next = null;
  }
}

function listItem(data) {
  const temp = new LinkedListNode();
  temp.data = data;
  temp.next = null;

  return temp;
}

let position = 0;
let middle = null;

function findMiddle(head) {
  if (head === null) {
    position /= 2;
    return;
  }

  position++;

  findMiddle(head.next);

  position--;

  if (position === 0) {
    middle = head;
  }

  findMiddle(head.next);
}

function getMiddle(head) {
  position = 0;
  middle = null;

  findMiddle(head);

  return middle;
}
