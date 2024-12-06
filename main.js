document.addEventListener("DOMContentLoaded", () => {
  const darkMoodBtn = document.getElementById("dark-toggle");
  const title = darkMoodBtn.getAttribute("title");

  darkMoodBtn.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    title.innerHTML = "Dark Mood";

    if (darkMoodBtn.classList.contains("ri-sun-fill")) {
      darkMoodBtn.classList.remove("ri-sun-fill");
      darkMoodBtn.classList.add("ri-moon-fill");
    } else {
      darkMoodBtn.classList.add("ri-sun-fill");
      darkMoodBtn.classList.remove("ri-moon-fill");
    }
  });

  // Check if the body contains the 'dark' class
  if (document.body.classList.contains("dark")) {
    title.innerHTML = "Dark Mood";
    console.log(title);
  } else {
    title.innerHTML = "Light Mood";
    console.log(title);
  }
});

// toggle menu
const navlists = document.querySelector("#navlists"),
  navItems = navlists.querySelectorAll("li a"),
  menuButton = document.querySelector("[data-menu-button]"),
  icon = menuButton.querySelector("i");

menuButton.addEventListener("click", () => {
  navlists.classList.toggle("active");
  if (icon.classList.contains("ri-menu-fill")) {
    icon.classList.remove("ri-menu-fill");
    icon.classList.add("ri-close-line");
  } else {
    icon.classList.remove("ri-close-line");
    icon.classList.add("ri-menu-fill");
  }
});
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navlists.classList.remove("active");
    icon.classList.remove("ri-close-line");
  });
});

// Scroll Reveal Animation

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".home__col .small-card", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".home__col  h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".home__col p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(" .home__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".home__col.right img", {
  ...scrollRevealOption,
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".blob", {
  ...scrollRevealOption,
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".work__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".about__col .heading", {
  ...scrollRevealOption,
  delay: 50,
});

ScrollReveal().reveal(".about__col .description", {
  ...scrollRevealOption,
  delay: 550,
});

ScrollReveal().reveal(".about__col #learn-btn", {
  ...scrollRevealOption,
  delay: 950,
});

ScrollReveal().reveal(".about__col.right img", {
  ...scrollRevealOption,
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".feature__col", {
  interval: 500,
});

ScrollReveal().reveal(".services h2", {
  ...scrollRevealOption,
  delay: 100,
});

ScrollReveal().reveal(".service-card", {
  ...scrollRevealOption,
  delay: 450,
  interval: 500,
});

ScrollReveal().reveal(".services__col.right img", {
  ...scrollRevealOption,
  delay: 650,
  origin: "right",
});

const swiperr = new Swiper(".swiper", {
  loop: true,
});
