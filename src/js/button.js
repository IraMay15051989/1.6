try {

    //Кнопка читать далее
const readMore = document.querySelector('.article-container .article-contetn__paragraf');
const readMoreBtn = document.querySelector('.article-contetn__read-more');
const readMoreArrow = document.querySelector('.read-more__arrow');
const readMoreText = document.querySelector('.read-more__text');

readMoreBtn.addEventListener('click', function(){
    if(readMoreText.textContent === 'Читать далее'){
        readMore.classList.add('readMoreMenu')
        readMoreText.textContent = 'Скрыть'
        readMoreArrow.style.transform = 'rotate(-180deg)'
        

    }else{
        readMore.classList.remove('readMoreMenu')
        readMoreText.textContent = 'Читать далее'
        readMoreArrow.style.transform = 'rotate(0deg)'
       
    }
    
});

    //Кнопки показать все

const menu1 = document.querySelector('.brend .swiper');
const showmore1 = document.querySelector('.show-more');
const showmoreArrow1 = showmore1.querySelector('.show-more__arrow');
const showmoreText1 = showmore1.querySelector('.show-more__text');
const body = document.querySelector('body')



showmore1.addEventListener('click', function(){
    if(showmoreText1.textContent === 'Показать все'){
        menu1.classList.add('openMenu1')
        showmoreText1.textContent = 'Скрыть'
        showmoreArrow1.style.transform = 'rotate(-180deg)'

    }else{
        menu1.classList.remove('openMenu1')
        showmoreText1.textContent = 'Показать все'
        showmoreArrow1.style.transform = 'rotate(0deg)'
    }
    
});

const menu2 = document.querySelector('.repair .swiper');
const showmore2 = document.querySelector('.repair__show-more');
const showmoreArrow2 = showmore2.querySelector('.repair__show-more-arrow');
const showmoreText2 = showmore2.querySelector('.repair__show-more-text');




showmore2.addEventListener('click', function(){
    if(showmoreText2.textContent === 'Показать все'){
        menu2.classList.add('openMenu2')
        showmoreText2.textContent = 'Скрыть'
        showmoreArrow2.style.transform = 'rotate(-180deg)'

    }else{
        menu2.classList.remove('openMenu2')
        showmoreText2.textContent = 'Показать все'
        showmoreArrow2.style.transform = 'rotate(0deg)'
    }
    
});

//Заказать звонок

const callButtonOpen = document.querySelectorAll('.telefon').forEach((button) => {
    button.addEventListener('click', function() {
    
        blurContainerCall.classList.add('call-hidden');
        body.classList.add('body_overfloy');
});
})

const callButtonClose = document.querySelector('.call__btn-burger');
const blurContainerCall = document.querySelector('.blur-conteiner-call');

callButtonClose.addEventListener('click', function(event) {
    event.preventDefault()
    blurContainerCall.classList.remove('call-hidden');
    body.classList.remove('body_overfloy');
});

//Обратаная связь

const feedbackButtonOpen = document.querySelectorAll('.chat').forEach((button) => {
    button.addEventListener('click', function(event) {
    event.preventDefault()
    blurContainerFeedback.classList.add('feedback-hidden');
    body.classList.add('body_overfloy');
});
})

const feedbackButtonClose = document.querySelector('.feedback__btn-burger');
const blurContainerFeedback = document.querySelector('.blur-conteiner-feedback');

feedbackButtonClose.addEventListener('click', function(event) {
    event.preventDefault()
    blurContainerFeedback.classList.remove('feedback-hidden');
    body.classList.remove('body_overfloy');
});

//Бургер

const burgerOpen = document.querySelector('.menu-first__burger');
const blurConteiner = document.querySelector('.blur-conteiner');
const burgerClose = document.querySelector('.aside__header-burger');

burgerOpen.addEventListener('click', function() {
    blurConteiner.classList.add('burger-hidden');
    body.classList.add('body_overfloy');
    
});

burgerClose.addEventListener('click', function() {
    blurConteiner.classList.remove('burger-hidden');
    body.classList.remove('body_overfloy');
});

} catch(error){
console.log(error)
}