// Question No 01
var city = prompt("Enter your City Name");
if(city === "Karachi"){
    document.write("Welcome to city of lights");
}else{
    document.write("Don't Exist");
}

// Question No 02
var gender = prompt("Enter Your Gender");
if(gender === "Male"){
    document.write(" Good Morning Sir");
}else if(gender === "Female"){
    document.write(" Good Morning Ma'am");
}else{
    document.write("Don't Exist");
}

// Question No 03
var SignalColor = prompt("Enter Color");
if(SignalColor === "Red"){
    document.write(" Must Stop");
}else if(SignalColor === "Yellow"){
    document.write(" Ready to move");
}else if(SignalColor === "Green"){
    document.write("Move now");
}else{
    document.write("Don't Exist");
}

// Question No 04
var fuel = +prompt("Write Your Car's Current Fuel In liters");
if(fuel <  0.25 ){
    document.write(" Please refill the fuel in your car");
}else{
    document.write("Your car is fueled up, and you're all set for a smooth ride!");
}

// Question No 05
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Question No 06
var sub1 = prompt("Enter Your First Course Name: ")
var sub2 = prompt("Enter Your Second Course Name: ")
var sub3 = prompt("Enter Your Third Course Name: ")
var totalmarks = 100;
// Taking input for marks in three subjects and total marks
var subject1 = +prompt("Enter marks obtained in : " + sub1 );
var subject2 = +prompt("Enter marks obtained in : " + sub2 );
var subject3 = +prompt("Enter marks obtained in : " + sub3 );
var totalMarks = totalmarks + totalmarks + totalmarks;

// Calculating total obtained marks and percentage
var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

// Displaying the mark sheet information
document.write("<h2>Mark Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");

// Determining the grade and remarks
if (percentage >= 80) {
    document.write("Grade: A-one<br>");
    document.write("Remarks: Excellent<br>");
} else if (percentage >= 70) {
    document.write("Grade: A<br>");
    document.write("Remarks: Good<br>");
} else if (percentage >= 60) {
    document.write("Grade: B<br>");
    document.write("Remarks: You need to improve<br>");
} else {
    document.write("Grade: Fail<br>");
    document.write("Remarks: Sorry<br>");
}

// Question No 07
var randomNum = Math.random() * 10;
var correctNum = Math.floor(randomNum) + 1;
var userNum = +prompt("Guess the Number between 1 to 10");

if (userNum === correctNum) {
    console.log("Bingo! Correct Answer");
} else if (userNum === correctNum + 1 || userNum === correctNum - 1) {
  console.log("Close Enough to the Correct Answer! . The Correct Number is : " + correctNum);
} else {
    console.log("You Lose. The Correct Number is : " + correctNum);
}

// Question No 08
var userNu = +prompt("Please Enter Your Number");
if(userNu % 3 === 0) {
    document.write("The number " + userNu + " is divisible by 3.")
}else{
    document.write("The number " + userNu + " is not divisible by 3.") 
}

// Qustion No 09
var Even = +prompt("Enter a Number")
if (Even % 2 === 0){
    document.write("Even Number")
}else{
    document.write("Odd Number")
}

// Question No 10 
var CurrenTemp = +prompt("Enter Your Current Temperature")
if(CurrenTemp > 40){
    document.write("It is too hot outside.")
}else if (CurrenTemp > 30){
    document.write("The Weather today is Normal.")
}else if (CurrenTemp > 20){
    document.write("Today’s Weather is cool.")
}else if (CurrenTemp > 10){
    document.write("OMG! Today’s weather is so Cool.")
}else{
    document.write("Don't Exist!")
}

// Question No 11
var Num1 = +prompt("Enter Your First Number")
var Num2 = +prompt("Enter Your Second Number")
var Choose = prompt("Enter Your Operator! What Do you Want \n+\n-\n*\n/\n%" )
if(Choose === "+"){
    Sum = Num1 + Num2;
    document.write("Your Sum is : " + Sum)
}else if(Choose === "-"){
    Diff = Num1 - Num2;
    document.write("Your Difference is : " + Diff)
}else if(Choose === "*"){
    Mult = Num1 * Num2;
    document.write("Your Product is : " + Mult)
}else if(Choose === "/"){
    Div = Num1  / Num2;
    document.write("Your Division is : " + Div)
}else if(Choose === "%"){
    Mod = Num1 % Num2;
    document.write("Your Modulus is : " + Mod)
}else{
    document.write("Operation not recognized!")
}
