var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//begin SET UP
app.set("view engine", "ejs");
app.use(express.static("public"));  // tells application to use ./public for assets
app.use(bodyParser.urlencoded({extended:true}));//end SET UP
//end SET UP


app.get("/", function(req, res){
        console.log("Happy Hunting");
        res.send("This is home page");
});

app.get("*", function(req, res){
        console.log("Got Lost?");
        res.send("Please check URL...");
});

app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Post Request Demo - Server is running");
     console.log("process.env.PORT" + process.env.PORT);
     console.log(" process.env.IP: " +  process.env.IP);
    
});