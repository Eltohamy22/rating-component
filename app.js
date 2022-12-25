const number1 = document.getElementById('number-1');
const number2 = document.getElementById('number-2');
const number3 = document.getElementById('number-3');
const number4 = document.getElementById('number-4');
const number5 = document.getElementById('number-5');
const submitBtn = document.getElementById('btn');
const numberClicked = document.querySelector('.number');


number1.addEventListener ("click", function () {
    document.getElementById("number-1").style.backgroundColor =
      "hsl(25, 97%, 53%)";
    document.getElementById("number-1").style.color = "white";
    document.querySelector(".thankyou-btn").textContent =
      "you have selected 1 out of 5";
         submitBtn.addEventListener("click", function () {
           document.querySelector(".rate-box").style.display = "none";
           document.querySelector(".thankyou-box").style.display = "block";
         });
  });
 
// -----------------number 2
number2.addEventListener('click', function(){
    
  document.getElementById("number-2").style.backgroundColor =
    "hsl(25, 97%, 53%)";
  document.getElementById("number-2").style.color = "white";
  document.querySelector(".thankyou-btn").textContent = 'you have selected 2 out of 5';
     submitBtn.addEventListener("click", function () {
       document.querySelector(".rate-box").style.display = "none";
       document.querySelector(".thankyou-box").style.display = "block";
     });
})

// -------------------------number 3
number3.addEventListener('click', function(){
    
  document.getElementById("number-3").style.backgroundColor =
    "hsl(25, 97%, 53%)";
  document.getElementById("number-3").style.color = "white";
  document.querySelector(".thankyou-btn").textContent = 'you have selected 3 out of 5';
     submitBtn.addEventListener("click", function () {
       document.querySelector(".rate-box").style.display = "none";
       document.querySelector(".thankyou-box").style.display = "block";
     });
})

// ----------------------------------number 4
number4.addEventListener('click', function(){
    
  document.getElementById("number-4").style.backgroundColor =
    "hsl(25, 97%, 53%)";
  document.getElementById("number-4").style.color = "white";
  document.querySelector(".thankyou-btn").textContent = 'you have selected 4 out of 5';
   submitBtn.addEventListener("click", function () {
     document.querySelector(".rate-box").style.display = "none";
     document.querySelector(".thankyou-box").style.display = "block";
   });
})

// ------------------------------number 5
number5.addEventListener("click", function() {
   
  document.getElementById("number-5").style.backgroundColor =
    "hsl(25, 97%, 53%)";
  document.getElementById("number-5").style.color = "white";
   document.querySelector(".thankyou-btn").textContent =
     "you have selected 5 out of 5";
       submitBtn.addEventListener("click", function () {
         document.querySelector(".rate-box").style.display = "none";
         document.querySelector(".thankyou-box").style.display = "block";
       });
      })




  

