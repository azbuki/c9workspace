var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app"); // connect or create cat dbuse c

var catSchema = new mongoose.Schema({name: String, age: Number, breed: String});

//object pattern '"Cat"' - singular name of the coolection i.e. collection Cats; name person 
var Cat = mongoose.model("Cat", catSchema);/// model ~ object, mongoose.Schema ~ interface


var cat = new Cat({name: "Lora", age: 1 , breed: "Aegian"} );

cat.save(function(err, cat){
    if(err){
        console.log("ERROR: unable to save " + cat.name);
    }else{
        console.log(cat.name + " added");
        console.log(cat);
    }    
});


Cat.find({}, function(err){
    if(err){
        console.log("ERROR: cat not found");
        console.log(err);
    }else{
        console.log("TEST");
    }
});
