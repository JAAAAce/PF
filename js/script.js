//scroll
let wheelDelta=0;
let browser=0;

$('.section').each(function(index){
    $(this).on('mousewheel DOMMouseScroll', function(e){
        e.preventDefault();
        browser=window.navigator.userAgent.toLowerCase().indexOf('firefox');
        if(browser>=0){
            wheelDelta= -e.detail*40;
        } else {
            wheelDelta=e.originalEvent.wheelDelta
        }
        if(wheelDelta<0){
            if(index < $('.section').length-1){
                $('html, body').stop().animate({scrollTop:$(this).next().offset().top},500);
            }
        } else {
            if(index>0){
                $('html, body').stop().animate({scrollTop:$(this).prev().offset().top},500);
            }
        }
    })
});



//section 1
//glitch 
function glitch(element) {
    let count=0;
    setInterval(() => {
        const skew = Math.random()*20-10; //-10도 ~ 10도

        //before
        const top1 = Math.random() * 100;
        const btm1 = Math.random() * 100;
        //after
        const top2 = Math.random() * 100;
        const btm2 = Math.random() * 100;

        element.style.setProperty('--skew', `${skew}deg`)
        element.style.setProperty('--t1', `${top1}%`);
        element.style.setProperty('--b1', `${btm1}%`);
        element.style.setProperty('--t2', `${top2}%`);
        element.style.setProperty('--b2', `${btm2}%`);
        
        count++;
        if(count % 30 == 0) {
            const bigSkew = Math.random()*180-90 //-90도 ~ 90도
            element.style.setProperty('--skew', `${bigSkew}deg`)
        }
    }, 120)
}
const fe = document.querySelector('.fe')
const dv = document.querySelector('.dv')
glitch(fe);
glitch(dv);

//type
new TypeIt('#intro')
    .pause(3500)
    .go()

    

//ABOUT
const introBtn = document.querySelector('#section2 button')
const introText = document.querySelector('#section2 .text-wrap')
const introBox = document.querySelector('.fadeInBox')
const scroll = document.querySelector('#section2 .center')
introBtn.addEventListener('click', function(){
    introBox.style.display = 'block';
    introBtn.style.opacity = '0';
    introText.style.opacity = '0';
    scroll.style.display = 'block';
})

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', function(){
    introBox.style.display = 'none';
    introBtn.style.opacity = '1';
    introText.style.opacity = '1';
})

//section3
//skill
//윈도우 스크롤
$(window).scroll(function(){
    var sct=$(window).scrollTop();
    var section3=$('#section3').offset(); //offset: left-top위치
    if(sct>section3.top-150){ //-150: 조금만 내려도 실행
        let skill = $('.skill');
        skill.each(function(){
            let item = $(this);
            let title = item.find('span');
            let targetNum = title.attr('data-num');
            let circle = item.find('circle');
            $({rate:0}).animate({rate:targetNum},
            {
                duration: 2500,
                progress: function(){
                    let now = this.rate;
                    title.text(Math.floor(now));
                    let amount = 250-(250*now/100);
                    circle.css({strokeDashoffset: amount})
                }
            })
        })
    }
});



//section4
//swiper
var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        effect: 'fade',
        loop: true,
        speed: 300,
        mousewheel: {
        invert: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

