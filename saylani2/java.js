var uservalue = prompt('please tell your name sir');  //prompt,alert and if else statements.
alert('Hi ' + uservalue + ' welcome to food court website');

var value = prompt('please place your order').toLowerCase();

if (value == "briyani") {
    alert('order placed');
}
else {
    alert('not available only briyani is available');
}

var num = 2 + 2;   //use of num by console
console.log(num);  

var message = prompt("want job say yes or no");   //use of ==,<=,>=,<,> and ,or and not conditions.

if ( message=="yes") {                
var chat = prompt("Entre your age");   

if(chat >= 18 && chat <= 60) 
{
alert("you can work");
console.log("you can work");
}

else if(chat < 18 || chat > 60) 
{
alert("you cannot work");
console.log("you cannot work");
} 

else{ 
alert("Please entre a valid age");
console.log("Please entre a valid age");
}
}
else{
    alert("Ok!");
}