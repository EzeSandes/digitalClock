const hoursELem = document.getElementById('hours');
const minutesELem = document.getElementById('minutes');
const secondsELem = document.getElementById('seconds');
const amPmELem = document.getElementById('ampm');


function clock() {
   const fullDate = new Date();

   let hours = fullDate.getHours();
   let minutes = fullDate.getMinutes();
   let seconds = fullDate.getSeconds();
   let ampm = 'AM';

   //AM-PM For future features (Format: 12 Hours / 24 Hours)
   hours >= 0 && hours <= 12 ? amPmELem.innerText = ampm : amPmELem.innerText = 'PM';

   hoursELem.innerText = `${hours}:`;
   minutesELem.innerText = `${minutes}:`;
   secondsELem.innerText = `${seconds}`;

}

setInterval(clock, 1000);