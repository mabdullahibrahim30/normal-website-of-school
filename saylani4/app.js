var username=["ali","umer","hassan","hussain","ahmed"];
console.log(username);
username.pop();
console.log(username);

var user=["ali","umer","hassan","hussain","ahmed"];
console.log(user);
user.push("saim");
console.log(user);

var use=["ali","umer","hassan","hussain","ahmed"];
console.log(use);
use.shift();
console.log(use);

var users=["ali","umer","hassan","hussain","ahmed"];
console.log(users);
users.unshift("bob");
console.log(users);

var names=["ali","umer","hassan","hussain","ahmed"];
console.log(names);
names.splice(2,2,"saim");
console.log(names);

var value=["ali","umer","hassan","hussain","ahmed"];
console.log(value);
value.slice(2,4);
console.log(value.slice(2,4));

for(var i = 100; i >= 0; i-- ){
    document.write(`<h1> ${i}A </h1>`);
}