var tl=gsap.timeline({
  scrollTrigger: {
    trigger: ".page1", // Specify the trigger element
    scrub: 3,
    start: "top -13%",
    end: "top 8%",
    markers: false,
  },
});
tl.to(".text h1", {
  x: -250,

},'a');
tl.to(".text h2", {
  x: 250,
 
},'a');

tl.to(".page1 video",{
    width:"90%"
},'a');
var black = gsap.timeline({
  
  scrollTrigger: {
    trigger: ".page2",
    scrub: 1,
    start: "top 17%",
    end: "top 20%",
    markers:false,
  },
});
black.to(".page2", {
  backgroundColor: "white",
});

var strategy = gsap.timeline({
  scrollTrigger: {
    trigger: ".work",
    start:"top 3%",
    end:"top 20%",
    scrub:2,
    markers:true
  },
});
strategy.to(".page2",{
  backgroundColor:"black"
});
  var cur = document.querySelector(".cursor");
function cursor(){

  document.addEventListener("mousemove",function(dets){
    cur.style.left=(dets.x +20)+"px";
    cur.style.top=(dets.y +20)+"px";
  })
}
function clientAnimation(){
var client_ele = document.querySelectorAll(".client_elem");

client_ele.forEach((e)=>{
  var imgs=e.getAttribute("data-img")
  e.addEventListener("mouseenter",function(){
    cur.style.width="250px";
    cur.style.height="250px";
    cur.style.borderRadius="0px";
    cur.style.backgroundImage=`url(${imgs})`;
  })


    e.addEventListener("mouseleave", function () {
      cur.style.width = "1.3vw";
      cur.style.height = "1.3vw";
      cur.style.borderRadius = "50%";
      cur.style.backgroundImage = `none`;
    });
})

}
function fixedAnimation(){
  var full = document.querySelector(".work_fixed");
 var h = document.querySelectorAll(".nav .nav_part2 h3");
  h.forEach((e)=>{
    e.addEventListener("mouseenter",function(){
      full.style.opacity=1;
    })
  
  })
  document.querySelector(".nav").addEventListener("mouseleave",function(){
    full.style.opacity=0;
  })
}
fixedAnimation();
clientAnimation()
cursor();
