var express = require("express");
var app = express();

// begin Set Up
/* This line is critical for correctly rendering EJS Views */
app.set("view engine", "ejs");
app.use(express.static("public"));
//end Set Up


app.get("/", function(req, res){
        console.log("Happy Hunting");
      //  res.send("This is home page");
      res.render("home");
});

app.get("/:species/:breed", function(req, res){
         
         var species = req.params.species;
         var breed = req.params.breed;
        
        console.log("Species = " + species + " Breed - " + breed)
        res.render("basic", {test: breed});
});


app.get("/posts", function(req, res){
        
        var posts = [{ title: "Dream", author: "James"},
                      { title: "Sleep", author: "Charles"},
                      { title: "Nightmare", author: "Edgar"}
                ];
        
        res.render("posts", {posts:posts});
});

app.get("*", function(req, res){
        console.log("Got Lost?");
        res.send("Please check URL...");
});

app.listen(process.env.PORT, process.env.IP, function(){console.log("EJS Demo - Server is running");});