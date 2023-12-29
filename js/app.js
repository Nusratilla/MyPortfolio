window.addEventListener("DOMContentLoaded", () => {
  //--------------- Menu Bar ---------------
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");
  const closeIcon = document.querySelector("#menu-close-icon");
  const navAnc = document.querySelectorAll(".nav-link");

  const iconMoon = document.querySelector(".mood-button");
  const darkMode = localStorage.getItem("darkMode");

  menuIcon.addEventListener("click", () => {
    navbar.classList.add("active");
  });

  function linkAction() {
    navbar.classList.remove("active");
  }
  navAnc.forEach((l) => l.addEventListener("click", linkAction));
  closeIcon.addEventListener("click", linkAction);
  iconMoon.addEventListener("click", linkAction);

  // ---------------Dark Theme---------------

  if (darkMode) document.body.classList.add(darkMode);

  iconMoon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      localStorage.setItem("darkMode", "dark-theme");
    } else {
      localStorage.removeItem("darkMode");
    }
  });

  // ---------------typed animation---------------
  const typed = new Typed(".name-input", {
    strings: ["Front-End Developer", "WordPress Developer", "Web Designer"],
    typeSpeed: 70,
    backSpeed: 50,
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
