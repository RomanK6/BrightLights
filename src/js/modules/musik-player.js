
export class Player {
    constructor (
        player,
        playBtn,
        audio,
        progresBar,
        progres,
        playPause,
        stateOfTime,
        tracks,
        firstTrack
    ) {
        //Конструкция инициализации обьекта:
        //const LandingPlayer = new Player(
        //'.musik-player',
        //'.play',
        //'.audio',
        //'.progress-bar',
        //'.progress',
        //'.play-pause',
        //'.time-bar');

        this.player = document.querySelector(player);
        this.playBtn = document.querySelector(playBtn);
        this.audio = document.querySelector(audio);
        this.progresBar =document.querySelector(progresBar);
        this.progres =document.querySelector(progres);
        this.playPause = document.querySelector(playPause);
        this.stateOfTime = document.querySelector(stateOfTime);
        this.tracks = document.querySelectorAll(tracks);
        this.firstTrack = document.getElementById(firstTrack);
        

        this.trackList();
        if (firstTrack !== undefined) {
            this.initFirstTrack()
        }
        this.playBtn.addEventListener('click', ev => this.playOrPause());
        this.audio.addEventListener('timeupdate', ev => this.updateProgresBar(ev));
        this.progresBar.addEventListener('click', ev => this.setProgres(ev));
        this.audio.addEventListener('timeupdate', ev => this.updateTimeBar(ev));
    }

    //Play
    playSong () {
        this.player.classList.add('play');
        this.playPause.style.backgroundImage = "url('../img/icons/pause.svg')";
        this.audio.play();
    }

    //Pause
    pauseSong () {
        this.player.classList.remove('play');
        this.playPause.style.backgroundImage = "url('../img/icons/play.svg')";
        this.audio.pause();
    }

    playOrPause () {
        this.isPlay = this.player.classList.contains('play');
        
        if (this.isPlay) {
            this.pauseSong()
        } else {
            this.playSong()
        }
    }

    //Progress bar
    updateProgresBar (e) {
        let {duration, currentTime} = e.srcElement;
        this.progressPercent = ( currentTime / duration ) * 100;
        this.progres.style.width = `${this.progressPercent}%`;
    }

    // Set progres
    setProgres(e) {
        this.progresWidth = this.progresBar.clientWidth;
        this.clickX = e.offsetX;
        this.duration = this.audio.duration;
        this.audio.currentTime = (this.clickX / this.progresWidth) * this.duration;
    }

    // Time bar
    updateTimeBar (e) {
        let {duration, currentTime} = e.srcElement;
        this.stateOfTime.innerHTML = this.convertTime(duration, currentTime);
    }

    // Convert time
    convertTime(duration, currentTime) {
        let minCurrent = `0${Math.floor(currentTime/60)}`.slice(-2);
        let secCurrent = `0${Math.round(currentTime % 60)}`.slice(-2);
        const convertCurrentTime = `${minCurrent}:${secCurrent}`;
        let minDuration = `0${Math.floor(duration/60)}`.slice(-2);
        let secDuration = `0${Math.round(duration % 60)}`.slice(-2);
        const convertTimeDuration = `${minDuration}:${secDuration}`;
        return `${convertCurrentTime}-${convertTimeDuration}`;
    }

    // Track list
    trackList() {
        this.tracklist = [];
        for (let node of this.tracks) {
            this.tracklist.push(node.innerHTML)
            node.addEventListener('click', ev => this.selectTrack(ev))
        }

    }

    //Select track
    selectTrack (e) {
        this.id = e.target.id;
        let listElem = document.getElementById(this.id);
        this.curentTrack = listElem.innerHTML;
        for (let i = 0 ; i < this.tracks.length; i++) {
            this.tracks[i].style.color = '#fff';
        }
        listElem.style.color = '#7A66CC';
        if (this.lastTrack == this.curentTrack) {
            this.playOrPause();
        } else {
            this.audio.src = `../files/audio/${listElem.innerHTML}.mp3`
            this.playSong();
            this.lastTrack = listElem.innerHTML
        }
    }

    //Первая песня
    initFirstTrack () {
        this.firstTrack.style.color = '#7A66CC';
        this.audio.src = `../files/audio/${this.firstTrack.innerHTML}.mp3`;
        this.lastTrack = this.firstTrack.innerHTML;
    }
}