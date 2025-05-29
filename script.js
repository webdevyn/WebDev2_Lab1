//fetching navbar
fetch("../navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar").innerHTML = html;
  })
  .catch((error) => console.error("Error fetching navbar:", error));

//Input Handling
const input = document.getElementById("num1");
const inputArray = input.value.split(",").map((num) => num.trim());
