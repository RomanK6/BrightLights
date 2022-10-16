let id = 0,
nextId = 1,
wisibleSlide = document.getElementById(`slide-${id}`),
nextSlide = document.getElementById(`slide-${nextId}`),
removeWisible, removeNext

const btnPrev = document.querySelector('.gallery__prev-btn'),
  btnNext = document.querySelector('.gallery__next-btn'),
  lastId = document.querySelector('.gallery-swiper-wriper').childElementCount-1

wisibleSlide.classList.add('slide-wisible');
nextSlide.classList.add('slide-next');

btnPrev.addEventListener(
'click',
function (event) {
    if (id === 0){
        id = lastId;
        nextId = 0;
    } else {
        id--;
        nextId= id+1;
    }
    removeAllClass();
    wisibleSlide = document.getElementById(`slide-${id}`);
    nextSlide = document.getElementById(`slide-${nextId}`);
    wisibleSlide.classList.add('slide-wisible');
    nextSlide.classList.add('slide-next');
}
)

btnNext.addEventListener(
'click',
function (event) {
    if ( id === lastId){
        id = 0;
        nextId = 1;
    } else {
        id++;
        nextId = id+1;
        if (nextId === lastId+1){
            nextId = 0;
        }
    }
    removeAllClass();
    wisibleSlide = document.getElementById(`slide-${id}`);
    nextSlide = document.getElementById(`slide-${nextId}`);
    wisibleSlide.classList.add('slide-wisible');
    nextSlide.classList.add('slide-next');
}
)

function removeAllClass () {
let allSlideWisible = document.getElementsByClassName("slide-wisible");
let allSlideNext = document.getElementsByClassName("slide-next");
while (allSlideWisible.length) {
    allSlideWisible[0].classList.remove("slide-wisible");
}
while (allSlideNext.length) {
    allSlideNext[0].classList.remove("slide-next");
}
}