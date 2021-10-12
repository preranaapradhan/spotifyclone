console.log("Welcome To Spotify");

//INITIALIZE THE VARIABLES
let songIndex = 0;
let audioElement = new Audio('Laal Ishq.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressBar = document.getElementById('myprogressBar');

let songs = [
    {songName: "Laal Ishq", filePath = "music\Laal Ishq.mp3", coverPath ="Images\cover1.jpg"},
    {songName: "Laal Ishq", filePath = "music\Laal Ishq.mp3", coverPath ="Images\cover1.jpg"},
    {songName: "Laal Ishq", filePath = "music\Laal Ishq.mp3", coverPath ="Images\cover1.jpg"},
    {songName: "Laal Ishq", filePath = "music\Laal Ishq.mp3", coverPath ="Images\cover1.jpg"},
    {songName: "Laal Ishq", filePath = "music\Laal Ishq.mp3", coverPath ="Images\cover1.jpg"},
    {songName: "Laal Ishq", filePath = "music\Laal Ishq.mp3", coverPath ="Images\cover1.jpg"},
    {songName: "Laal Ishq", filePath = "music\Laal Ishq.mp3", coverPath ="Images\cover1.jpg"},
    {songName: "Laal Ishq", filePath = "music\Laal Ishq.mp3", coverPath ="Images\cover1.jpg"},
]

//audioElement.play();

//Handle Play/Pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle'); 
    }
})

//LISTEN TO EVENTS
progressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //UPDATE SEEKBAR
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    console.log(progress);
    myprogressBar.value = progress;
})