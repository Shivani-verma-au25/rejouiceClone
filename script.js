// Locomotive smoothScrolling Effect
function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  }
  loco()

// page1 curser effect 
function cursorEffect(){
    
let cursor = document.querySelector(".cursor")
let page1Conent = document.querySelector(".page1-content")

page1Conent.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1Conent.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Conent.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursorEffect()

// page2 animation
function scrollEffect(){
  
  gsap.from(".top",{
    y:50,
    duration:1,
    stagger:.1,
    opacity:0,
    scrollTrigger:{
      trigger:".top",
      scroller:"#main",
      // markers:true,
      scrub:2,
      start:"30% 50%",
      end:"35% 55%"
    }
  })

  gsap.from(".bottom",{
    y:100,
    duration:2,
    stagger:.25,
    opacity:1,
    scrollTrigger:{
      trigger:".bottom",
      scroller:"#main",
      // markers:true,
      start:"0% 50% ",
      end: "80% 90%"
    }
  })
}
scrollEffect()

// page3 animation





// swiper
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
