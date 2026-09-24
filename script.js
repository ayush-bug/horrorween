// all audios 
const horrorScream = new Audio('/assets/sounds/horror-scream.mp3');

const screamHalloween = new Audio('/assets/sounds/Scream-Halloween-Horror.mp3');
const nunVoice = new Audio('/assets/sounds/nun-voice.mp3');
const iseeyou = new Audio('/assets/sounds/iseeyou.mp3')

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
    document.querySelector('.yesNote').style.display = "flex";
    
});
document.getElementById("btn2").addEventListener('click', function(){
    nunVoice.play();
})