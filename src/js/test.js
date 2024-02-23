const valueP = document.getElementById("value");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");
let count =0;


increase.addEventListener("click",()=>{
  count++;
  valueP.innerText=count
  if(count>0){
    valueP.style.color="green"
  }
})
