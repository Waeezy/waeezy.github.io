

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function openlink(num) {
  if (num == 1){
    window.open('https://www.facebook.com/waeely/', '_blank');
  }
  if (num == 2){
    window.open('https://github.com/Waeezy', '_blank');
  }
  if (num == 3){
    window.open('https://www.linkedin.com/in/wael-yakoub-agha-12a426158/', '_blank');
  }
  if (num == 4){
    window.open('https://github.com/Waeezy/Sudoku_Vocabulary_Game', '_blank');
  }
  if (num == 5){
    window.open('https://github.com/AlecGrover/Commandline-Sweeper', '_blank');
  }
  if (num ==6){
    window.open('https://github.com/Waeezy/CyberSecurity-HMM', '_blank');
  }
  if (num =7){
    window.open('https://github.com/DerekRoy/CMPT419-726FinalAssignment', '_blank');
  }
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Sudoko");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}