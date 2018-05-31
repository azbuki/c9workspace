/*General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb */

var request = require("request");
var express = require("express");

var app = express();
var bodyParser = require("body-parser");
var request = require('request');

//begin SET UP
app.set("view engine", "ejs");
app.use(express.static("public"));  // tells application to use ./public for assets
app.use(bodyParser.urlencoded({extended:true}));//end SET UP




//var strUrl = 'http://www.omdbapi.com/?s=Batman&y=2016&apikey=thewdb';



function processOutput(body, parameter){
    console.log("Parsing for "  + parameter);
    try{
        var parsedData = JSON.parse(body);
        
       
    
        console.log("-- Debug");
        console.log("DEBUG 1: " + parsedData );
        console.log("parsed Data: " + parsedData[parameter]);
        console.log("-- End Debug");
       return parsedData[parameter];
    }catch(Exception ){
        console.log("Parse failed");
        return "Sorry.  Search is experiencing problems.";
        
    }
}


app.get("/home", function(req, res){
       res.render("home"); 
});

app.get("/", function(req, res){
      
       res.render("search");
});

app.get("/results", function(req,res){
    
    
    var searchTerm = req.query.search;
    
    var strUrl = "http://www.omdbapi.com/?apikey=thewdb&s=" + searchTerm;
    console.log(strUrl);
    request(strUrl, function (error, response, body){
         
        if(!error && res.statusCode == 200){
            var parsedContent = JSON.parse(body, "Search");
            console.log("Returned Parsed Content: " + parsedContent);
            
            console.log("Success");
            res.render("results", {data: parsedContent});
            
        }else{
            console.log("Either error and res.statusCode other than 200.")
            res.render("error", {error:"No results available for your search."});
        }
    });
});

app.get("*", function(req,res){
    
        res.render("error", {error:"Did you get lost"});
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Post Request Demo - Server is running");
     console.log("process.env.PORT" + process.env.PORT);
     console.log(" process.env.IP: " +  process.env.IP);
    
});