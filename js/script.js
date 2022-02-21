const firstName = prompt ("Nome?");
document.getElementById("first-name").innerHTML = firstName;

const familyName = prompt ("Cognome?");
document.getElementById("last-name").innerHTML = familyName;

let favouriteColor = prompt ("Colore preferito?");
document.getElementById("color").innerHTML = favouriteColor;

let mySuperSafePassword = firstName + familyName + favouriteColor + 21;
document.getElementById("password-result").innerHTML = mySuperSafePassword;