let gradAnimate1 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate1
  .to('.gradDark1', 8 , {
    ease: 'power1.inOut',
    backgroundImage:'radial-gradient(100% 60% at 0% 50%, #FF940C 0%, rgba(0, 0, 0, 0) 100%)'
  })



  let gradAnimate2 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate2
  .to('.gradDark2', 5 , {
    ease: 'power1.inOut',
    backgroundImage:'radial-gradient(100% 20% at 100% 30%, #FF940C 0%, rgba(0, 0, 0, 0) 100%)'
  })


let gradAnimate3 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate3
  .to('.gradDark3', 10 , {
    ease: 'power1.inOut',
    backgroundImage:'radial-gradient(40% 40% at 40% 60%, #FF940C 0%, rgba(0, 0, 0, 0) 100%)'
  })


let gradAnimate4 = gsap.timeline({
  repeat: -1,
  yoyo: true
})

gradAnimate4
  .to('.gradDark4', 4 , {
    ease: 'power1.inOut',
    backgroundImage:'radial-gradient(40% 40% at 90% 80%, #FF940C 0%, rgba(0, 0, 0, 0) 100%)'
  })

// gradAnimate1.pause()
// gradAnimate2.pause()
// gradAnimate3.pause()
// gradAnimate4.pause()