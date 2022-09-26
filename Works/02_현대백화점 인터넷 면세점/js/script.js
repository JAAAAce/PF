//메뉴 X클릭하면 사라지기
$('.close').on('click', function(){
    $('.mobMenu').css('left', '-100%');
    $('.headerWrap').css('left', 0);
    $('.mainBanner').css('left', 0);
    $('.navWrap').css({marginLeft: 0});
    $('.contentWrap').css({marginLeft: 0});
    $('body').css({height: '100%', overflow: 'auto'});
});

//메뉴 리스트 관리
$('categoryList').hide();

$('.menuTit').click(function(){
  let menu=$(this).next('ul');
  let btn=$(this).find('.menuBtn')
  $('.menuTit').next('ul').slideUp();
  $('.menuBtn').removeClass('fold');
  if(menu.is(':visible')){
    menu.slideUp();
    btn.removeClass('fold')
}else{
  menu.slideDown();
  btn.addClass('fold')
}
});


//메뉴버튼 클릭하면 나타나기
$('.goMenu').on('click', function(){
  $('.mobMenu').css({left: 0});
  $('body').css({height: '100%', overflow: 'hidden'});
  $('.headerWrap').css({left:'100px'});
  $('.mainBanner').css({left:'100px'});
  $('.navWrap').css({marginLeft:'100px'});
  $('.contentWrap').css({marginLeft:'100px'});
});


//메인배너
var swiper1 = new Swiper(".mainSwiper", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    centeredSlides: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".mainSwiper-control .swiper-button-next",
      prevEl: ".mainSwiper-control .swiper-button-prev",
    },
    pagination: {
      el: ".mainSwiper-control .swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
      },
      761: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    }
});

let mainBanner=1;
$('.mainBanner .pauseBtn-box').click(function(){
  if(mainBanner==1){
    swiper1.autoplay.stop();
    $(this).find('.pauseBtn').addClass('change');
    mainBanner=0;
  }else{
    swiper1.autoplay.start();
    $(this).find('.pauseBtn').removeClass('change');
    mainBanner=1;
  }
});


//네비배너
var swiper2 = new Swiper(".navSwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop:true,
  pagination: {
    el: ".navBanner .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".navBanner .swiper-button-next",
    prevEl: ".navBanner .swiper-button-prev",
  },
  breakpoints: {
    380: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    861: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1121: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    1380: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
  }
});


//럭키딜 배너
var swiper3 = new Swiper(".luckySwiper", {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 24,
  navigation: {
    nextEl: ".contentBanner .swiper-button-next",
    prevEl: ".contentBanner .swiper-button-prev",
  },
  breakpoints: {
    380: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    605: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }
});

//타임딜 배너
var swiper4 = new Swiper(".timeSwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  centeredSlides: false,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".timeBanner .swiper-button-next",
    prevEl: ".timeBanner .swiper-button-prev",
  },
});





//테마별 상품목록
// 1. 상품펼치기/닫기
$('.themeMDZone').each(function(){
  const MDOpenBtn=$(this).find('.openBtn');
  const MDOpen=$(this).find('.openStatus');
  MDOpenBtn.click(function(){
    MDOpenBtn.toggleClass('unfold');
    MDOpen.toggleClass('hidden');
  })
});

$('.themeMDZone').each(function(){
  const MDCloseBtn=$(this).find('.closeBtn');
  const MDClose=$(this).find('.closeStatus');
  MDCloseBtn.click(function(){
    MDCloseBtn.toggleClass('unfold');
    MDClose.toggleClass('hidden');
  })
});

//2. 더보기 버튼 누르면 제품 전체 보이고 더보기 버튼 사라지기 
$('.themeMDBox').each(function(){
  const more=$(this).find('.more')
  more.click(function(){
    more.css('display', 'none');
    $(this).parent('.themeMDBox').addClass('extension')
  })
});