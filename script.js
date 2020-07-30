let gradAnimate = gsap.timeline({
  repeat: -1,
  yoyo: true
});

gradAnimate.to(
  '.gradDark1',{
      duration: 1,
      backgroundImage:'radial-gradient(100% 40% at 0% 100%, #FF940C 0%, rgba(0, 0, 0, 0) 100%)'
    }
);

// gradAnimate.pause()