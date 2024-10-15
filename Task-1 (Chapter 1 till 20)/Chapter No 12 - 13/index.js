// Question No 01
var chr = prompt("Enter a Character (Character can be Number Or String)");
var Ascii = chr.charCodeAt(0)
if (Ascii >= 48 && Ascii <= 57){
    document.write("The input is a number.")
}else  if (Ascii >= 65 && Ascii <= 90){
    document.write("The input is a upper Case.")
}else  if (Ascii >= 97 && Ascii <= 122){
    document.write("The input is a Lower Case.")
}else{
    document.write("The input is neither a number nor a Letter! Bye")
}

// Question No 02
var num1 = +prompt("Enter Your First Integer");
var num2 = +prompt("Enter Your Second Integer");
if (num1 > num2){
    document.write("The larger number is :: " + num1 + "<br>")
}
 else if (num2 > num1){
    document.write("The larger number is :: " + num2 + "<br>")
}else{
     document.write("Both are Equal")
}

// Question No 03
var num = +prompt("Enter Your Number")
if(num > 0){
    document.write("Your Number is Positive")
}else if(num < 0){
    document.write("Your Number is Negative")
}else{
    document.write("Your Number is Zero")
}

// Question NO 04
var UserChoice = prompt("Enter a Character: ")
if(UserChoice === "a" || UserChoice === "e" || UserChoice === "i" || UserChoice === "o"|| UserChoice === "u"){
    document.write("True")
}else{
    document.write("False")
}

// Question No 05
var pass = "XYZ123";
var UserPass = prompt("Enter Your Password");
if( UserPass === pass){
    document.write("“Correct! The password you entered matches the original password")
}else{
    document.write("Incorrect Password! Please enter your password")
}

// Question No 06
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

document.write(greeting);

// Question nO 07
var time = prompt("Enter Your Time in this format : 19:00");
if(time >= "00:00" && time < "12:00"){
    document.write("Good Morning!")
}else if (time >= "12:00" && time < "17:00"){
    document.write("Good AfterNoon!")
}else if (time >= "17:00" && time < "21:00"){
    document.write("Good Evening!")
}else if (time >= "21:00" && time < "23:59"){
    document.write("Good Night! Soe Jao Beta!")
}else{
    document.write("Wrong Choice")
}

