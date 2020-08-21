// Level 1

console.log("Hello world");

document.getElementById("slogan").textContent = "We Hate Our Customers";

document.getElementById("all").style.backgroundColor = "#c7c3c3";

document.getElementsByTagName("body")[0].style.fontFamily = "Impact";

// Level 2

let items = document.getElementsByClassName("item");

console.log(items);
for (var i = 0; i < items.length; i++) {
  items[i].style.margin = "10px 20px";
  items[i].style.boxShadow = "2px 2px 10px";
}

let navbar = document.getElementsByClassName("navbar-nav mr-auto")[0];

navbar.appendChild(
  '<li class="nav-item menu-large"><a class="nav-link">Newsletter</a></li>'
);
