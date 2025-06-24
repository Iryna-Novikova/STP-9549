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
       
    on: {
         slideChange: updateSlide,
         init: updateSlide,
        }
});

    initPagination(swiperScreen.slides.length, swiperScreen.activeIndex);  
    initPaginationSlide();   
}

// function renderDots(active) { 
//     return `
//     <span class="pgntn-dot" data-active-dot=${active} >
//     </span>`;
// }

function initPagination(totalDots, active) {
    // console.log(totalDots, '' , active);   
    refer.paginationScreenElm.innerHTML = '';
    let dots='';
    for (let i = 0; i < totalDots; i++) {
        dots += ` 
      <span class="pgntn-dot" data-pgntn-span data-active-dot='${i === active}' >
      </span>`  ;
    }
    refer.paginationScreenElm.innerHTML = dots;   
}

function initPaginationSlide() {
    refer.screenNextBtnElm.addEventListener('click', () => {
        if (swiperScreen) {
            swiperScreen.slideNext();
        };
    });

    refer.screenPrevBtnElm.addEventListener('click', () => {
        if (swiperScreen) {
            swiperScreen.slidePrev();
        };
    });
}

function updateSlide() {
    if (!swiperScreen || swiperScreen.slides.length === 0) return;
    const dotsElm = document.querySelectorAll('[data-pgntn-span]');
    const activeIndex = swiperScreen.activeIndex;
    dotsElm.forEach((dotElm) => { dotElm.dataset.activeDot = 'false' });
    dotsElm[activeIndex].dataset.activeDot = 'true';
    swiperScreen.isActive = true;

    if (activeIndex === 0) {
        refer.screenPrevBtnElm.classList.toggle('disabled');
    }
    if (activeIndex === swiperScreen.slides.length - 1) {
        refer.screenNextBtnElm.classList.toggle('disabled');
    }
}    