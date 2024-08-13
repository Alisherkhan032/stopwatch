let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
let reset = document.querySelector('#reset');
let border = document.querySelector('.container')
let intervalId;

let saveStateSec = 1;
let saveStateMin = 0;
let saveStateHour = 0;

let secTime = saveStateSec;
let minTime = saveStateMin;
let hourTime = saveStateHour;

function time(){
    intervalId = setInterval(()=>{
        if(secTime <= 9){
            sec.textContent = `0${secTime}`;
        }else{
            sec.textContent = secTime;
        }

        if(minTime <= 9){
            min.textContent = `0${minTime}`;
        }else{
            min.textContent = minTime;
        }

        if(hourTime < 9){
            hour.textContent = `0${hourTime}`;
        }else{
            hour.textContent = hourTime;
        }
        
        secTime++;
        if(secTime==61){
            secTime = 0;
            minTime++;
        }
        if(minTime == 61){
            minTime = 0;
            secTime = 0;
            hourTime++;
        }
    },1000)
}

play.addEventListener('click',()=>{
    play.disabled = true;
    pause.disabled = false;
   time();
    
});

pause.addEventListener('click', ()=>{
    pause.disabled = true;
    clearInterval(intervalId);
    saveStateHour = hour.textContent;
    saveStateMin = min.textContent;
    saveStateSec = sec.textContent;
    play.disabled = false;
});


reset.addEventListener('click', ()=>{
    play.disabled = false;
    pause.disabled = false;                                                             
    clearInterval(intervalId);
    saveStateHour =1;
    saveStateMin =0;
    saveStateSec =0;
    secTime = 1;
    minTime = 0;
    hourTime = 0
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hour.innerHTML = '00';
})
