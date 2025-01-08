const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// Close navbar when link is clicked
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// Event Listeners: Handling toggle event
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

//  Store color theme for future visits

function switchTheme(e) {
  const logoImg = document.querySelector("#logo-img");

  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); // Save preference
    logoImg.src = "./assets/logo1.png"; // Change to dark mode logo
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); // Save preference
    logoImg.src = "./assets/logo.png"; // Change to light mode logo
  }
}

// Save user preference on load

const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

//Adding date

let myDate = document.querySelector("#datee");

const yes = new Date().getFullYear();
myDate.innerHTML = yes;


  // Get all popup triggers
  const popupTriggers = document.querySelectorAll('.popup-trigger');

  // Add event listeners to all triggers
  popupTriggers.forEach(trigger => {
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      const popupId = this.getAttribute('data-popup');
      const popup = document.getElementById(popupId);
      popup.classList.add('active');
    });
  });

  // Close popup on button click
  const closeButtons = document.querySelectorAll('.close-btn');
  closeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const popup = this.closest('.popup');
      popup.classList.remove('active');
    });
  });

  // Close popup when clicking outside the content
  const popups = document.querySelectorAll('.popup');
  popups.forEach(popup => {
    popup.addEventListener('click', function (e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#popup1 .carousel-images");
    const images = carousel.querySelectorAll("img");
    const prevBtn = document.querySelector("#popup1 .carousel-btn.prev");
    const nextBtn = document.querySelector("#popup1 .carousel-btn.next");

    let currentIndex = 0;

    // Function to update the active image
    const updateCarousel = () => {
      images.forEach((img, index) => {
        img.classList.toggle("active", index === currentIndex);
      });
    };

    // Next Button Click
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
      updateCarousel();
    });

    // Previous Button Click
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
      updateCarousel();
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#popup2 .carousel-images");
    const images = carousel.querySelectorAll("img");
    const prevBtn = document.querySelector("#popup2 .carousel-btn.prev");
    const nextBtn = document.querySelector("#popup2 .carousel-btn.next");

    let currentIndex = 0;

    // Function to update the active image
    const updateCarousel = () => {
      images.forEach((img, index) => {
        img.classList.toggle("active", index === currentIndex);
      });
    };

    // Next Button Click
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
      updateCarousel();
    });

    // Previous Button Click
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
      updateCarousel();
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector("#popup3 .carousel-images");
    const images = carousel.querySelectorAll("img");
    const prevBtn = document.querySelector("#popup3 .carousel-btn.prev");
    const nextBtn = document.querySelector("#popup3 .carousel-btn.next");

    let currentIndex = 0;

    // Function to update the active image
    const updateCarousel = () => {
      images.forEach((img, index) => {
        img.classList.toggle("active", index === currentIndex);
      });
    };

    // Next Button Click
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
      updateCarousel();
    });

    // Previous Button Click
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image
      updateCarousel();
    });
  });