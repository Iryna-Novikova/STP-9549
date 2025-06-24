// import Swiper JS
import Swiper from 'swiper';
import { Navigation, EffectCoverflow} from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

let swiper;
const slidesDeskView = 1.7;
const space = 196;

const refer = {
    swiperElm: document.querySelector('[data-testimon-slide]'),
    paginationElm: document.querySelector('[data-testimon-pagination]'),
    PrevBtnElm: document.querySelector('[data-testimon-prev-btn]'),
    NextBtnElm: document.querySelector('[data-testimon-next-btn]'),
}

document.addEventListener('DOMContentLoaded', initTestimonSwiper);

function initTestimonSwiper() {
    if (!refer.swiperElm) return;
    if (swiper) {
        swiper.destroy(true, true);
    }

    swiper = new Swiper(refer.swiperElm, {
        modules: [Navigation, EffectCoverflow],
        loop: false,
        speed: 500,
        observer: true,
        centeredSlides: true,
        grabCursor: true,
        initialSlide: 5,
        observeSlideChildren: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 40,
                // width: 288,
            },
            1200: {
               slidesPerView: slidesDeskView,
                spaceBetween: space,
            //  width: 652,
            },  
        },

        effect: 'coverflow',
        coverflowEffect: {
          slideShadows: false,
          modifier: 2,
          scale: 1,
          rotate: 10,
        //     style: {
        //         width: 394,
        //   }
        },
        
  navigation: {
    nextEl: refer.NextBtnElm,
    prevEl: refer.PrevBtnElm,
    disabledClass: 'swiper-button-disabled',
  },

       
    on: {
         slideChange: updateSlide,
         init: updateSlide,
        }
});

    initPagination(swiper.slides.length, swiper.activeIndex);
};

function initPagination(totalDots, active) { 
    refer.paginationElm.innerHTML = '';
    let dots='';
    for (let i = 0; i < totalDots; i++) {
        dots += ` 
      <span class="pgntn-dot" data-pgntn-span='testimon' data-active-dot='${i === active}' >
      </span>`  ;
    }
    refer.paginationElm.innerHTML = dots;   
};

function updateSlide() {
    if (!swiper || swiper.slides.length === 0) return;

    const selDots = `[data-pgntn-span='testimon']`;
    const dotsElm = document.querySelectorAll(selDots);
    const activeIndex = swiper.activeIndex;

    dotsElm.forEach((dotElm) => { dotElm.dataset.activeDot = 'false' });
    dotsElm[activeIndex].dataset.activeDot = 'true';
    // swiper.isActive = true;

    if (activeIndex === 0) {
        refer.PrevBtnElm.classList.toggle('disabled');
    }
    if (activeIndex === swiper.slides.length - 1) {
        refer.NextBtnElm.classList.toggle('disabled');
    }
}    