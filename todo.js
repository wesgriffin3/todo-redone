var arr = [];

var item = document.getElementById("inputText").value;

var button = document.getElementByClassName("btn");

document.getElementsByClassName("btn").addEventListener("click", function () {
  arr.push(item);
  console.log(arr);
});
