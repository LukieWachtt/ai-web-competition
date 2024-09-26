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
