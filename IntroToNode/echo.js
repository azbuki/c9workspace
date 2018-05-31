echo("Echo!!! ", 10);
echo("Tater tots", 5);
echo("boo", "zoo");

var aScore = [2,3,10,123];

average(aScore);

function echo( str, num){
   var i = 0;
   try{
       while( i < num ){
           console.log(str + i++);
       }
   }catch(ex){ console.log("Provided parameters are invalid!"); }
    
}

function average(aScores){
    
    var sum = 0;
    var n = aScores.length;
   /* for(var i = 0; i < aScores.length; i++){
        sum = sum + aScores[i];
    } */
    
    aScores.forEach(function(score){sum+=score;})
    var avg = sum/n;
    console.log("Total: " + sum);
    console.log(Math.round(avg));
    
}