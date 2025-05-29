//fetching navbar
fetch("../navbar.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("navbar").innerHTML = html;
  })
  .catch((error) => console.error("Error fetching navbar:", error));

//fetching Input form
fetch("../inputform.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("inputform").innerHTML = html;
  })
  .catch((error) => console.error("Error fetching input form:", error));

let currentConversion = "weight"; // Default conversion type

const labelInput = document.getElementById("labelInput");
const labelOutput = document.getElementById("labelOutput");

const inputValue = document.getElementById("inputValue");
const outputValue = document.getElementById("outputValue");

const form = document.getElementById("converterForm");

function setConversion(type) {
  currentConversion = type;
  inputValue.value = "";
  outputValue.value = "";

  if (type === "weight") {
    labelInput.textContent = "Kilograms";
    labelOutput.textContent = "Pounds";
  } else if (type === "temperature") {
    labelInput.textContent = "Celsius";
    labelOutput.textContent = "Fahrenheit";
  } else if (type === "distance") {
    labelInput.textContent = "Kilometers";
    labelOutput.textContent = "Miles";
  }
}

function convert(value, direction = "forward") {
  value = parseFloat(value);
  if (isNaN(value)) {
    outputValue.value = "";
    return;
  }

  switch (currentConversion) {
    case "weight":
      if (direction === "forward") {
        outputValue.value = (value * 2.20462).toFixed(2); // kg to lbs
      } else {
        outputValue.value = (value / 2.20462).toFixed(2); // lbs to kg
      }
      break;
    case "temperature":
      if (direction === "forward") {
        outputValue.value = ((value * 9) / 5 + 32).toFixed(2); // C to F
      } else {
        outputValue.value = (((value - 32) * 5) / 9).toFixed(2); // F to C
      }
      break;
    case "distance":
      if (direction === "forward") {
        outputValue.value = (value * 0.621371).toFixed(2); // km to miles
      } else {
        outputValue.value = (value / 0.621371).toFixed(2); // miles to km
      }
      break;
  }
}

//Event listener
inputValue.addEventListener("input", () => {
  outputValue.value = convert(inputValue.value, "forward");
});
outputValue.addEventListener("input", () => {
  inputValue.value = convert(outputValue.value, "reverse");
});

setConversion("weight"); // Set default conversion type on page load
