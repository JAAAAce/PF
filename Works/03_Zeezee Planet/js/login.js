//메뉴 on
const menu = document.querySelector('.category-area')
const categoryColor = document.querySelector('.bottomMenu-category');
const categoryBtn = document.querySelector('.bottomMenu-category img')

const openBtn2 = document.querySelector('.openBtn2');
openBtn2.addEventListener('click', function(e){
    e.preventDefault();
    menu.style.left = 0;
    document.body.style.height = '100%';
    document.body.style.overflow = 'hidden';
    categoryColor.classList.add('on');
    categoryBtn.setAttribute('src', '../img/Shopicons_Menu_black.png');
});

//메뉴 펼치기
const foldUnfold = document.querySelector('.fold');
const rotateBtn = document.querySelector('.fold img');
const subMenu = document.querySelector('.submenu');
foldUnfold.addEventListener('click', function(){
    rotateBtn.classList.toggle('unfold');
    subMenu.classList.toggle('hidden');
})