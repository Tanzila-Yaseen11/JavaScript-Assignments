// Question No 01.
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");

// Question No 02.
var mobileModel = prompt("Enter your favorite mobile phone model:");
document.write("<h2>2. Favorite Mobile Model Length</h2>");
document.write("Your input: " + mobileModel + "<br>");
document.write("Length: " + mobileModel.length + "<br>");

// Question No 03.
document.write("<h2>3. Index of 'n' in 'Pakistani'</h2>");
var country = "Pakistani";
var index = country.indexOf('n');
document.write("Index of 'n': " + index + "<br>");

// Question No 04. 
document.write("<h2>4. Last Index of 'l' in 'Hello World'</h2>");
var greeting = "Hello World";
var lastIndex = greeting.lastIndexOf('l');
document.write("Last index of 'l': " + lastIndex + "<br>");

// Question No 05. 
document.write("<h2>5. Character at 3rd Index in 'Pakistani'</h2>");
var charAtThird = country.charAt(3);
document.write("Character at index 3: " + charAtThird + "<br>");

// Question No 06.
var fullNameConcat = firstName.concat(" ", lastName);
document.write("<h2>6. Full Name using concat()</h2>");
document.write("Hello, " + fullNameConcat + "!<br>");

// Question No 07. 
document.write("<h2>7. Replace 'Hyder' with 'Islam'</h2>");
var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("New city name: " + newCity + "<br>");

// Question No 08. 
var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("<h2>8. Replace 'and' with '&'</h2>");
document.write(newMessage + "<br>");

// Question No 09. 
var strNumber = "472";
var num = Number(strNumber);
document.write("<h2>9. String to Number Conversion</h2>");
document.write("Value: " + strNumber + " (Type: " + typeof strNumber + ")<br>");
document.write("Value: " + num + " (Type: " + typeof num + ")<br>");

// Question No 10.
var userInput = prompt("Enter any word:");
var upperCaseInput = userInput.toUpperCase();
document.write("<h2>10. Uppercase Conversion</h2>");
document.write("Uppercase: " + upperCaseInput + "<br>");

// Question No 11. 
function toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
var titleCaseInput = toTitleCase(userInput);
document.write("<h2>11. Title Case Conversion</h2>");
document.write("Title Case: " + titleCaseInput + "<br>");

// Question No 12. 
var num = 35.36;
var str = num.toString().replace(".", "");
document.write("<h2>12. Remove Dot from Number</h2>");
document.write("Result: " + str + "<br>");
