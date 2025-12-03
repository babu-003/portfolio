/*--------------------------------------------pop-up----------------------------*/
var popup=document.getElementById("popup");
var btn=document.getElementById("view");
var btn1=document.getElementById("view1");
var btn2=document.getElementById("view2");
var btn3=document.getElementById("view3");
var close=document.getElementById("close");

btn.onclick=function() {
    popup.style.display="block";
}
close.onclick=function(){
    popup.style.display="none";
}
btn1.onclick=function() {
    popup1.style.display="block";

}
close1.onclick=function(){
    popup1.style.display="none";
}
btn2.onclick=function() {
    popup2.style.display="block";

}
close2.onclick=function(){
    popup2.style.display="none";
}
btn3.onclick=function() {
    popup3.style.display="block";

}
close3.onclick=function(){
    popup3.style.display="none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}
//----------------------mobile nav bar----------------//

function myFunction(){
    var navy=document.getElementById("navy");
    var navbtn=document.getElementById("res-btn");
    var logo=document.getElementById("logo")
    if (navy.style.display==="none"||navy.style.display==='') {
        
        navy.style.display="block";
        navy.style.margin="0px 0px";
        logo.style.display="none";
        

        
    }else{
       navy.style.display="none";
       logo.style.display="block";
        
    }
     navbtn.classList.toggle('active');
}
var buttondis=document.getElementById("pro-btn");

//---------------------------------------pro slidder------------------------------//
let currentIndex = 0;

function updateSliderPosition(index) {
    const contentWrapper = document.querySelector('.pro-div');
    contentWrapper.style.transform = `translateX(-${index * 100}vw)`;
    currentIndex = index;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

document.getElementById('next').addEventListener('click', function() {
    const contents = document.querySelectorAll('.content_slide');
    if (currentIndex < contents.length - 1) {
        updateSliderPosition(currentIndex + 1);
    }
});

document.getElementById('prev').addEventListener('click', function() {
    if (currentIndex > 0) {
        updateSliderPosition(currentIndex - 1);
    }
});

const dots = document.querySelectorAll('.dot');
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const index = parseInt(this.getAttribute('data-index'));
        updateSliderPosition(index);
    });
});

// Initialize the dots for the first content
updateDots();
//--------------------------------------------------touch slide---------------------------------------//

//---------------------------------------------------topbtn-------------------------------------------//
// script.js

// Get the button
let scrollToTopBtn = document.getElementById("topbtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top:0, behavior: 'smooth' });
});


//scroll visible
/*window.onload=function(){
    window.addEventListener('scroll',function(){
    let content=document.querySelectorAll('.home h2');
    content.forEach((element,index)=>{
     let contentposition=element.getBoundingClientRect().top;
     let screenposition=window.innerHeight / 1.3;

        if(contentposition<screenposition){
            this.setTimeout(()=>{
                element.classList.add('visible1');
            },index*400);
        }
    });
 });
}*/

//scroll new visi

function revealHeadings() {
  const h1 = document.querySelector(".home h1");
  const h2 = document.querySelector(".home h2");
  const p = document.querySelector(".home p");

  const windowHeight = window.innerHeight;
  const triggerPoint = 150;

  const h1Top = h1.getBoundingClientRect().top;
  const h2Top = h2.getBoundingClientRect().top;
  const pTop = p.getBoundingClientRect().top;

   if (pTop < windowHeight - triggerPoint) {
    p.classList.add("visible3");
  }

  if (h1Top < windowHeight - triggerPoint) {
    h1.classList.add("visible2");
  }

  if (h2Top < windowHeight - triggerPoint) {
    h2.classList.add("visible1");
  }
}

window.addEventListener("scroll", revealHeadings);
window.addEventListener("load", revealHeadings);

// infinity type effort
var typed=new Typed('.auto',{
    strings:["Python Developer","FullStack Developer","Designer",],
    typeSpeed:100,
    backSpeed:70,
    loop:true
});


