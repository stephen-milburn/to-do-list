console.log("Hello, this is petco");
var theTasks = [
  "WELCOME TO THE TO-DO LIST!",
  "PLEASE ENTER A TASK"
];

function addTextToPage(){


}

function addTask(){
  console.log(theTasks);
  console.log("BEGGINING TASK ADD");

  var input1 = document.getElementById("newTask");
  var value1 = input1.value;
  console.log("ADDING:", value1);
  theTasks.push(value1);
  console.log(theTasks);

}