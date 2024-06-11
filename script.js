var left_aside=document.querySelector(".journey-board");
var left_btn=document.querySelector(".fa-circle-arrow-right");
var left_btn1=document.querySelector(".fa-circle-arrow-left");
var left_badge=document.querySelector(".badge")
var left_content=document.querySelector(".journey-board-content")
var n_cancel=document.querySelector(".fa-xmark")
 var n_board=document.querySelector(".notice-board")
var  up=document.querySelector(".fa-chevron-up")
var  down=document.querySelector(".fa-chevron-down")
var  thread=document.querySelector(".thread-inputs")
var threadicons=document.querySelector(".threads-icons")
var threadbtn=document.querySelector(".thread-btn")
var threadsummary=document.querySelector(".thread-summary")
var introbody=document.querySelector(".intro-body")
var introfooter=document.querySelector(".intro-footer")
var introbody1=document.querySelector(".intro-body1")
var introfooter1=document.querySelector(".intro-footer1")
var example=document.querySelector(".examples")
var  up1=document.querySelector(".upone")
var  down1=document.querySelector(".downone")
var  up2=document.querySelector(".uptwo")
var  down2=document.querySelector(".downtwo")

 
left_btn.addEventListener('click',()=>{
    left_aside.classList.toggle("move-slider");
    left_content.classList.toggle("display-block-active");
    left_badge.classList.toggle("display-block-inactive");
     left_btn1.classList.toggle("visible")
    left_btn.classList.toggle("not-visible")
    
    
    
     
})
left_btn1.addEventListener("click",()=>{
    left_aside.classList.toggle("move-slider");
    left_content.classList.toggle("display-block-active");
    left_badge.classList.toggle("display-block-inactive");
    left_btn1.classList.toggle("visible");
    left_btn.classList.toggle("not-visible");
})
n_cancel.addEventListener("click",()=>{
  n_board.classList.toggle("move-slider");
})
up.addEventListener("click",()=>{
    thread.classList.toggle("not-visible")
    threadicons.classList.toggle("not-visible")
    threadbtn.classList.toggle("not-visible")
    threadsummary.classList.toggle("not-visible")
   up.style.display="none"
    down.style.display="block"
})
down.addEventListener("click",()=>{
    thread.classList.toggle("not-visible")
    threadicons.classList.toggle("not-visible")
    threadbtn.classList.toggle("not-visible")
    threadsummary.classList.toggle("not-visible")
    up.style.display="block"
    down.style.display="none"
})
up1.addEventListener("click",()=>{
     introbody.style.display="none"
     up1.style.display="none"
     down1.style.display="block"
     introfooter.style.display="none"
     
    
})
down1.addEventListener("click",()=>{
    introbody.style.display="block"
    up1.style.display="block"
    down1.style.display="none"
    introfooter.style.display="block"
    
})
up2.addEventListener("click",()=>{
    introbody1.style.display="none"
    up2.style.display="none"
    down2.style.display="block"
    introfooter1.style.display="none"
    example.style.display="none"
    
})
down2.addEventListener("click",()=>{
    introbody1.style.display="block"
    up2.style.display="block"
    down2.style.display="none"
    introfooter1.style.display="block"
    example.style.display="block"
    
})

 

