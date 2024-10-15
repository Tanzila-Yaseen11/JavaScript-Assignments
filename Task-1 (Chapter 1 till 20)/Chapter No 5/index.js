// Question No 01
var a = 3;
var b = 5;
var c = a + b;
document.write("Sum of " + " " + a + " " + "and" + " " +  b + " " + "is" + " " + c  + "</br>");

// Question No 02
// Subtratcion
var a = 3;
var b = 5;
var c = a - b;
document.write("Difference of " + " " + a + " " + "and" + " " +  b + " " + "is" + " " + c  + "</br>");
// Multiplication
var a = 3;
var b = 5;
var c = a * b;
document.write("Product of " + " " + a + " " + "and" + " " +  b + " " + "is" + " " + c + "</br>" );
// Division
var a = 3;
var b = 5;
var c = a / b;
document.write("Division of " + " " + a + " " + "and" + " " +  b + " " + "is" + " " + c + "</br>" );
// Modulus
var a = 3;
var b = 5;
var c = a % b;
document.write("Modulus of " + " " + a + " " + "and" + " " +  b + " " + "is" + " " + c + "</br></br>" );

// Question No 03
var value = "undefined";
document.write("Value after variable declearion is :" + " " + value  + "</br>");
var initial = 5;
document.write("Initial Value : " + " " + initial + "</br>");
initial++
document.write("Value after increment is : " + " " + initial++  + "</br>");
var inti = 6 + 7;
document.write("Value after addition is : " + " " + inti + "</br>");
inti--;
document.write("Value after decrement is : " + " " + inti-- + "</br>");
var inti1 = 12 % 3;
document.write("The Remainder  is : " + " " + inti1 + "</br></br>");

// Question No 04
var MovieTicket = 600;
var Final = MovieTicket * 5;
document.write("Total cost to buy 5 tickets to a movie is " + " " + Final  + "PKR" + "</br></br>")

// Question No 05
var startFrom = +prompt("🔢 Time to start the math magic! ✨ What's your starting number?")
    var endFrom = +prompt("🏁 Ready to wrap it up? 🚀 Enter your ending number!")
    var tableOf = +prompt("🧮 Let's build your table of wonders! 🌟 Which number would you like the table for?")
    document.write("TABLE OF" + " " +  tableOf + "" + "🧮🔢" + "</br>" )

    for (var i = startFrom; i <= endFrom; i++) {
        document.write(tableOf + "  X  " + i + " = " + (tableOf * i) + "</br>")
    }document.write("</br>")

// Question No 06
var celsius = 30;
var fahrenheitFromCelsius = (celsius * 9/5) + 32;
document.write(`${celsius}°C is ${fahrenheitFromCelsius}°F</br>`);
var fahrenheit = 86;
var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
document.write(`${fahrenheit}°F is ${celsiusFromFahrenheit.toFixed(2)}°C</br></br>`);

// Question No 07
document.write("<h2>Shopping Cart!</h2>" + "</br>")
var item1 = 100;
var quantity1 = +prompt("Please Enter Your Item 1 Quantity");
var item1final = item1 * quantity1;
// document.write(item1final+ "</br>");
var item2 = 650;
var quantity2 = +prompt("Please Enter Your Item 2 Quantity");
var item2final = item2 * quantity2;
// document.write(item2final+ "</br>");
var shipping = 100;
var final = item1final + item2final + shipping ;
document.write("Price of Item 1 is " + " " + item1 + "</br>");
document.write("Quantity of Item 1 is " + quantity1 + "</br>");
document.write("Price of Item 2 is " + " " + item2 + "</br>");
document.write("Quantity of Item 2 is " + quantity2 + "</br>");
document.write("Shipping Charges " + shipping + "</br></br>");
document.write("Total cost of your Order is" + " " + final + "</br>");

// Question No 08
document.write("<h2>Marks Sheet!</h2>" + "</br>")
var totalmarks = +prompt("Enter Your Total Marks");
var marksobtain = +prompt("Enter Your Obatined Marks");
var Percentage = (marksobtain / totalmarks) * 100;
document.write("Total marks : " + " " + totalmarks + "</br>");
document.write("Marks Obtained : " + " " + marksobtain + "</br>");
document.write("Percentage : " + " " + Percentage + "%" + "</br>");

// Question No 09
document.write("<h2>Currency In PKR!</h2> </br>");
var USD = 10;
var Saudia = 25;
var PKR = ((USD * 104.80) + (Saudia * 28));
document.write("Total Currency in PKR : " + PKR + "</br>");

// Question No 10
var a = 10;
var final = (((a + 5) * 10) / 2);
document.write(final);

// Question No 11
var CurrentYear = +prompt("Enter Current Year");
var BirthYear = +prompt("Please Enter Your Birth Year");
var EsstAge1 = CurrentYear - BirthYear;
var EsstAge2 = EsstAge1 - 1;
document.write("Your Age is : " + " " + EsstAge1 + " " + "or" + " " + EsstAge2);

// Question No 12
document.write("<h2>The Geometrizer</h2> </br>")
var radius = 20; 
var cirr = (2 * 3.142 * radius );
var area = (3.142 * (radius * 2));
document.write("Radis of Circle is : " + " " + radius + "</br>");
document.write("Circumference of a circle : " + " " + cirr + "</br>");
document.write("Area of a circle : " + " " + area + "</br>");

// Question No 13
document.write("<h2>The Lifetime Supply Calculator</h2> </br>")
var chips = prompt("Enter Your Favourite Snacks");
var age = +prompt("Enter Your Age");
var esst = +prompt("Enter Your Estimated Age");
var day = +prompt("Total Amount of Snacks per day ?");
var total = ((esst - age) * day);
document.write("Favourite Snacks : " + " " + chips + "</br>");
document.write("Current Age : " + " " + age + "</br>");
document.write("Estimated Maximum Age : " + " " + esst + "</br>");
document.write("Amount of Snacks Per Day : " + " " + day + "</br>");
document.write("You will need" + " " + total + " " +  "to last you until the ripe old age of" + " " + esst);