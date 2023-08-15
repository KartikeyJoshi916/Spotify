console.log("Welcome to Spotify")
//initialize the variables
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');

let songs=[
    {songName:"Why Not- Ghostface Playa",filePath:"songs/whynot.mp3",coverpath:"covers/WhyNot.jpg"},
    {songName:"Neon Blade- MoonDeity",filePath:"songs/NeonBlade.mp3",coverpath:"covers/Neonblade.jpg"},
    {songName:"Midnight- Playamane",filePath:"songs/Midnight.mp3",coverpath:"covers/midnight.jpg"},
    {songName:"Pose X Star Wars- BlinkMedia",filePath:"songs/Pose.mp3",coverpath:"covers/Pose.jpg"},
    {songName:"Bite Back- Sxmpra",filePath:"songs/bite.mp3",coverpath:"covers/biteback.jpg"},
    {songName:"Scary Garry- Kaito Shoma",filePath:"songs/Scary.mp3",coverpath:"covers/scary.jpg"},
    {songName:"Disaster- KSLV Noh",filePath:"songs/Disaster.mp3",coverpath:"covers/disaster.jpg"},
    {songName:"Murder in my Mind- Kordhell",filePath:"songs/murder.mp3",coverpath:"covers/murder.jpg"},
    {songName:"By the sword- Iamjakehill",filePath:"songs/sword.mp3",coverpath:"covers/sword.jpg"}
]

//audioElement.play();
//Handle play/pause button
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause()
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{

    //update seek bar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=> {
    element.addEventListener('click',(e)=>{
         makeallplays();
         songindex=parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle');
         audioElement.src=`songs/${songindex+1}.mp3`;
         mastersongname.innerText=songs[songindex].songName;
         audioElement.currentTime=0;
         audioElement.play();
        gif.style.opacity=1;
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex==0){
        songindex=9;
    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})