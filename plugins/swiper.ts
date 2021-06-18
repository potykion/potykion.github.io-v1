import Vue from 'vue'
import {Swiper as SwiperClass, Pagination, Navigation, Mousewheel} from 'swiper/core';


import 'swiper/swiper-bundle.css'


import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';

SwiperClass.use([
  Pagination,
  Navigation,
  Mousewheel,
]);


Vue.use(getAwesomeSwiper(SwiperClass));
