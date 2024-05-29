import gsap from "gsap";

export function welcomeCircle() {
    const height = window.innerHeight;
    const width = window.innerWidth;

    const tl = gsap.timeline();
    tl.to("#welcomeCircle p",{opacity:1, duration:2.5})
    .to("#welcomeCircle",{
        scale:0,
        x:width/2 - 48 - 48, // - padding - burgerRadius
        y:(height/2 * -1) + 48 + 48,
        duration:1.2,
        ease:"power4.inOut"
    })
    .set("#welcomeCircle",{autoAlpha:0})
}