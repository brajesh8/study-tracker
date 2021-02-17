/** Node class **/

class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
}  


/** Linked List Class **/

class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
  
    // functions to be implemented 
    // add(element) 
    // insertAt(element, location) 
    // removeFrom(location) 
    // removeElement(element) 
  
    // Helper Methods 
    // isEmpty 
    // size_Of_List 
    // PrintList 
}

/*************************************************************************


1. add(element) – It adds an element at the end of list.

2 . insertAt(element, index) – It inserts an element at the given index in a list.

3. removeFrom(index) – It removes and returns an element from the list from the specified index

4. removeElement(element) – This method removes element from the list. It returns the removed element, or if its not found it returns -1.


----------------- Helper Methods ------------------------

5. indexOf(element) – it returns the index of a given element, if the element is in the list.

6. isEmpty() – it returns true if the list is empty.

7. size_of_list() – It returns the size of list

8. printList() – It prints the contents of the list