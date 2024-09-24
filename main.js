document.addEventListener("DOMContentLoaded", function() {
  const burger = document.getElementById("burger");
  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const mobileNavbar = document.getElementById("mobilenavbar");

  let isMenuOpen = false;

  burger.addEventListener("click", function() {
    isMenuOpen = !isMenuOpen;
    mobileNavbar.classList.toggle("hidden");

    if (isMenuOpen) {
      // Rotate and hide the lines for a cross
      line1.classList.add("rotate-45", "translate-y-[10px]");
      line2.classList.add("opacity-0");
      line3.classList.add("-rotate-45", "-translate-y-[10px]");
    } else {
      // Reset to original
      line1.classList.remove("rotate-45", "translate-y-[10px]");
      line2.classList.remove("opacity-0");
      line3.classList.remove("-rotate-45", "-translate-y-[10px]");
    }
  });

  // Change navbar text color based on scroll
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll("nav a");

  window.addEventListener("scroll", function() {
    let scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      let sectionTop = section.offsetTop;
      let sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        if (section.id === "overview") {
          // Change text color to white when in black section
          links.forEach(link => link.classList.add("text-white"));
        } else {
          // Reset back to default
          links.forEach(link => link.classList.remove("text-white"));
        }
      }
    });
  });
});


if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;
    
    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 40; 
        else if (event.detail) delta = -event.detail / 40;
    
        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }
    
    var goUp = true;
    var end = null;
    var interval = null;
    
    function handle(delta) {
    var animationInterval = 20;
      var scrollSpeed = 20;
    
    if (end == null) {
      end = $(window).scrollTop();
      }
      end -= 20 * delta;
      goUp = delta > 0;
    
      if (interval == null) {
        interval = setInterval(function () {
          var scrollTop = $(window).scrollTop();
          var step = Math.round((end - scrollTop) / scrollSpeed);
          if (scrollTop <= 0 || 
              scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
              goUp && step > -1 || 
              !goUp && step < 1 ) {
            clearInterval(interval);
            interval = null;
            end = null;
          }
          $(window).scrollTop(scrollTop + step );
        }, animationInterval);
      }
    }