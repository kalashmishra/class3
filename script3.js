var tl=gsap.timeline({
    repeat:-1

});
tl
.to(".imgcontainer",{
    ease: Expo.easeInOut,
    width: "100%",
    
     stagger: 4,
     duration:1
    
},'a')

.to(".text h1", {
    ease: Expo.easeInOut,
    stagger: 4,
    top:0,
    duration:1

},'a')

.to(".text h1", {
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 4,
    top: "-100%",
    duration:1

},"a")

