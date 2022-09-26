//메인 배너 슬라이드
const slide = document.getElementById('slide');
const li = slide.children;
const liLength = li.length;
const liWidth = 100;
slide.style.width = `${liWidth * liLength}%`;

//pager 버튼 생성
const pager = document.getElementById('pager');
let pagerBtn;
for(let i=0; i<liLength; i++){
    pagerBtn = document.createElement('button');
    pagerBtn.setAttribute('data-order', i); //(속성이름, 속성값)
    pager.appendChild(pagerBtn);
}
pager.children[0].classList.add('active');

//슬라이드 순서 정하기
let order = 0;
function setOrder(num){ //num: 매개변수 들어올 공간
    order += num;
    if(order < 0){order = liLength -1}
    if(order > liLength - 1){order = 0}
    return order;
}

//ul 움직이기
let move = 0;
function moveWidth(num){
    move = -(num * liWidth);
}
function moveSlide(){
    slide.style.left = `${move}%`;
}

//슬라이드 방향
let pos = {prev: 0, now: 0}
function position(){
    if(pos.prev > pos.now){ // < 방향
        setOrder(1);
    } else { // > 방향
        setOrder(-1); 
    }
    activePager(order);
    moveWidth(order);
    moveSlide();
}

//pager 클래스 관리
function basicPager(){
    for(let graybtns of pager.children) {
        graybtns.classList.remove('active');
    }
}
function activePager(num){
    basicPager();
    pager.children[num].classList.add('active');
}

//Pager 클릭 이벤트
pager.addEventListener('click', (e) => {clickPager(e)});
function clickPager(e){
    stopSlide();
    e = e || window.event;
    order = Number(e.target.dataset.order);
    activePager(order);
    moveWidth(order)
    moveSlide();                     
}

//마우스, 터치 이벤트
slide.addEventListener('mousedown', slideStart); //마우스 클릭할 때
slide.addEventListener('mouseup', slideEnd); //마우스 뗄 때
slide.addEventListener('touchstart', touchSlideStart);
slide.addEventListener('touchend', touchSlideEnd);

function slideStart(e){
    stopSlide();
    e = e || window.event; //해당하는 값이 있는 경우 앞의 값을 선언하고 없는 경우에는 뒤의 값을 선언(크로스 브라우징)
    pos.prev = e.clientX;
}

function slideEnd(e){
    e = e || window.event;
    pos.now = e.clientX;
    position();
}

function touchSlideStart(e){
    e = e || window.event;
    stopSlide();
    pos.prev = e.touches[0].pageX;
}

function touchSlideEnd(e){
    e = e || window.event;
    pos.now = e.changedTouches[0].pageX;
    position();
}

//슬라이드 자동 재생
let timer;
function autoSlide(){
    setOrder(1);
    activePager(order);
    moveWidth(order);
    moveSlide();
    timer = setTimeout(autoSlide, 3000);//지정된 시간을 기다린후 작업을 수행하고, 다시 일정한 시간을 기다린후 작업을 수행
}

function stopSlide(){
    clearTimeout(timer);
}

autoSlide();

//top버튼
const topBtn = document.querySelector('.topBtn');
const toTop = function(){
    window.addEventListener('scroll', function(){
        if(this.document.querySelector('html').scrollTop > 200) {
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    })
}
toTop();


//메뉴 on
const menu = document.querySelector('.category-area')
const openBtn = document.querySelector('.topIcons .drawer');
const bottomMenu = document.querySelectorAll('.menu-inner a');
const categoryColor = document.querySelector('.bottomMenu-category');
const categoryBtn = document.querySelector('.bottomMenu-category img')
const homeColor = document.querySelector('.bottomMenu-home');
const homeBtn = document.querySelector('.bottomMenu-home img')
openBtn.addEventListener('click', function(e){
    e.preventDefault();
    menu.style.left = 0;
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    categoryColor.classList.add('on');
    categoryBtn.setAttribute('src', '../img/Shopicons_Menu_black.png');
    homeColor.classList.remove('on');
    homeBtn.setAttribute('src', '../img/Shopicons_Home_white.png');
});

const openBtn2 = document.querySelector('.openBtn2');
openBtn2.addEventListener('click', function(e){
    e.preventDefault();
    menu.style.left = 0;
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    categoryColor.classList.add('on');
    categoryBtn.setAttribute('src', '../img/Shopicons_Menu_black.png');
    homeColor.classList.remove('on');
    homeBtn.setAttribute('src', '../img/Shopicons_Home_white.png');
});




//메뉴 off
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', function(e){
    e.preventDefault();
    menu.style.left = '-110%';
    document.body.style.height = 'auto';
    document.body.style.overflow = 'auto';
    categoryColor.classList.remove('on');
    categoryBtn.setAttribute('src', '../img/Shopicons_Menu_white.png');
    homeColor.classList.add('on');
    homeBtn.setAttribute('src', '../img/Shopicons_Home_black.png');
});

const closeBtn2 = document.querySelector('.closeBtn2');
closeBtn2.addEventListener('click', function(e){
    e.preventDefault();
    menu.style.left = '-110%';
    document.body.style.height = 'auto';
    document.body.style.overflow = 'auto';
    categoryColor.classList.remove('on');
    categoryBtn.setAttribute('src', '../img/Shopicons_Menu_white.png');
    homeColor.classList.add('on');
    homeBtn.setAttribute('src', '../img/Shopicons_Home_black.png');
});

//메뉴 펼치기
const foldUnfold = document.querySelector('.fold');
const rotateBtn = document.querySelector('.fold img');
const subMenu = document.querySelector('.submenu');
foldUnfold.addEventListener('click', function(){
    rotateBtn.classList.toggle('unfold');
    subMenu.classList.toggle('hidden');
})