
const map = L.map('map').setView([48.8584, -2.2945], 16);
//  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

//     // Specify the maximum zoom of the map
//     maxZoom: 19,

//     // Set the attribution for OpenStreetMaps
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(map);

//   const marker = L.marker([0,0]).addTo(map);



 const canvas =document.getElementById('my-canvas');
  const context = canvas.getContext ('2d');

//   draw rectangle
 context.fillstyle ="blue";
 context.fillRect (10 ,10 ,150 ,100);

//   draw circle
 context.fill();
 context.fillstyle ='red';
 context.arc(300 ,300 , 100, 0 ,Math.PI *2);
 
//  /draw lines
 context.beginPath();
 context.strokestyle ='orange';
 context.moveTo(10 ,10);
 context.lineTo(300 ,300);
 context.stroke();

//  draw text
 context.font = '30px Arial';
 context.fillstyle='blue';
 context.fillText('Hello world', 300 ,100, 300);
 context.strokeText('Hello world', 300 ,400, 300);


