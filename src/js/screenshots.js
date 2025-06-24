// import Swiper JS
import Swiper from 'swiper';
import { Navigation, EffectCoverflow} from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const refer = {
    swiperScreenElm: document.querySelector('[data-screen-slide]'),
    paginationScreenElm: document.querySelector('[data-screen-pagination]'),
    screenPrevBtnElm: document.querySelector('[data-screen-prev-btn]'),
    screenNextBtnElm: document.querySelector('[data-screen-next-btn]'),
}

let swiperScreen;

document.addEventListener('DOMContentLoaded', initScreenShotsSwiper);

function initScreenShotsSwiper() {
    if (!refer.swiperScreenElm) return;
    if (swiperScreen) {
        swiperScreen.destroy(true, true);
    }

    swiperScreen = new Swiper(refer.swiperScreenElm, {
        modules: [Navigation, EffectCoverflow],
        loop: false,
        speed: 500,
        observer: true,
        centeredSlides: true,
        grabCursor: true,
        initialSlide: 5,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 50,
            },
            1200: {
              slidesPerView: 2.4,
             spaceBetween: 126,
            },  
        },

        effect: 'coverflow',
        coverflowEffect: {
          slideShadows: false,
        //   scale: 1.08,
            rotate: 10,
        //     style: {
        //         width: 394,
        //   }
        },
        
  navigation: {
    nextEl: refer.screenNextBtnElm,
    prevEl: refer.screenPrevBtnElm,
    disabledClass: 'swiper-button-disabled',
  },

       
    on: {
         slideChange: updateSlide,
         init: updateSlide,
        }
});

    initPagination(swiperScreen.slides.length, swiperScreen.activeIndex);  
}

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