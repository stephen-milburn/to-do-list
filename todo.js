console.log("Hello, this is petco");
var theTasks = [];
var index = 0;

function addTask(){
  console.log(theTasks);
  console.log("BEGGINING TASK ADD");

  var input1 = document.getElementById("newTask");
  var value1 = input1.value;
  console.log("ADDING:", value1);
  theTasks.push(value1);
  console.log(theTasks);
  var olList = addTextToPage(theTasks);
  var divElement  = document.getElementById("list");
  divElement.appendChild(olList);
}

function addTextToPage(arry){
 
 // Create the list element:
 var list = document.createElement('ol');

 for (var i = 0; i < arry.length; i++) {
     // Create the list item:
     console.log("Adding to list..", arry[i]);
     var item = document.createElement('li');

     // Set its contents:
     item.appendChild(document.createTextNode(arry[i]));

     // Add it to the list:
     list.appendChild(item);
 }

 // Finally, return the constructed list:
 return list;
}



