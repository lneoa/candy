console.log("javascript is working but idk why lol")





let message = document.getElementById("overflow");
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 300) {
    document.getElementById("overflow").className = "test";
  } else {
    document.getElementById("overflow").className = "";
  }
}

