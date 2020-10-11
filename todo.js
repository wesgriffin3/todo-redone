var arr = [];

var button = document.getElementById("btn");

// on click, push the new todo to arrary
button.addEventListener("click", function () {
  arr.push(document.getElementById("inputText").value);
  console.log(arr);
});
