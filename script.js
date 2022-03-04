let count = 0;

 
const bck = document.querySelector("body");
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


btns.forEach(function(btn) {
    btn.addEventListener("click", function(x){
       const style = x.currentTarget.classList;
        console.log(style);
       
      if(style.contains("decrease")){
        count-- ;

      }
      else if(style.contains("increase")){
        count++;

      }
      else{
        count=0;

      }
      if(count>0){
        value.style.color = "rgb(74, 126, 221)" 
      }
      if (count==0){
        value.style.color = "grey" 
      }
      if(count<0){
         value.style.color = "tomato" 
      }
    


      value.textContent = count;
    });
})

