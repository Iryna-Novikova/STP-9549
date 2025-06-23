// import Swiper JS
import Swiper from 'swiper';
// import { coverflowEffect } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

const refer = {
    swiperScreenElm: document.querySelector('[data-screen-slide]'),
    paginationScreenElm: document.querySelector('[data-screen-pagination]'),
    screenPrevBtnElm: document.querySelector('[data-screen-prev-btn]'),
    screenNextBtnElm: document.querySelector('[data-screen-next-btn]'),
}

let swiperScreen;
 
// console.log(swiper);

document.addEventListener('DOMContentLoaded', initScreenShotsSwiper);

function initScreenShotsSwiper() {
    if (!refer.swiperScreenElm) return;
    if (swiperScreen) {
        swiperScreen.destroy(true, true);
    }

    swiperScreen = new Swiper(refer.swiperScreenElm, {
        loop: false,
        speed: 500,
        spaceBetween: 20,
        observer: true,
        centeredSlides: true,
        grabCursor: true,
        initialSlide: 5,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            1200: {
              slidesPerView: 2.6,
             spaceBetween: 96,
            },  
        },
        // effect: 'coverflow',
        // coverflowEffect: {
        //   slideShadows: true,
        //   scale: 1.08,
        // },
    
    //     //   Навігація
    //   navigation: {
    //     nextEl: refer.screenNextBtnElm,
    //     prevEl: refer.screenPrevBtnElm,
    //   },
    
    // //   Пагінація
    //   pagination: {
    //     el: refer.paginationScreenElm,
    //     clickable: true,
    //     type: 'bullets',
    //   },
    
    on: {
         slideChange: updateSlide,
         init: updateSlide,
        }
});

    initPagination(swiperScreen.slides.length);
    console.log(swiperScreen.slides.length);
    
}

function initPagination(totalSlides) {

}

function updateSlide() {
    
}