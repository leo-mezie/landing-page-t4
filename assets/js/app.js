// Hamburger menu selections
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

// scroll-to-top selection
const scrollUp = document.querySelector("#scroll-up");

// Hamburger menu functionality
hamburger.addEventListener("click", openMenu);

// Theme switcher selection
const checkbox = document.querySelector("#checkbox");

function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close menu on nav menu clicks
navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Theme switcher functionality
checkbox.addEventListener("change", () => {
  // Toggle website theme
  document.body.classList.toggle("dark");
});


// validations

function formvalidate() {
  let name = document.forms.RegForm.fullname;
  let email = document.forms.RegForm.Email;

  let regName = /\d+$/g; // Javascript reGex for Name validation

  if (name.value === "" || regName.test(name)) {
    alert("Please enter your name properly.");
    name.focus();
    return false;
  }

  if (email.value === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  } else {
    alert("submitted,Thank you for subscribing to our news letter");

    return true;
  }
}

// email validation with regular expression

function emailvalidate() {
  var emailtxt = document.getElementById("email-sub");

  var mainemail = emailtxt.value;
  var regexpres =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //testing the regular expression for the email in email txtbox (regexpres.test(mainemail))
  if (regexpres.test(mainemail)) {
    // errormsg.style.display="none";
    emailtxt.style.borderColor = "green";
    emailtxt.style.boxShadow = "3px 2px 4px green";
  } else {
    emailtxt.style.borderColor = "red";
    emailtxt.style.boxShadow = "3px 2px 4px red";
    emailtxt.focus();
  }

  return false;
}