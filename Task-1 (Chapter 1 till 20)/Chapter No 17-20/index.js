// Question No 01
var matrixArr = [];

// Question No 02

var mArr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
for (i = 0; i < mArr.length; i++) {
    document.write(mArr[i].join(" ") + "<br>");
} document.write("<br>")

// Question No 03
for (i = 1; i <= 10; i++) {
    document.write(i + "<br>")
} document.write("<br>")

// Question No 04
var startFrom = +prompt("🔢 Time to start the math magic! ✨ What's your starting number?")
var endFrom = +prompt("🏁 Ready to wrap it up? 🚀 Enter your ending number!")
var tableOf = +prompt("🧮 Let's build your table of wonders! 🌟 Which number would you like the table for?")
document.write("TABLE OF" + " " + tableOf + "" + "🧮🔢" + "</br></br>")

for (var i = startFrom; i <= endFrom; i++) {
    document.write(tableOf + "  X  " + i + " = " + (tableOf * i) + "</br>")
}

// Question No 05
var fruits = ["apple", "banana", "orange", "mango", "strawberyy"];
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>")
}
document.write("<br> <br>");
document.write("Element at index 0 is " + fruits[0] + "<br>");
document.write("Element at index 1 is " + fruits[1] + "<br>");
document.write("Element at index 2 is " + fruits[2] + "<br>");
document.write("Element at index 3 is " + fruits[3] + "<br>");
document.write("Element at index 4 is " + fruits[4] + "<br>");
document.write("<br> <br>");

// Question No 06
// PART (a)
document.write("<h4>Counting:</h4>")
for (var i = 1; i <= 15; i++) {
    if (i === 15) {
        document.write(i); 
    } else {
        document.write(i + ", ");
    }
}
// PART (b)
document.write("<h4>Reverese Counting:</h4>")
for (var i = 10; i >= 1; i--) {
    if (i === 1) {
        document.write(i);
    } else {
        document.write(i + ", ");
    }
}

// PART (c)
document.write("<h4>Even Counting:</h4>")
for (var i = 2; i <= 20; i += 2) {
    if (i === 20) {
        document.write(i)
    } else {
        document.write(i + ", ");
    }
}

// PART (d)
document.write("<h4>Odd Counting:</h4>")
for (var i = 1; i < 20; i += 2) {
    if (i === 19) {
        document.write(i)
    } else {
        document.write(i + ", ");
    }
}

// PART (e)
document.write("<h4>Series:</h4>")
for (var i = 2; i <= 20; i += 2) {
    if (i === 20) {
        document.write(i)
    } else {
        document.write(i + "k, ");
    }
}