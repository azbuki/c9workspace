/*General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb */

var request = require("request");
var express = require("express");
var bodyParser = require("body-parser");
var request = require('request');

var app = express();

//begin SET UP
app.set("view engine", "ejs");
app.use(express.static("public"));  // tells application to use ./public for assets
app.use(bodyParser.urlencoded({extended:true}));//end SET UP



var strAppName = "Yelp Camp";

var aCampground = [
        {name:"Under the stars", image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"},
        {name:"Fun under the sun", image:"https://images.pexels.com/photos/910309/pexels-photo-910309.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name:"Reason Why", image:"http://www.photosforclass.com/download/flickr-2844017149"},
         {name:"Under the stars", image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"},
        {name:"Fun under the sun", image:"https://images.pexels.com/photos/910309/pexels-photo-910309.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name:"Reason Why", image:"http://www.photosforclass.com/download/flickr-2844017149"},
         {name:"Under the stars", image: "https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&h=750&w=1260"},
        {name:"Fun under the sun", image:"https://images.pexels.com/photos/910309/pexels-photo-910309.jpeg?auto=compress&cs=tinysrgb&h=350"},
        {name:"Reason Why", image:"http://www.photosforclass.com/download/flickr-2844017149"}
    ];

function processOutput(body, parameter){
   
}

app.get("/", function(req, res){
      
     // res.send("Landing Page:" +strAppName);
       res.render("landing");
});



app.get("/campgrounds", function(req, res){
    
    

       res.render("campgrounds", {campgrounds: aCampground}); 
});

app.get("/campgrounds/new", function(req, res) {
    res.render("newCampground.ejs");
});


/* convention 'rest'  get/post (<routeName>, function(req,res){}) route */
/* In this example: collect data from form and redirect to the get(<routeName>) */
app.post("/campgrounds", function(req, res){
    var campName = req.body.name;
    var campImgUrl = req.body.image;
    var newCampground = {name: campName, image: campImgUrl };
    aCampground.push(newCampground);
    console.log("Camground Name: " + newCampground.name);
    console.log("Detail :" + newCampground.image);
      res.render("campgrounds", {campgrounds: aCampground}); 
    
});

app.get("/home", function(req, res){
       res.render("home"); 
});





app.get("*", function(req,res){
    
        res.render("error", {error:"Did you get lost"});
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Post Request Demo - Server is running: " + strAppName);
     console.log("process.env.PORT" + process.env.PORT);
     console.log(" process.env.IP: " +  process.env.IP);
    
});