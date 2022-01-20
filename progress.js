
let circles=document.querySelectorAll(".circle")

let isActive = 1
document.getElementById("next").addEventListener('click', ()=>{
  isActive++
  if(isActive>circles.length)
    isActive=circles.length
   console.log(isActive);
    update_data()
})

document.getElementById("prev").addEventListener('click',()=>{
    isActive--
    if(isActive<1){
        isActive=1
    }
    update_data()
})

function update_data(){
  circles.forEach((circle,idx) => {
     if(idx<isActive){
       circle.classList.add('active')
     }else{
       circle.classList.remove('active')
     }
  });
  
  const actives=document.querySelectorAll(".active")
  progress.style.width = ((actives.length-1)/(circles.length-1))*100 + '%';

  if(isActive==1){
    prev.disabled=true;
  } else if(isActive==circles.length){
    next.disabled=true;
  } else{
    prev.disabled=false;
    next.disabled=false;
  }
}