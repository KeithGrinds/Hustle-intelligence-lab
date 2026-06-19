const menuBtn =
  document.querySelector(".menu-btn");

const navLinks =
  document.querySelector(".nav-links");

const heroText =
  document.getElementById("hero-text");

const progressBar =
  document.getElementById("progress-bar");

const signupForm =
  document.getElementById("signup-form");

const heroMessage =
  "Escape Average. Build Intelligence. Master The Hustle.";

let heroIndex = 0;

function typeHero() {

  if (heroIndex < heroMessage.length) {

    heroText.textContent +=
      heroMessage.charAt(heroIndex);

    heroIndex++;

    setTimeout(typeHero, 45);
  }
}

window.addEventListener("load", typeHero);

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  const expanded =
    menuBtn.getAttribute("aria-expanded") === "true";

  menuBtn.setAttribute(
    "aria-expanded",
    String(!expanded)
  );
});

document
  .querySelectorAll('a[href^="#"]')
  .forEach((anchor) => {

    anchor.addEventListener("click", (e) => {

      const targetId =
        anchor.getAttribute("href");

      const target =
        document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      navLinks.classList.remove("active");

      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );
    });
});

window.addEventListener("scroll", () => {

  const scrollTop =
    document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress =
    (scrollTop / scrollHeight) * 100;

  progressBar.style.width =
    `${progress}%`;
});

signupForm.addEventListener("submit", (e) => {

  const emailInput =
    document.querySelector(
      'input[name="email"]'
    );

  const email =
    emailInput.value.trim();

  const validEmail =
    /^\S+@\S+\.\S+$/.test(email);

  if (!validEmail) {

    e.preventDefault();

    alert("Please enter a valid email.");

    return;
  }

  gtag('event', 'signup_submit', {

    event_category: 'form',

    event_label: 'HI Signup Form'

  });

  alert("Welcome to HI.");
});

const sections =
  document.querySelectorAll("section");

const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const sectionId =
            entry.target.id;

          gtag('event', 'section_view', {

            section_name: sectionId

          });

          console.log(
            `Viewed section: ${sectionId}`
          );
        }
      });
    },

    {
      threshold: 0.5
    }
);

sections.forEach((section) => {

  observer.observe(section);

});

const buttons =
  document.querySelectorAll(".btn");

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    gtag('event', 'button_click', {

      button_text: button.innerText

    });

    console.log(
      `Clicked: ${button.innerText}`
    );
  });
});

const blogItems =
  document.querySelectorAll(".blog-item");

blogItems.forEach((item) => {

  item.addEventListener("click", () => {

    gtag('event', 'blog_click', {

      article: item.innerText

    });

    console.log(
      `Blog clicked: ${item.innerText}`
    );
  });
});
