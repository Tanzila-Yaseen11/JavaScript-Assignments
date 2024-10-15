// Question No 01
var a = 10, b = 25, c = 35;
document.write(a + "</br>");
document.write(b + "</br>");
document.write(c + "</br>");

// Question No 02
// Legal Variables:
// 01 legal 
var UserName = "Tanzila";
// 02 legal
var User_Name = "Tanzila muhammed Yaseen";
// 03 legal
var username = "Yazdan Qaimkhani";
// 04 legal
var _username = "Yazdan Qaimkhani";
// 05 legal
var $user_name = "Tanzila Yaseen";  

//Illegal variables:
// Legal Variables:
// 01 Illegal 
var User Name = "Tanzila";   //Illegal because it contains space 
// 02 Illegal
var User-Name = "Tanzila muhammed Yaseen";  //Illegal because it contains hyphen -
// 03 Illegal
var user%name = "Yazdan Qaimkhani"; //Illegal because it contains percentage sign%
// 04 Illegal
var _user#name = "Yazdan Qaimkhani"; //Illegal because it contains hash  #
// 05 Illegal
var 1user_name = "Tanzila Yaseen";  //Illegal because it contains number in start 1


// Question No 03
document.write("<h2>Rules for naming JS variables </h2>");
document.write("<p>Variable name can only contain , numbers, $, and , _ . For example : $my_1stVariable<br> Variable must begin with a letter, $, or _ . For example : $name, _name or name </br> Variable names are case sensitive </br> Variable names should not be JS keywords</p>")