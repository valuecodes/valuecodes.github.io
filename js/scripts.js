// Level 1

console.log("Hello world");

document.getElementById("slogan").textContent = "We Hate Our Customers";

document.getElementById("all").style.backgroundColor = "#c7c3c3";

document.getElementsByTagName("body")[0].style.fontFamily = "Impact";

// Level 2

let items = document.getElementsByClassName("item");

items.forEach((item) => {
  item.style.margin = "10px 20px";
  item.style.boxShadow = "2px 2px 10px";
});
