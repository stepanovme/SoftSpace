let sections_1 = gsap.utils.toArray(".dignities_wrapper");

gsap.to(sections_1, {
  xPercent: -100 * (sections_1.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".dignities",
    pin: true,
    scrub: 1,
    snap: 1 / (sections_1.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=" + document.querySelector(".dignities").offsetWidth
  }
});


$(function () {
  $(window).on('scroll.progress', function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop > 1500 /* Нужное значение на странице */ ) {
        gsap.registerPlugin(ScrollTrigger);

        let sections = gsap.utils.toArray(".step_1");
        
        
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".wrapper",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => "+=" + document.querySelector(".wrapper").offsetWidth
          }
        });
          $(window).off('scroll.progress');
      }
  });
});