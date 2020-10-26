$(document).ready(function () {
  $(button).on("click", function clicked() {
    var input = document.getElementById("input").value;
    var inputField = document.getElementById("input");
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var form = document.getElementById("form");
    li.appendChild(document.createTextNode(input.toUpperCase()));
    ul.appendChild(li);
    form.reset();
    $(li).on("click", function () {
      $(this).toggleClass("crossout");
    });
  });
});

$(input).keypress(function (event) {
  if (event.which == 13) {
    event.preventDefault();
    $(button).click();
  }
});
