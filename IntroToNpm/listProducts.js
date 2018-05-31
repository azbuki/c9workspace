var fakerLib = require('faker');

var strBreak = "===================================";
console.log(strBreak);
console.log("Welcome to my shop!");
console.log(strBreak);


for(var i = 0; i < 10; i++){
    console.log(fakerLib.commerce.product() + "- $" + fakerLib.commerce.price());//("{{commerce.product}}"));
}