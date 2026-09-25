// all audios 
const horrorScream = new Audio('/assets/sounds/horror-scream.mp3');

const screamHalloween = new Audio('/assets/sounds/Scream-Halloween-Horror.mp3');
const nunVoice = new Audio('/assets/sounds/nun-voice.mp3');
const iseeyou = new Audio('/assets/sounds/iseeyou.mp3');
const scarylaugh = new Audio('/assets/sounds/ScaryLaughSoundEffect.mp3');
const evilscaryLaugh = new Audio('/assets/sounds/Scary-Sound-Effect3.mp3');
 
  document.querySelector('body').addEventListener('click', function(){
    horrorScream.play();
  });

document.getElementById("splash-hide").addEventListener('click', function(){
    document.querySelector('.splash-container').style.display = "none";
    horrorScream.play();
    document.querySelector('.intro').style.display = "block";
    document.querySelector('#introVideo').play();
    document.querySelector('#txt1').style.display = "block";
});

document.getElementById("btn1").addEventListener('click' , function(){
    document.querySelector('#txt2').style.display = "block";
    document.querySelector('#txt1').style.display = "none";
});

document.getElementById("no").addEventListener("click" , function(){
    iseeyou.play();
    document.querySelector('#txtNo').style.display = "block";
    document.querySelector('#txt2').style.display = "none";

});

document.getElementById("yes").addEventListener("click" , function(){
    screamHalloween.play();

        document.querySelector('#txtyes').style.display = "block";
    document.querySelector('.yesNote').style.display = "flex"; 
        document.querySelector('#txt2').style.display = "none";
   
});
document.getElementById("btn2").addEventListener('click', function(){
    nunVoice.play();
});

document.getElementById("btn3").addEventListener('click' , function(){
    scarylaugh.play();
});

document.getElementById("btn2").addEventListener('click', function(){
        document.querySelector('#txtNo').style.display = "none";

    document.querySelector("#really").style.display = "block";

});

document.getElementById("btn3").addEventListener('click' , function(){
    document.querySelector('.yesNote').style.display = "none";
    document.querySelector('.hmmOk').style.display = "flex";
    evilscaryLaugh.play();
             document.querySelector('#txtyes').style.display = "none";

    document.querySelector('#txt3').style.display = "block";

})