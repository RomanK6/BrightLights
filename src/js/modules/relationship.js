const player1tWatcher = document.querySelector('.musik-player'),
      player2tWatcher = document.querySelector('.audioplayer-musik-player'),
      trackListWatcher = document.querySelector('.musik-player__audio-list'),
      audio1 = document.querySelector('.musik-player__audio'),
      audio2 = document.querySelector('.audioplayer-audio'),
      playPause1 = document.querySelector('.play-pause'),
      playPause2 = document.querySelector('.audioplayer-play-pause');

//const key1 = document.querySelector('.play-btn');
//const key2 = document.querySelector('.audioplayer-play-btn');


player1tWatcher.addEventListener('click', function f () {
    if (player2tWatcher.classList.contains('play')) {
        audio2.pause()
        playPause2.style.backgroundImage = "url('../img/icons/play.svg')";
        player2tWatcher.classList.remove('play');
    }

    
})
player2tWatcher.addEventListener('click', function f () {
    if (player1tWatcher.classList.contains('play')) {
        audio1.pause()
        playPause1.style.backgroundImage = "url('../img/icons/play.svg')";
        player1tWatcher.classList.remove('play');
    }
})
trackListWatcher.addEventListener('click', function f () {
    if (player1tWatcher.classList.contains('play')) {
        audio1.pause()
        playPause1.style.backgroundImage = "url('../img/icons/play.svg')";
        player1tWatcher.classList.remove('play');
    }
})

//player1.classList.contains('play')
//player2.classList.contains('play')