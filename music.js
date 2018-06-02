var songs = ["mp3/song1.mp3","mp3/song2.mp3","mp3/song3.mp3","mp3/song4.mp3","mp3/song5.mp3"];
var img = ["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg","images/img5.jpg"];
var t = ["Despacito","Besabriyaan","Vintunnava","Visiri","Vellipomakey"];


var title = document.querySelector(".title");
var image = document.querySelector(".image");
var pp = document.querySelector("#pause");

var song = new Audio();
var currentSong =0;

window.onload = playSong;


function playSong(){
  song.src = songs[currentSong];
  title.textContent = t[currentSong];
  console.log(title);
  song.play();
}

function pOrp(){
  if(song.paused){
    song.play();
    $("#pause img").attr("src","icons/pause.png");
  }else {
    song.pause();
    $("#pause img").attr("src","icons/play.png");
  }
}

function next(){
  currentSong++;
  if(currentSong > 4){
    currentSong = 0;
  }
  playSong();
  $("#pause img").attr("src","icons/pause.png");
  $(".bg img").attr("src",img[currentSong]);
  $(".image img").attr("src",img[currentSong]);
}
function pre(){
  currentSong--;
  if(currentSong < 0){
    currentSong = 4;
  }
  playSong();
  $("#pause img").attr("src","icons/pause.png");
  $(".bg img").attr("src",img[currentSong]);
  $(".image img").attr("src",img[currentSong]);  
}
