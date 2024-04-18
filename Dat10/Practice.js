// // function greet(name, lastName)
// // {
// // console.log('Hello'+ ' ' + name + ' ' +lastName);
// // }
// // setInterval(greet, 1000, 'Rohit', 'Sharma');

// // function groot(name, lastName){
// // console.log('Hello'+ ' '+ name + ' '+ lastName);
// // }
// // setInterval(groot, 1000,'Virat', 'kohli');


// /** Node in the linked list **/
// function Node(element) {  
//     // Data in the node
//     this.element = element;  
//     // Pointer to the next node 
//     this.next = null;
// }
//     function LinkedList() {  
//         var length = 0;  
//         var head = null;  
//         this.size = function () {    
//             return length;  
//         }  
//         this.head = function () {    
//             return head;  
//         }  
//         this.add = function (element) {    
//             var node = new Node(element);    
//             if (head == null) {      
//                 head = node;    
//             } else {      
//                 var currentNode = head;      
//                 while (currentNode.next) {        
//                     currentNode = currentNode.next;      
//                 }      
//                 currentNode.next = node;    
//             }    
//             length++;  
//         }  
//         this.remove = function (element) {    
//             var currentNode = head;    
//             var previousNode;    
//             if (currentNode.element === element) {      
//                 head = currentNode.next;    
//             } else {      
//                 while (currentNode.element !== element) {        
//                     previousNode = currentNode;        
//                     currentNode = currentNode.next;      
//                 }      
//                 previousNode.next = currentNode.next;    
//             }    
//             length--;  
//         }  
//         this.isEmpty = function () {    
//             return length === 0;  
//         }  
//         this.indexOf = function (element) {    
//             var currentNode = head;    
//             var index = -1;    
//             while (currentNode) {      
//                 index++;      
//                 if (currentNode.element === element) {        
//                     return index;      
//                 }      
//                 currentNode = currentNode.next;    
//             }    
//             return -1;  
//         }  
//         this.elementAt = function (index) {    
//             var currentNode = head;    
//             var count = 0;    
//             while (count < index) {      
//                 count++;      
//                 currentNode = currentNode.next;    
//             }    
//             return currentNode.element;  
//         }  
//         this.addAt = function (index, element) {    
//             var node = new Node(element);    
//             var currentNode = head;    
//             var previousNode;    
//             var currentIndex = 0;    
//             if (index > length) {      
//                 return false;    
//             }    
//             if (index === 0) {      
//                 node.next = currentNode;      
//                 head = node;    
//             } else {      
//                 while (currentIndex < index) {        
//                     currentIndex++;        
//                     previousNode = currentNode;        
//                     currentNode = currentNode.next;      
//                 }      
//                 node.next = currentNode;      
//                 previousNode.next = node;    
//             }    
//             length++;  
//         }  
//         this.removeAt = function (index) {    
//             var currentNode = head;    
//             var previousNode;    
//             var currentIndex = 0;    
//             if (index < 0 || index >= length) {      
//                 return null;    
//             }    
//             if (index === 0) {      
//                 head = currentIndex.next;    
//             } else {      
//                 while (currentIndex < index) {        
//                     currentIndex++;        
//                     previousNode = currentNode;        
//                     currentNode = currentNode.next;      
//                 }      
//                 previousNode.next = currentNode.next;    
//             }    
//             length--;    
//             return currentNode.element;  
//         }
//     }
    
//     var a= LinkedList.length;
//     console.log(a);

// javascript program for insertion in a single linked 
// list at a specified position     // A linked list Node
class Node {
    // inserting the required data

        constructor(val) {
            this.data = val;
              
            this.nextNode = null;
        }
    }
   
// function to create and return a Node
function GetNode(data) {
    return new Node(data);
}

// function to insert a Node at required position
function InsertPos( headNode , position , data) {
     head = headNode;
    if (position < 1)
        document.write("Invalid position");

    // if position is 1 then new node is
    // set infront of head node
    // head node is changing.
    if (position == 1) {
         newNode = new Node(data);
        newNode.nextNode = headNode;
        head = newNode;
    } 
    else
    {
        while (position-- != 0)
        {
            if (position == 1)
            {
                // adding Node at required position
                 newNode = GetNode(data);

                // Making the new Node to point to
                // the old Node at the same position
                newNode.nextNode = headNode.nextNode;

                // Replacing current with new Node
                // to the old Node to point to the new Node
                headNode.nextNode = newNode;
                break;
            }
            headNode = headNode.nextNode;
        }
        if (position != 1)
            document.write("Position out of range");
    }
    return head;
}

function PrintList( node) {
    while (node != null) {
        document.write(node.data);
        node = node.nextNode;
        if (node != null)
            document.write(",");
    }
    document.write("<br/>");
}

// Driver code
  
     head = GetNode(3);
    head.nextNode = GetNode(5);
    head.nextNode.nextNode = GetNode(8);
    head.nextNode.nextNode.nextNode = GetNode(10);

    document.write("Linked list before insertion: ");
    PrintList(head);

    var data = 12, pos = 3;
    head = InsertPos(head, pos, data);
    document.write("Linked list after" + " insertion of 12 at position 3: ");
    PrintList(head);

    // front of the linked list
    data = 1;
    pos = 1;
    head = InsertPos(head, pos, data);
    document.write("Linked list after" + "insertion of 1 at position 1: ");
    PrintList(head);

    // insertion at end of the linked list
    data = 15;
    pos = 7;
    head = InsertPos(head, pos, data);
    document.write("Linked list after" + " insertion of 15 at position 7: ");
    PrintList(head);