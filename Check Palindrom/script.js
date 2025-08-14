// Elements
const txtInput = document.querySelector(".inputs input");
const chkBtn   = document.querySelector(".check-btn");
const clearBtn = document.querySelector(".clear-btn");
const infoTxt  = document.querySelector(".info-text");

let filterInput = ""; // sanitized input

function clearInput() {
  txtInput.value = "";
  filterInput = "";
  infoTxt.style.display = "none";
  clearBtn.style.display = "none";
  chkBtn.classList.remove("active"); // disable check button
  txtInput.focus();
}

// Check button
chkBtn.addEventListener("click", () => {
  const reverseInput = filterInput.split("").reverse().join("");

  infoTxt.style.display = "block";
  clearBtn.style.display = "block"; // show clear button

  if (reverseInput !== filterInput) {
    infoTxt.className = "info-text error";
    infoTxt.innerHTML = `NO, <span>'${txtInput.value}'</span> isn't a Palindrome!`;
  } else {
    infoTxt.className = "info-text success";
    infoTxt.innerHTML = `YES, <span>'${txtInput.value}'</span> is a Palindrome! 🎉`;
  }
});

// Clear button
clearBtn.addEventListener("click", clearInput);

// Input typing
txtInput.addEventListener("keyup", (e) => {
  // keep only alphanumerics, case-insensitive
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");

  if (filterInput) {
    chkBtn.classList.add("active");   // enable check button
  } else {
    infoTxt.style.display = "none";
    clearBtn.style.display = "none";
    chkBtn.classList.remove("active");
  }

  if (e.key === "Enter" && filterInput) {
    chkBtn.click();
  }
});

// focus input on load
window.addEventListener("load", () => txtInput.focus());
// Elements
const txtInput = document.querySelector(".inputs input");
const chkBtn   = document.querySelector(".check-btn");
const clearBtn = document.querySelector(".clear-btn");
const infoTxt  = document.querySelector(".info-text");

let filterInput = ""; // sanitized input

function clearInput() {
  txtInput.value = "";
  filterInput = "";
  infoTxt.style.display = "none";
  clearBtn.style.display = "none";
  chkBtn.classList.remove("active"); // disable check button
  txtInput.focus();
}

// Check button
chkBtn.addEventListener("click", () => {
  const reverseInput = filterInput.split("").reverse().join("");

  infoTxt.style.display = "block";
  clearBtn.style.display = "block"; // show clear button

  if (reverseInput !== filterInput) {
    infoTxt.className = "info-text error";
    infoTxt.innerHTML = `NO, <span>'${txtInput.value}'</span> isn't a Palindrome!`;
  } else {
    infoTxt.className = "info-text success";
    infoTxt.innerHTML = `YES, <span>'${txtInput.value}'</span> is a Palindrome! 🎉`;
  }
});

// Clear button
clearBtn.addEventListener("click", clearInput);

// Input typing
txtInput.addEventListener("keyup", (e) => {
  // keep only alphanumerics, case-insensitive
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");

  if (filterInput) {
    chkBtn.classList.add("active");   // enable check button
  } else {
    infoTxt.style.display = "none";
    clearBtn.style.display = "none";
    chkBtn.classList.remove("active");
  }

  if (e.key === "Enter" && filterInput) {
    chkBtn.click();
  }
});

// focus input on load
window.addEventListener("load", () => txtInput.focus());
