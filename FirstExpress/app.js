var express=require("express"); 


var app = express(); // loads everything associated with express framework - node_modules

 var answer = "Not sure what this is...";

 // normally it is a real port like 3000; for cloud nine purposed environment variable Port is used

// "/"=>"Hi There!"

app.get("/", function(request, response){
                response.send("Hi there!");
    });

// "/bye"=>"Good bye!"
app.get("/speak/:animal", function(request, response){
        
        answer = checkAnimal(request) ;
        
         response.send(answer); 
    });
    
    app.get("/repeat/:message/:times", function(request, response){
        
        answer = checkRepeats(request);
        response.send(answer); 
    });
    
    function checkRepeats(request){
        
        var message = request.params.message.toLowerCase();
        var times = request.params.times;
        
        console.log("Message " + message + " repeat this " + times);
         if( times > 0){
             answer = "";
         }   
        for( var i = 0; i < times; i++){
            answer += message + "<br/>";
        }
        
        return  answer;
    }
    
       
    // Invalid request
    
    app.get("*", function(req, res){
        res.send("<b>ERROR!<b>");
    });
    
    function checkAnimal(request){
        var animal= request.params.animal.toLowerCase();
        var answer = "<font color='red'><b>Not sure what this is...<b></font>";
        var sounds = {
            pig: "Oink",
            cow: "Moo",
            dog: "Aff",
            cat: "Meow",
            fish: "..."
        };
        console.log(animal +":" + sounds[animal]);
        
 /*       switch(animal){
            case "pig":
                answer ="<font color='orange'><i>The pig says &apos;Oink&apos;</i></font>";
                break;
            case "cow":
                answer ="<font color='green'><i>The cow says &apos;Moo&apos;</i></font>";
                break;
            case "dog":
                answer ="<font color='#767f56'><i>The dog says &apos;Aff&apos;</i></font>";
                break;
            
        }*/
        return "<font color='#182c87'><i>The " + animal + " says &apos;" + sounds[animal] + "&apos;</i></font>";      
    }

    
app.listen(process.env.PORT, process.env.IP, function(){console.log("Server is running!")}); 