console.log("javascript is working i guess")


let message = document.getElementById("overflow");
// declare a variable called message and set it equal to the element in the HTML document with the ID of "the-internet"
// let count = 0;
// // declare a variable and set it to 0
// document.body.addEventListener("scroll", theInternetIs)
// // make sure the whole entire body of the html document is listening for someone to click on it, when someone does click on it, call the function called "theInternetIs"

// window.addEventListener("scroll", theInternetIs)
// // make sure the whole entire window is also listening for someone to do something, in this case, scroll
// function theInternetIs() {
// 	// declare a new function called theInternetIs
// 	console.log(count)
// 	// everytime this function is called, add 1 to the count variable
// 	if (message.innerHTML === "the internet is in the ground") {
// 		// check if the message variable, declared above, has text inside it that says "the internet is in the ground", if it does do the following:
// 		message.innerHTML = "the internet is in the clouds";
// 		//change the text to "the internet is in the clouds"
// 		message.classList.add("test");
// 		//add a new class called "test"
// 	} else if {
// 		// check if the count variable is larger than or equal to 3, if it is restart the counter and reset the default text
// 		message.innerHTML = "click this page to find out where the internet is...";
// 		// also check if the message has the cloud texture class still attached to it, and remove it if it does
// 		if (message.classList.contains("test")) {
// 			message.classList.remove("test");
// 		}
// 	} else {
// 		// if neither of the above conditionals are true, then do the following:
// 		message.innerHTML = "the internet is in the ground";
// 		if (message.classList.contains("test")) {
// 			message.classList.remove("test");
// 		}
// 	}
// }

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("overflow").className = "test";
  } else {
    document.getElementById("overflow").className = "";
  }
}
