//console.log("Hello, this is petco");
var theTasks = {
  text : [], //TEXT
  strikethrough : [] //BOOLEAN

};
document.addEventListener("keydown", function(e){
  if(e.keyCode === 13){
    addTask()
  }
});

function addTask(){
  //console.log(theTasks);
  //console.log("BEGINNING TASK ADD");

  var input1 = document.getElementById("newTask");
  var value1 = input1.value;

  //console.log("ADDING:", value1);
  if(value1 !== ""){
    theTasks.text.push(value1);
    theTasks.strikethrough.push(false);
  }
 
  console.log("THE OBJECT HAS: ", theTasks);
  //console.log(theTasks);

  var olList = addTextToPage(theTasks.text);
  var divElement = document.getElementById("list");
  divElement.innerHTML = "";
  divElement.appendChild(olList);

  input1.value = "";
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

 //var items = document.querySelectorAll("#list li");



var items = document.querySelectorAll('li');

items.forEach(function(){

  item.addEventListener("click", function(){

    console.log("WE TRYNA STRIKETHROUGH");
    //var itemToStrikethrough = document.querySelector("li");
    item.classList.add("strikethrough");
    });



});




 // Finally, return the constructed list:
 return list;
}