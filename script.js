// function curSucess(pos) {
//      const coords = pos.coords;

//      console.log(`latitude: ${coords.latitude}`);
//      console.log(`Longitude: ${coords.longitude}`);
//      console.log(`within: ${coords.accuracy} meters`);
//     }

//  function curError(err) {
//      console.log(`Error: ${err.code}-${err.message}`);
//  }

//  const options = {
//      enableHighAccuracy: true, // Use Gps if available
//      timeout: 5000, // Time to wait to stop trying for  location
//      maximumAge: 0, // Dont use csached positon
//  };




//  navigator.geolocation.getCurrentPosition(curSucess ,curError, options);



// //   getCurrent position();

//   function watchSucess(pos) {
//      const coords = pos.coords;

    
//  }

//  function watcError(err) {
//      console.log(`Error: ${err.code}-${err.message}`);
// }

// //  const watchoptions = {
//     enableHighAccuracy: true, // Use Gps if available
//     // timeout: 5000, // Time to wait to stop trying for  location 
//     //  maximumAge: 0, // Dont use csached positon
// //  };


//  function watchError(err) {
//  navigator.geolocation.watchPosition(watchSucess , watchError, watchOptions);
//  }


//   const map = L.map('map').setView([48.8584, -2.2945], 16);
//  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

//     // Specify the maximum zoom of the map
//     maxZoom: 19,

//     // Set the attribution for OpenStreetMaps
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);

//   const marker = L.marker([0,0]).addTo(map);



// const canvas =document.getElementById('my-canvas');
// // const context = canvas.getContext ('2d');

// // draw rectangle
// context.fillstyle ="blue";
// context.fillRect (10 ,10 ,150 ,100);

// // draw circle
// context.fill();
// context.fillstyle ='red';
// context.arc(300 ,300 , 100, 0 ,Math.PI *2);
 
// // draw lines
// context.beginPath();
// context.strokestyle ='orange';
// context.moveTo(10 ,10);
// context.lineTo(300 ,300);
// context.stroke();

// // draw text
// context.font = '30px Arial';
// context.fillstyle='blue';
// context.fillText('Hello ', 300 ,100, 300);
// context.strokeText('Hello world', 300 ,400, 300);



// function clock () {
//   const now = new Date();
//   const canvas =document.getElementById('canvas');
//   const context = canvas.getContext('2d');
  
// //   setup canvas
// context.save(); 
// context.clearRect(0, 0, 500, 500);
// context.translate(250 ,250); //put 0,0 in the middle
// context.rotate(-Math.PI / 2);  //rotate clock(-90deg);

// // set default styles
//  context.strokeStyle = '#000000';
//  context.fillStyle ='#f4f4f4';
//  context.lineWidth = 4;
//  context.lineCap = 'round';

//  //draw clock face
//  context.save();
//  context.beginPath();
//  context.lineWidth = 14;
//  context.strokestyle = '#800000';
//  context.arc(0 ,0  ,142, 0 , Math.PI *2 ,true);
//  context.stroke();
//  context.fill();
//  context.restore;

 
// //  Draw hour lines
//  context.save();
//  for (let i = 0; i < 12; i++) {
//     context.beginPath();
//     context.rotate(Math.PI / 6);
//     context.moveTo(100, 0);
//     context.lineTo(120, 0);
//     context.stroke(); 
    
//  }
//    context.restore();

//    //  Draw minute lines
//    context.linewidth = 4;
//  context.save();
//  for (let i = 0; i < 60; i++) {
//     context.beginPath();
//     context.rotate(Math.PI / 30);
//     context.moveTo(117, 0);
//     context.lineTo(120, 0);
//     context.stroke(); 
    
//  }
//    context.restore();


//   //  get current time
//   const hr = now.getHours() % 12;
//   const min = now.getMinutes();
//   const sec = now.getSeconds();

//   // console.log(`${hr}:${min}:${sec}`);

//   // draw hour hand
//   context.save();
//   context.rotate((Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600)* sec);
//   context.Strokestyle ='#800000';
//   context.lineWidth = 14;
//   context.beginPath();
//   context.moveTo(-20 ,0);
//   context.lineTo(80 ,0);
//   context.stroke();
//   context.restore();


//   // draw minutes hand

//   context.save();
//   context.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec );
//   context.Strokestyle ='#800000';
//   context.lineWidth = 10;
//   context.beginPath();
//   context.moveTo(-20 ,0);
//   context.lineTo(80 ,0);
//   context.stroke();
//   context.restore();

//    // draw sec hand

//   context.save();
//   context.rotate((sec*Math.PI / 30) );
//   context.Strokestyle ='#ff7f50';
//   context.fillStyle ='#ff7f50';
//   context.lineWidth = 10;
//   context.beginPath();
//   context.moveTo(-20 ,0);
//   context.lineTo(80 ,0);
//   context.stroke();
//   context.beginpath();
//   context.arc (0 ,0 ,10, 0, Math.PI*2 ,true);
//   context.restore();

// context.restore(); //restore the default state

// requestAnimationFrame(clock);

// }

// requestAnimationFrame(clock);




// audio api 
// const audio =document.getElementById('audio');
// const play  =document.getElementById('play');
// const pause =document.getElementById('pause');
// const stop =document.getElementById('stop');
// const currentTime =document.getElementById('current-time');
// const volume =document.getElementById('volume');

// // play.addEventListener('click',() =>audio.play);
// // pause.addEventListener('click',() =>audio.pause);
// // stop.addEventListener('click',() =>{
// //   audio.pause;
// //   audio.currentTime=0;
// // });


// audio.addEventListener('timeupdate', () =>{
//  currentTime.innerText=audio.currentTime;
// });

// volume.addEventListener('volume' ,() => (audio.volume = audio.value

// ));









const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');


// song titles

const songs = [ 'halalala' ,'summer' ,'vibes']

// keep track of songs
 let songindex = 2

//  initially load songs into DOM

loadsongs(songs[songindex])

// update song details

function loadsongs(song) {
    title.innerText=song
    audio.src=`music/${song}.mp3`
    cover.src=`images/${song}.jpg`
}

function playsong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
     playBtn.querySelector('i.fas').classList.add('fa-pause')

     audio.play()
}

function pausesong(){
musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
     playBtn.querySelector('i.fas').classList.remove('fa-pause')

     audio.pause()

}
  
function prevSong() {
  songindex--
  if (songindex < 0){
    songindex.songs.length - 1
  }
  loadsongs(songs[songindex])
  playsong()
}

 function nextSong () {
   songindex++
  if (songindex > songs.length - 1){
    songindex = 0
  }
  loadsongs(songs[songindex])
  playsong()

}

function updateProgress(e) {
    const {duration ,currentTime } = e.srcElement

    const progressPercent = (currentTime / duration) *100

    progress.style.width =`${progressPercent}%`

}

function setProgress(e) {
    const width =this.clientWidth
    const clickX =e.offSetX
    const duration = audio.duration

    audio.currentTime=(clickX / width) * duration
}




// Event listeners

 playBtn.addEventListener('click', () => {
   const isPlaying = musicContainer.classList.contains('play')
   
  if (isPlaying) {
    pausesong()
   } else{
    playsong()
   }
})


// change song events
prevBtn.addEventListener('click' , prevSong)
nextBtn.addEventListener('click' , nextSong)

audio.addEventListener('timeupdate' , updateProgress )

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended' , nextSong)
