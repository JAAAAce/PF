let slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIdx = 0,
    slideCount = slide.length,
    slideWidth = 200,
    slideMargin = 30,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');

    makeClone();

    function makeClone(){
        //1. 마지막 슬라이드 뒤에 clone 복사
        for(let i=0; i<slideCount; i++){
            //a.cloneNode(): a요소 복제 / a.cloneNode(true): a의 자식요소까지 모두 복제
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            //a.appendChild(b): a요소의 내용(자식) 맨 뒤에 b를 추가
            slides.appendChild(cloneSlide);
        }
        //2. 맨 처음 슬라이드 앞에 clone 복사(순서 거꾸로 ex: 5[4],4[3],3[2],2[1],1[0])
        for(let i = slideCount -1; i>=0; i--){
            let cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            //a.prepend: a요소의 맨 앞에 b를 추가
            slides.prepend(cloneSlide);
        }
    }