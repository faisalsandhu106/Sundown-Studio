

function swiper (){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

}
function animation (){
  gsap.from(".navbar img",{
    opacity:0,
    delay:0.5,
    duration:0.5,
     
  })
  
  gsap.from(".navbar ul li",{
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.1
  
  })
  
  gsap.from(".page-1 h1",{
    opacity:0,
    y:25,
    delay:0.8,
    duration:0.6,
    stagger:0.1
   
  })
  
  gsap.from(".page-1 h3",{
    opacity:0,
    delay:0.8,
    duration:0.5,
    stagger:0.1
   
  })
}
function loader (){
let loader = document.querySelector("#loader")
setTimeout(function(){
  loader.style.top = "-100%"
},3100)

}
function elem_picture (){
let elem = document.querySelector(".elem")
let img = document.querySelector(".elem img")

elem.addEventListener("mouseenter", function(){
  img.style.opacity = 1
})
elem.addEventListener("mouseleave", function(){
  img.style.opacity = 0
})

let elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})` 
    })
})
}
function sideBar(){
  let openMenubar = document.querySelector(".ri-menu-3-line")
  let crossMenubar = document.querySelector(".ri-close-large-line")
    
  let tl = gsap.timeline()
    
  tl.to(".navbar-center",{
        right:0,
        duration:0.3,
  })
  
  tl.pause()
  
  openMenubar.addEventListener("click",function(){
    tl.play()
  })
  crossMenubar.addEventListener("click",function(){
    tl.reverse()
  })
}

swiper ();
animation ();
loader ();
elem_picture ();
sideBar();








/*
function gsapAnimation (){
  
gsap.from(".navbar img",{
  opacity:0,
  delay:0.5,
  duration:0.5,
   
})

gsap.from(".navbar ul li",{
  opacity:0,
  delay:0.5,
  duration:0.5,
  stagger:0.1

})

gsap.from(".page-1 h1",{
  opacity:0,
  y:25,
  delay:0.5,
  duration:0.5,
  stagger:0.1
 
})

gsap.from(".page-1 h3",{
  opacity:0,
  delay:1.1,
  duration:0.5,
  stagger:0.1
 
})

gsap.from(".page-2 img",{
  opacity:0,
  duration:0.8,
  scrollTrigger:{
      trigger:".page-2 img",
      scroller:"body",
      start:"top 30%",
  }
}) 

gsap.from(".page-3-center-left h1",{
  opacity:0,
  x:-30,
  duration:0.8,
  stagger:0.1,
  scrollTrigger:{
      trigger:".page-3-center-left h1",
      scroller:"body",
      start:"top 62%",
  }
})

gsap.from(".page-4-center-left h1",{
  opacity:0,
  y:-30,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
      trigger:".page-4-center-left h1",
      scroller:"body",
      start:"top 65%",
  }
})

}

gsapAnimation ();
*/