let progressbar = document.querySelector(".circular-progress");
let valuecontainer = document.querySelector(".value-container");
let result = document.querySelector(".result");

let progressvalue = 0;
let progressendvalue = 65;
let speed = 50;

let progress  = setInterval(()=>{
    progressvalue++;
    result.textContent = `${progressvalue}%`;
    progressbar.style.background = `conic-gradient(
        #4d5bf9 ${progressvalue * 3.6}deg,
        #cadcff ${progressvalue * 3.6}deg
    )`;
    if(progressvalue == progressendvalue){
        clearInterval(progress);
    }
},speed);