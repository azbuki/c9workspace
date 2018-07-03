
var request    = require("request"), 
    express    = require("express"),
    bodyParser = require("body-parser"),
    request    = require('request'),
    mongoose   = require("mongoose");


var app = express();
var strAppName = "Yelp_v2";
mongoose.connect("mongodb://localhost/yelp_camp");

//begin SET UP
app.set("view engine", "ejs");
app.use(express.static("public"));  // tells application to use ./public for assets
app.use(bodyParser.urlencoded({extended:true}));//end SET UP

//SCHEMA SetUp - to be refactored
var cmpSchema = new mongoose.Schema( {name: String, image: String, description: String });
//
var Campground = mongoose.model("Campground", cmpSchema);
// END Schema Setup



app.get("/", function(req, res){
      
     // res.send("Landing Page:" +strAppName);
       res.render("landing");
});

app.get("/home", function(req, res){
       res.render("home"); 
});

app.get("/campgrounds", function(req, res){
    
    

       res.render("campgrounds", {campgrounds: Campground}); 
});


app.get("campgrounds/new", function(req, res) {
        res.render("newCampground");
    }
);

app.post("/campgrounds", function(req, res){
    var campName = req.body.name;
    var campImgUrl = req.body.image;
    var campDescription = req.body.description;
    
    var submittedCampground = {name: campName, image: campImgUrl, description: campDescription };
     Campground.create(submittedCampground, function(err, newlyCreated){
         
         if(err){
             console.log(err);
         }else{
             res.redirect("/campgrounds");
         }
     });
     
});
           
         

        
        
    
app.get("campgrounds/:id", function(req, res) {
        console.log("Future home ");
        res.render("show");
    }
);
app.get("/campgrounds/new", function(req, res) {
    res.render("newCampground.ejs");
});

//
app.get("*", function(req,res){
    
        console.log(req.query);
        res.render("error", {error:"Did you get lost"});
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Post Request Demo - Server is running: " + strAppName);
     console.log("process.env.PORT" + process.env.PORT);
     console.log(" process.env.IP: " +  process.env.IP);
    
});