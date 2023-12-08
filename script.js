// function cursor()
// {
//     let cursor=document.querySelector("#cursor");
//     document.querySelector("#page1-content").addEventListener("mousemove",function(dets){
//         cursor.style.transform=`translate(${dets.x}px,${dets.y}px)`;
//  or
//  cursor.style.left=dets.x+"px";
//cursor.style.top=dets.y+"px";
//     })

// }
// cursor();

function cursor()
{
    let page1Content=document.querySelector("#page1-content");
    let cursor=document.querySelector("#page1 .cursor");
    document.querySelector("#page1-content").addEventListener("mousemove",function(dets){
       gsap.to(cursor,{
        x:dets.x,
        y:dets.y
       })
    })
    page1Content.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1 
        })
    })
    page1Content.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:0,
            opacity:0 
        })
    })

}
cursor();


function smoothScroll()
{
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

smoothScroll();
function page2Anim()
{
    // gsap.from(".elem1 h1",{
    //     y:120,
    //     stagger:0.2,
    //     duration:1,
    //     scrollTrigger:{
    //         trigger:"#page2",
    //         scroller:"#main",
    //         start:"top 47%",
    //         end:"top 46%",
    //         markers:true,
    //         scrurb:2
    //     }
    // }) 
    gsap.from("#page2 #center h1 span", {
        y: 120,
        stagger: 0.3, // Adjust the delay between each span
        duration: 1,
        opacity:0,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 46%",
            // markers: true,
            scrub: 4
        }
    });
}

page2Anim()

function swiperinf()
{
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          }
      });
}
swiperinf();
// function autoplayswiper()
// {
//     var swiper = new Swiper(".mySwiper", {
//         spaceBetween: 30,
//         centeredSlides: true,
//         autoplay: {
//           delay: 2500,
//           disableOnInteraction: false,
//         },
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true,
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
// }
// autoplayswiper();
var tl=gsap.timeline();
tl.from("#loader h3",{
    x:70,
    opacity:0,
    duration:1,
    stagger:0.3
})
tl.to("#loader h3",{
    opacity:0,
    x:-10,
    duration:1,
    stagger:0.2
})
tl.to("#loader",{
    opacity:0,
    duration:1,

})
tl.to("#loader",{
    display:"none"
})
tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    duration:0.7,
    stagger:0.1
})