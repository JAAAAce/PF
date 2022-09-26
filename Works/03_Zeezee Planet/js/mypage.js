//메뉴 on
const menu = document.querySelector('.category-area')
const categoryColor = document.querySelector('.bottomMenu-category');
const categoryBtn = document.querySelector('.bottomMenu-category img')
const myPageColor = document.querySelector('.bottomMenu-myPage');
const myPageBtn = document.querySelector('.bottomMenu-myPage img')

const openBtn2 = document.querySelector('.openBtn2');
openBtn2.addEventListener('click', function(e){
    e.preventDefault();
    menu.style.left = 0;
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    categoryColor.classList.add('on');
    categoryBtn.setAttribute('src', '../img/Shopicons_Menu_black.png');
    myPageColor.classList.remove('on');
    myPageBtn.setAttribute('src', '../img/Shopicons_Account_white.png');
});


//메뉴 off
const closeBtn = document.querySelector('.closeBtn');
closeBtn.addEventListener('click', function(e){
    menu.style.left = '-110%';
    categoryColor.classList.remove('on');
    categoryBtn.setAttribute('src', '../img/Shopicons_Menu_white.png');
    myPageColor.classList.add('on');
    myPageBtn.setAttribute('src', '../img/Shopicons_Account_black.png');
});



//메뉴 펼치기
const foldUnfold = document.querySelector('.fold');
const rotateBtn = document.querySelector('.fold img');
const subMenu = document.querySelector('.submenu');
foldUnfold.addEventListener('click', function(){
    rotateBtn.classList.toggle('unfold');
    subMenu.classList.toggle('hidden');
})