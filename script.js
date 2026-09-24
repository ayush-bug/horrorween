// all audios 


const horrorScream = new Audio('/assets/sounds/horror-scream.mp3');

  document.querySelector('body').addEventListener('click', function(){
    horrorScream.play();
  })

document.getElementById("splash-hide").addEventListener('click', function(){
    document.querySelector('.splash-container').style.display = "none";
    horrorScream.play();
    document.querySelector('.intro').style.display = "block";
    document.querySelector('#introVideo').play();
    document.querySelector('#txt1').style.display = "block";
})

document.getElementById("btn1").addEventListener('click' , function(){
    document.querySelector('#txt2').style.display = "block";
    document.querySelector('#txt1').style.display = "none";
})