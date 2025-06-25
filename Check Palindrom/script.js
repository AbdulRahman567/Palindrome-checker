// Select input field, check button, and info text paragraph from the DOM
const txtInput = document.querySelector(".inputs input");
const chkBtn = document.querySelector(".inputs button");
const infoTxt = document.querySelector(".info-text");

let filterInput; // Will hold the sanitized input (no special chars, lowercase)

// When the check button is clicked
chkBtn.addEventListener("click", () => {
  // Reverse the filtered input
  let reverseInput = filterInput.split("").reverse().join("");

  // Show the result container
  infoTxt.style.display = "block";

  // Compare original and reversed input
  if (reverseInput !== filterInput) {
    // If not a palindrome, display error message
    infoTxt.className = "info-text error";
    infoTxt.innerHTML = `NO, <span>'${txtInput.value}'</span> isn't a Palindrome`;
  } else {
    // If palindrome, display success message
    infoTxt.className = "info-text success";
    infoTxt.innerHTML = `YES, <span>'${txtInput.value}'</span> is a Palindrome`;
  }
});

// Listen for keyup event on the input field
txtInput.addEventListener("keyup", () => {
  // Remove all non-alphanumeric characters and convert to lowercase
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");

  // If input is not empty
  if (filterInput) {
    // Enable the button
    chkBtn.classList.add("active");
  } else {
    // Hide info text and disable button when input is empty
    infoTxt.style.display = "none";
    chkBtn.classList.remove("active");
  }
});
