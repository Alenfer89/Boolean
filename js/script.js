const firstName = prompt ("Nome?");
console.log(firstName)
// document.getElementById("first-name").innerHTML = firstName;

const familyName = prompt ("Cognome?");
console.log(familyName)
// document.getElementById("last-name").innerHTML = familyName;

let favouriteColor = prompt ("Colore preferito?");
console.log(favouriteColor)
// document.getElementById("color").innerHTML = favouriteColor;

let mySuperSafePassword = firstName + familyName + favouriteColor + 21;
document.getElementById("password-result").innerHTML = mySuperSafePassword;
console.log(mySuperSafePassword)