//swiper
const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        10124: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
})

const navTrigger = document.querySelector('#navTrigger');

//select navigation
const nav = document.querySelector('#nav');

const navCloseBtn = document.querySelector('#navCloseBtn');


//select header
const header = document.querySelector('#header');


//add a click event listener 
navTrigger.addEventListener('click', () => {

    nav.classList.toggle('is-open');
});

//add a click event listener
navCloseBtn.addEventListener('click', () => {

    nav.classList.remove('is-open');
});

//add a scroll event listener
window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;
    
    scrollY > 50 ? header.classList.add('is-active') : header.classList.remove('is-active')
});

//faq 
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
    item.addEventListener("click", () => {
        const isOpen = item.classList.toggle('is-open');
        const iconClass = isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line';
        const iconElement = item.querySelector('i');
        iconElement.classList = `${iconClass}`;
    });
});