

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
}