$(document).ready(function(){
    gsap.registerPlugin(ScrollTrigger);

    // gsap.from('.section-visual .title', {
    //     duration: 1,
    //     x: 400,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: '.section-visual .title', 
    //         markers: true, 
    //         start: "top 50%", 
    //         end: 'bottom 20%', 
    //         toggleActions: 'play none none reverse', 
    //     }
    // });

    gsap.from('.section-visual .text-box', {
        y: 600,
        duration: 1,
        opacity: 0,
    });

    // 콘텐츠 인트로
    gsap.from('.product .copy', {
        duration: 1,
        y: 400,
        opacity: 0,
        scrollTrigger: '.product .copy',
    });

    // 콘텐츠 인트로
    // gsap.from('.product .copy-title', {
    //     duration: 1,
    //     y: 400,
    //     opacity: 0,
    //     scrollTrigger: '.product .copy-title',
    // });

    // gsap.from('.product .copy-desc', {
    //     duration: 1.2,
    //     y: 400,
    //     opacity: 0,
    //     scrollTrigger: '.product .copy-desc',
    // });

    // gsap.from('.product .copy-more-link', {
    //     duration: 1.4,
    //     y: 400,
    //     opacity: 0,
    //     scrollTrigger: '.product .copy-more-link',
    // });

    // 01 콘텐츠
    gsap.from('.section-product-mbti-test .img-box-photo', {
        duration: 1,
        y: 400,
        opacity: 0,
        stagger: 0.3,
        scaleX: 1.5,
        scaleY: 1.5,
        scrollTrigger: {
            trigger: '.section-product-mbti-test .img-box-photo',
            // markers: true,
            start: 'top 80%',
            end: 'bottom 0%',
            // toggleActions: 'play reverse none reverse',
            toggleActions: 'play none none reset',
            // scrub: true, // 스크롤하는대로 일어나는 동작
        }
    })
    // .to('.section-product-mbti-test .img-box-photo', {
    //     duration: 1,
    //     opacity: 0,
    //     stagger: 0.3,
    // })

    // 02 콘텐츠
    gsap.from('.section-product-moisture .img-box-photo', {
        duration: 1,
        y: 400,
        opacity: 0,
        stagger: 0.3,
        scaleX: 1.5,
        scaleY: 1.5,
        scrollTrigger: {
            trigger: '.section-product-moisture .img-box-photo',
            // markers: true,
            start: 'top 60%',
            end: 'bottom 0%',
            // toggleActions: 'play reverse none reverse',
            toggleActions: 'play none none reset',
            // scrub: true, // 스크롤하는대로 일어나는 동작
        }
    })
    // .to('.section-product-moisture .img-box-photo', {
    //     duration: 1,
    //     opacity: 0,
    //     stagger: 0.3,
    // })

    // 03 콘텐츠
    gsap.from('.section-product-moisturizing .img-box-photo', {
        duration: 1,
        y: 400,
        opacity: 0,
        stagger: 0.3,
        scaleX: 1.5,
        scaleY: 1.5,
        scrollTrigger: {
            trigger: '.section-product-moisturizing .img-box-photo',
            // markers: true,
            start: 'top 60%',
            end: 'bottom 0%',
            // toggleActions: 'play reverse none reverse',
            toggleActions: 'play none none reset',
            // scrub: true, // 스크롤하는대로 일어나는 동작
        }
    })
    // .to('.section-product-moisturizing .img-box-photo', {
    //     duration: 1,
    //     opacity: 0,
    //     stagger: 0.3,
    // })

    // 04 콘텐츠
    gsap.from('.section-cream .img-box-photo', {
        duration: 1,
        y: 400,
        opacity: 0,
        stagger: 0.3,
        scaleX: 1.5,
        scaleY: 1.5,
        scrollTrigger: {
            trigger: '.section-cream .img-box-photo',
            // markers: true,
            start: 'top 60%',
            end: 'bottom 0%',
            // toggleActions: 'play reverse none reverse',
            toggleActions: 'play none none reset',
            // scrub: true, // 스크롤하는대로 일어나는 동작
        }
    })
    // .to('.section-cream .img-box-photo', {
    //     duration: 1,
    //     opacity: 0,
    //     stagger: 0.3,
    // })

    // 상품 설명 리스트
    gsap.from('.section-feature .text-item', {
        duration: 1.5,
        y: 400,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: '.section-feature .text-item',
    });

    // 풀 이미지 01
    gsap.from('.product-probiotics .full-img', {
        duration: 1,
        y: 400,
        opacity: 0,
        stagger: 0.3,
        scaleX: 1.5,
        scaleY: 1.5,
        scrollTrigger: {
            trigger: '.product-probiotics .full-img',
            // markers: true,
            start: 'top 60%',
            end: 'bottom 0%',
            // toggleActions: 'play reverse none reverse',
            toggleActions: 'play none none reset',
            // scrub: true, // 스크롤하는대로 일어나는 동작
        }
    })
    // .to('.product-probiotics .full-img', {
    //     duration: 1,
    //     opacity: 0,
    //     stagger: 0.3,
    // })
    
    // 풀 이미지 02
    gsap.from('.product-hyamune .full-img', {
        duration: 1,
        y: 400,
        opacity: 0,
        stagger: 0.3,
        scaleX: 1.5,
        scaleY: 1.5,
        scrollTrigger: {
            trigger: '.product-hyamune .full-img',
            // markers: true,
            start: 'top 60%',
            end: 'bottom 0%',
            // toggleActions: 'play reverse none reverse',
            toggleActions: 'play none none reset',
            // scrub: true, // 스크롤하는대로 일어나는 동작
        }
    })
    // .to('.product-hyamune .full-img', {
    //     duration: 1,
    //     opacity: 0,
    //     stagger: 0.3,
    // })










    // gsap.from('.section-visual .text-box', {
    //     y: 600,
    //     duration: 1,
    //     opacity: 0,
    //     scrollTrigger: {
    //         trigger: '.section-visual .text-box',
    //         markers: true,
    //         start: 'top 80%',
    //         end: 'bottom 20%',
    //         toggleActions: 'play reverse none reverse'
    //     }
    // });

    // gsap.from('.section02 > img', {
    //     y: 600,
    //     duration: 1,
    //     opacity: 0,
    //     scrollTrigger: '.section02 > img'
    // });
});