document.title = "I am good";

console.log(document.title);
console.log(document.body);

document.body.style.backgroundColor = "cyan";

document.body.firstElementChild 
document.body.firstElementChild.childNodes 
document.body.firstElementChild.children

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 