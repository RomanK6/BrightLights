import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';


const newsSwiper = new Swiper('.news__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      750: {
        slidesPerView: 2,
    },
      1100: {
          slidesPerView: 3,
      }
    }
});

Swiper.use([Navigation]);//Инициализирует работу кнопок Next и Prew ставить сразу перед созданием обьекта свайпера которому нужны кнопки
//Swiper.use([breakpoints]);
const eventsSwiper = new Swiper(".events__swiper", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.events__swiper-button-next',
      prevEl: '.events__swiper-button-prev',
    },
    breakpoints: {
      750: {
        slidesPerView: 2,
        spaceBetween: 30,
    },
      1100: {
          slidesPerView: 3,
          spaceBetween: 30,
      }
    }
});

/*
const gallerySwiper = new Swiper('.gallery-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    grabCursor: true,


  });*/

import { burger } from "./modules/burger.js";

//импортировать musik-player.js (функция)
//import { playOrPause, progresBarLine, setProgresLine, timeBarLine } from './modules/musik-player.js';

//импортировать musik-player.js (класс)
import { Player } from './modules/musik-player.js';
//Плеер для landing.html
const LandingPlayer = new Player(
  '.musik-player',
  '.play-btn',
  '.audio',
  '.progress-bar',
  '.progress',
  '.play-pause',
  '.time-bar'
);

//Плеер для player.html
const musikPlayer = new Player(
  '.audioplayer-musik-player',
  '.audioplayer-play-btn',
  '.audioplayer-audio',
  '.audioplayer-progress-bar',
  '.audioplayer-progress',
  '.audioplayer-play-pause',
  '.audioplayer-time-bar',
  '.musik-player__track',
  'track-1'
);

//
import "./modules/my-slider.js";

import '../js/modules/relationship.js'

