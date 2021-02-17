const util = require("util");

class NodeElement {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element) {
    const node_tmp = new NodeElement(element);

    if (this.head == null) {
      this.head = node_tmp;
      this.size++;
      return;
    }

    var current_node = this.head;

    while (current_node.next) {
      current_node = current_node.next;
    }

    current_node.next = node_tmp;
    this.size++;
  }

  printList() {
    let node_val='';
    var current = this.head;
    
    while (current.next) {     
      node_val += current.element + " ";
      current = current.next;
    }

    node_val += current.element;

    console.log(node_val);
    console.log(util.inspect(this.head, true, null, true));
  }
}

var x = new LinkedList();

x.add(5);
x.add(6);
x.add(7);
x.add(8);

x.add(9);

x.printList();
