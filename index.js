const resultWord = ['f', 'a' , 'r' , 'i' , 'd' , 'e' , 'h'];
const lenResult = resultWord.length;
let countGuess = 0;
var charList = document.querySelectorAll(".charGuess");

function createUiResult(){
  let ul = '<ul>';
 

  for(let i=0; i < lenResult ; i++ ){
     ul += "<li><span>"+"</span></li>";
  }
  
   ul += "</ul>";
document.getElementById("result").innerHTML = ul;

}


 function getChar(char){

   switch(char){
      case resultWord[0]:
         document.getElementById("resultImage").src = "assets/image/images3.jpeg";
         showChar(char);
         break;

         case resultWord[1]:
            document.getElementById("resultImage").src = "assets/image/images3.jpeg";
            showChar(char);
            break;

         case resultWord[2]:
            document.getElementById("resultImage").src = "assets/image/images3.jpeg";
            showChar(char);
            break;

         case resultWord[3]:
            document.getElementById("resultImage").src = "assets/image/images3.jpeg";
            showChar(char);
            break;

         case resultWord[4]:
            document.getElementById("resultImage").src = "assets/image/images3.jpeg";
            showChar(char);
            break;

         case resultWord[5]:
            document.getElementById("resultImage").src = "assets/image/images3.jpeg";
            showChar(char);
            break;

         case resultWord[6]:
            document.getElementById("resultImage").src = "assets/image/images3.jpeg";
            showChar(char);
            break;

            default:
               amissGuess(char);

   }
}

function showChar(charRight){
   for(let i=0; i<lenResult ; i++){
      if(resultWord[i]===charRight){
         document.getElementById("result").innerText += resultWord[i];
      }
   }
}

   function amissGuess(charMiss){
      countGuess++;
      if(countGuess<6){
         document.getElementById("resultImage").src = "assets/image/Sad.png";
         document.getElementById("countGuess").innerText = " حواستو جمع کن دیگ" + countGuess;
      }
      else{
         document.getElementById("resultImage").src = "assets/image/images1.jpeg";
         document.getElementById("countGuess").innerText = "بسه زحمت کشیدی!!!" ;
      }
   }

 createUiResult();