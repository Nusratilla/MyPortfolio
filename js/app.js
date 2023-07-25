window.addEventListener("DOMContentLoaded", () => {
  //--------------- Menu Bar ---------------
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const closeIcon = document.querySelector("#menu-close-icon");
  const navAnc = document.querySelectorAll(".nav-link");

  menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
  });

  function linkAction() {
    navbar.classList.remove("active");
  }
  navAnc.forEach((l) => l.addEventListener("click", linkAction));
  closeIcon.addEventListener("click", linkAction);

  // ---------------Dark Theme---------------

  const iconMoon = document.querySelector("#icon-moon");
  const darkMode = localStorage.getItem("darkMode");

  if (darkMode) document.body.classList.add(darkMode);

  iconMoon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    iconMoon.classList.toggle("bi-sun-fill");
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("darkMode", "dark-theme");
    } else {
      localStorage.removeItem("darkMode");
    }
  });

  // ---------------typed animation---------------
  const typed = new Typed(".name-input", {
    strings: ["Front-End Web Developer", "Web Designer"],
    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
  });

  // ---------------skills---------------
  let skillHTML = "";

  skillsDb.forEach((skill) => {
    skillHTML += `
        <div class="skill-card">
            <div class="skill-in-card">
              <div class="skill-img">
                <img src="img/SKILL-LOGO/${skill.image}" />
                <p class="skill-p">${skill.sname}</p>
              </div>
            </div>
            <div class="skill-anm-bl"></div>
            <div class="skill-anm-bl2"></div>
        </div>
    `;
  });
  document.querySelector(".skill-wrapper").innerHTML = skillHTML;
});
