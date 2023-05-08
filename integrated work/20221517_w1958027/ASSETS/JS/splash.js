window.addEventListener("load", function () {
	var splash = document.querySelector(".splash-container");
	setTimeout(function () {
	  splash.style.display = "block";
	  setTimeout(fadeOut, 4000);
	}, 0);

	function fadeOut() {
	  var element = document.querySelector(".splash-container");
	  var op = 1;
	  var timer = setInterval(function () {
		if (op <= 0.01) {
		  clearInterval(timer);
		  // sessionStorage.setItem("visited", "false");
		  window.location.href ="20221420-w1956394/Home_page.html";
		}
		element.style.opacity = op;
		op -= op * 0.05;
	  }, 20);
	}
  });