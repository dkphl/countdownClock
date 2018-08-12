var dateControl = document.querySelector('input[type="date"]');
dateControl.value = '2018-12-31';

function countdown(futureDate) {
  let t = new Date(futureDate) - new Date();
  let days = Math.floor(t / 1000 / 60 / 60 / 24);
  let hours = Math.floor((t / 1000 / 60 / 60) % 24);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let seconds = Math.floor((t / 1000) % 60);
  return { 
    'total': t,
    'days': days, 
    'hours': hours, 
    'minutes': minutes, 
    'seconds': seconds }; 
}

function initializeClock(){
  let clock = document.getElementById("clock");
  let daysHead = clock.querySelector(".days");
  let hoursHead = clock.querySelector(".hours");
  let minutesHead = clock.querySelector(".minutes");
  let secondsHead = clock.querySelector(".seconds");
  let inputDate = document.getElementById("inputDate");
  // set function for updating time
  function updateClock(){
      let t = countdown(inputDate.value);
      daysHead.innerHTML = t.days < 10 ? "00" + t.days : t.days < 100 ? "0" + t.days : t.days;
      hoursHead.innerHTML = t.hours < 10 ? "0" + t.hours : t.hours;
      minutesHead.innerHTML = t.minutes < 10 ? "0" + t.minutes : t.minutes;
      secondsHead.innerHTML = t.seconds < 10 ? "0" + t.seconds : t.seconds;
  
  // call the interval updating
    var timeinterval = setInterval(updateClock,1000);
  // once timer reaches zero, this stops the interval
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  }

// run function on page load to avoid initial 1 second delay
updateClock(); 

}



initializeClock();



