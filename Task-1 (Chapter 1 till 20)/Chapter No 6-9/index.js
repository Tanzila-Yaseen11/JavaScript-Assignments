// Question No 01
var a = 10;
document.write("<h3>Result:</h3>")
document.write("The Value of a is "+ " " + a + "</br>");
document.write(".................................. <br><br>")
document.write('The value of ++a is: ' + (++a) + '<br>');
document.write('Now the value of a is: ' + a + '<br><br>');

document.write('The value of a++ is: ' + (a++) + '<br>');
document.write('Now the value of a is: ' + a + '<br><br>');

document.write('The value of --a is: ' + (--a) + '<br>');
document.write('Now the value of a is: ' + a + '<br><br>');

document.write('The value of a-- is: ' + (a--) + '<br>');
document.write('Now the value of a is: ' + a + '<br><br>');

// Question No 02
var a = 2, b = 1;
--a;
document.write('After --a: a = ' + a + '<br>');
var step2 = --a - --b;
document.write('After --a - --b: a = ' + a + ', b = ' + b + ', Result = ' + step2 + '<br>');
var step3 = step2 + ++b;
document.write('After ++b: b = ' + b + ', Result = ' + step3 + '<br>');
var step4 = step3 + b--;
document.write('After b--: b = ' + b + ', Result = ' + step4 + '<br>');
var Result = step4;
document.write('Final Result: a = ' + a + ', b = ' + b + ', result = ' + Result + '<br><br>');

//Question No 03
var user = prompt("Enter Your Name");
document.write("Hello, " + user + "! " + "Nice to Meet You!");

// Question No 04
var userChoice = prompt("Choice Any One :: \nChoose Your Number \nDefault Table")
if (userChoice === "Choose Your Number") {
    var startFrom = +prompt("🔢 Time to start the math magic! ✨ What's your starting number?")
    var endFrom = +prompt("🏁 Ready to wrap it up? 🚀 Enter your ending number!")
    var tableOf = +prompt("🧮 Let's build your table of wonders! 🌟 Which number would you like the table for?")
    document.write("TABLE OF" + " " +  tableOf + "" + "🧮🔢" + "</br></br>" )

    for (var i = startFrom; i <= endFrom; i++) {
        document.write(tableOf + "  X  " + i + " = " + (tableOf * i) + "</br>")
    }
    
}else if(userChoice === "Default Table"){
    document.write("TABLE OF" + " " +  5 + "" + "🧮🔢" + "</br></br>" )

    for (var i = 1; i <= 10; i++) {
        document.write(5 + "  X  " + i + " = " + (5 * i) + "</br>")
    }

}else{
    document.write("Please Choose One Option")
}

// Question No 05
 // Taking subject names from the user
 var subject1 = prompt("Enter the name of the first subject:");
 var subject2 = prompt("Enter the name of the second subject:");
 var subject3 = prompt("Enter the name of the third subject:");

 // Total marks for each subject
 var totalMarks = 100;

 // Taking obtained marks for each subject
 var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
 var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
 var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

 // Calculating total obtained marks
 var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;

 // Calculating percentage for each subject
 var percentage1 = (obtainedMarks1 / totalMarks) * 100;
 var percentage2 = (obtainedMarks2 / totalMarks) * 100;
 var percentage3 = (obtainedMarks3 / totalMarks) * 100;

 // Calculating overall percentage
 var overallPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

 // Displaying results in a table format
 document.write("<table>");
 document.write("<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th><th>Percentage</th></tr>");
 document.write("<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarks + "</td><td>" + percentage1.toFixed(2) + "%</td></tr>");
 document.write("<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarks + "</td><td>" + percentage2.toFixed(2) + "%</td></tr>");
 document.write("<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarks + "</td><td>" + percentage3.toFixed(2) + "%</td></tr>");
 document.write("<tr><td><strong>Total</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + (totalMarks * 3) + "</strong></td><td><strong>" + overallPercentage.toFixed(2) + "%</strong></td></tr>");
 document.write("</table>");
