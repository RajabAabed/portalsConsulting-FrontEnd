import { CountUp } from "https://cdnjs.cloudflare.com/ajax/libs/countup.js/2.0.7/countUp.min.js";

document.addEventListener("DOMContentLoaded", function () {
  logosSectionAnimation();
  numbersSectionAnimation();
  changeNavOnScroll();
  servicesSectionAnimation();
  projectsSectionAnimation();
  sliderOption();
});

function logosSectionAnimation() {
  const logos = document.querySelectorAll(".logo");
  const section = document.querySelector(".clients-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logos.forEach((logo) => {
            logo.classList.add("animate-fade-in-up");
          });
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
}

function numbersSectionAnimation() {
  const section = document.querySelector(".counter-section");

  if (!section) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounters();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
}

function startCounters() {
  const options = {
    useEasing: true,
    startVal: 0,
    duration: 4, // Duration of animation in seconds
    separator: ",",
    scrollSpyOnce: true,
  };
  const counter1 = new CountUp("counter1", 108, options);
  const counter2 = new CountUp("counter2", 88, options);
  const counter3 = new CountUp("counter3", 12, options);
  const counter4 = new CountUp("counter4", 550, options);

  // Start the animations
  if (!counter1.error) {
    counter1.start();
    counter2.start();
    counter3.start();
    counter4.start();
  } else {
  }
}

function changeNavOnScroll() {
  const nav = document.getElementsByTagName("nav")[0];

  const heroSection = document.querySelector(".hero-section");

  if (heroSection && nav) {
    const updateNavOnScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSectionHeight = heroSection.offsetHeight;

      // If scrolled past the hero section
      if (scrollPosition > heroSectionHeight) {
        nav.classList.add("bg-primary", "shadow-lg");
        nav.classList.remove("bg-white", "bg-opacity-10", "backdrop-blur-lg");
      } else {
        nav.classList.add("bg-white", "bg-opacity-10", "backdrop-blur-lg");
        nav.classList.remove("bg-primary", "shadow-lg");
      }
    };

    updateNavOnScroll();

    window.addEventListener("scroll", updateNavOnScroll);
  }
}

function servicesSectionAnimation() {
  const sections = document.querySelectorAll(".services-section > div");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

function projectsSectionAnimation() {
  const sections = document.querySelectorAll(".projects-items > div");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
}

function sliderOption() {
  var splide = new Splide(".splide", {
    gap: "1rem",
    type: "loop",
    perPage: 4,
    focus: "center",
    autoplay: true,
    pagination: false,
    arrows: true,
    perMove: 1,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  });

  splide.mount();
}
