var new3=new Array();
$(document).ready(function(){
    
    var rvalue=new Array();
    var t=0;
    var f=0;
    var time;
    var correct=0;
    var incorrect=0;
    var intervalId;
 
    
    var question=["What is the captial of peru","Which author wrote man in havana",
               "what is the largest bone in human body"
               ,"What is the largest two digit prime number","What is the square root of 256",
               "Which pop album is the best selling of all time","Which is the most populous U.S. state",
            "Which US state is nearest to the old Soviet Union","In Fahrenheit, at what temperature does water freeze",
        "The Statue of Liberty was given to the US by which country","Which US city is known as the City of Brotherly Love"];
 var option=[["Lima","newdelhi","Brasilia","Canberra"],
             ["Graham Greene","Mark Twain","Ernest Hemingway","Toni Morrison"],
             ["Skull bones","Femur","Cranial Bones","Hyoid Bone"],
             ["95","99","75","97"] ,
             ["8","24","16","8"],
             ["Eagles","Thriller","Pink Floyd-The Wall","Led Zeppelin"],
             ["california","Texas","Florida","Newyork"],
             ["Alaska","Texas","New Jersey","Florida"],
             ["32","36","38","40"],
             ["Germeny","France","Spain","England"],
             ["Philadelphia","Los Angeles","Chicago","Houston"]];
   var answer=["Lima","Graham Greene","Femur","97","16","Thriller","california",
                "Alaska","32","France","Philadelphia" ];  
$(".btn-class").on("click",function(){
    $("#main").empty();
 $(".main-container").append($('<h1 id="title1">').text("Totally Trivial Trivia!"));
var d= $('<div id="display1"></div>');
var new1= $('<div id="display3"></div>');
 $(".main-container").append($(d).text("Time remaining:"));
 var label1=$('<label class="lid1"></label>');

 $("#display1").append(label1.text(30));
 start();
 
 var div2=$('<div class="mainDiv"></div>');
 $(".main-container").append(div2);
 var s="";
 for(var i=0;i<question.length;i++){
      s=('<div class="display2">')
     s+=question[i];
     var p1='<p>';
     var rd="";
     var rd1="";
    // if(i===0){
    s+='<div class="dvOptions">'
    for(var j=0;j<option[i].length;j++){
       
     
        rd+=('<input type="radio" class="rdv" name='+i+' value="'+option[i][j]+'"/>'+option[i][j]);
     
      var s1=$('<p>'+rd+'</p>');

         
    }
    s+='</div>'
     s+=rd;
     s+=('</div>');
// }
 div2.append(s);
 var newbt=$('<div class="dispaly4"></div>').append($('<input type="button" class="btn-s" value="submit">'));
}
$(".main-container").append(newbt);  
$(".btn-s").on("click",function(){
    for(var k=0;k<11;k++){
      
 rvalue.unshift($('input[name='+k+']:checked').val());
 
 

   }
   
   Results(rvalue,answer);
  
  stop();
  
 
});
function Results(rvalue,answer){
    var i=0;
    var cor=0;
    var incr=0;
    var na=0;  
    for(k=rvalue.length-1;k>=0;k--){
        
        
       debugger
       if(answer[i]==rvalue[k]){
        cor++;
       }
       if(rvalue[k]!=answer[i]){
        incr++;
           
       }
       i++;
       }
       new3.unshift(cor);
       new3.unshift(incr);
    debugger
       
       
       }
       function start(){
        intervalId=setInterval(count,1000);
     
        }
        function count(){
            
            var lt=$(".lid1").html();
            

            time=lt;
            time--;
            if(time>=0){
            $(".lid1").html(time);
            }
            if(time==0){
                clearInterval(intervalId);
                $(".btn-s").trigger("click");
                stop();
               
            }

        }
        function stop(){
            var correct;
            var incorrect;
            var na;
         $(".main-container").empty();
         $(".main-container").append($('<h1 id="title1">').text("Totally Trivial Trivia!"));
          $(".main-container").append($('<h1 id="title2">').text("All Done"));
          debugger
          incorrect=new3[0];
          correct=new3[1];
        console.log(incorrect);
          $(".main-container").append($('<p></p>').text("Correct answer"+correct));
          $(".main-container").append($('<p></p>').text("Incorrect answer"+incorrect));
          
        }
});
});


       /* function stop1(new3){
          var incorrect=new3[0];
           var correct=new3[1];
           console.log("correct"+correct);
           console.log("incorrect"+incorrect);
        }*/