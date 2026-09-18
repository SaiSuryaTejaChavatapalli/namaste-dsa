class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addAtTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = newNode;
    }

    this.size++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.size) return;
    if (index == 0) {
      return this.addAtHead(val);
    } else if (index == this.size) {
      return this.addAtTail(val);
    } else {
      const newNode = new Node(val);
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.size++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.size) return;
    if (index == 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
  }

  get(index) {
    if (index < 0 || index >= this.size) return -1;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  display() {
    const elements = [];
    let current = this.head;

    while (current) {
      elements.push(current.val);
      current = current.next;
    }

    console.log(elements.join(" -> ") + " -> null");
  }
}
