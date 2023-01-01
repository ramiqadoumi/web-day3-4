function validateForm() {
  function containsNumbers(str) {
    return /\d/.test(str);
  }
  let prf = document.forms["validation"]["prf"].value;
  if (prf == "") {
    document.getElementById("prf").innerHTML = "required";
    return false;
  }
  let fname = document.forms["validation"]["fname"].value;
  let lname = document.forms["validation"]["lname"].value;
  if (containsNumbers(fname) == true || containsNumbers(lname) == true) {
    document.getElementById("first").innerHTML = "Invalid name ";
    return false;
  }
  let facebook = document.forms["validation"]["facebook"].value;

  if (!facebook.startsWith("https://facebook.com")) {
    document.getElementById("facebook").innerHTML =
      "The link should start with  https://facebook.com";
    return false;
  }
}
