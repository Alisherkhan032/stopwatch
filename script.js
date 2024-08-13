let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
let milli = document.querySelector('#milli');
let play = document.querySelector('#play');
let pause = document.querySelector('#pause');
let reset = document.querySelector('#reset');
let intervalId;

let secTime = 0;
let minTime = 0;
let hourTime = 0;
let milliTime = 0;

function time(){
    
    intervalId = setInterval(()=>{
        milliTime++;
        if(milliTime <= 9){
            milli.textContent = `0${milliTime}`;
        }else{
            if(milliTime===100){
                milliTime.textContent = 99 // to avoid jitter => 100 hoga to extra space a ri to elemnt shift ho re the
            }else{
                milli.textContent = milliTime;
            }
            
        }
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
        
        if(milliTime==100){
            secTime++;
            milliTime = 0;
        }
        if(secTime == 61){
            minTime++;
            milliTime=0;
            secTime=0;
        }
        if(minTime == 61){
            minTime = 0;
            secTime = 0;
            milliTime = 0;
            hourTime++;
        }
    },10)
}

play.addEventListener('click',()=>{
    play.disabled = true;
    pause.disabled = false;
   time();

});

pause.addEventListener('click', ()=>{
    pause.disabled = true;
    clearInterval(intervalId);
    play.disabled = false;
});


reset.addEventListener('click', ()=>{
    play.disabled = false;
    pause.disabled = false;                                                             
    clearInterval(intervalId);
    secTime = 0;
    minTime = 0;
    hourTime = 0;
    milliTime = 0;
    sec.innerHTML = '00';
    min.innerHTML = '00';
    hour.innerHTML = '00';
    milli.innerHTML = "00"
})
