document.addEventListener('DOMContentLoaded', function () {
  // ====================
  // 1. CONTACT FORM SETUP
  // ====================
  const form = document.querySelector(".contact-form form");
  if (form) {
    form.action = "https://formsubmit.co/merisonsecsystem@gmail.com";
    form.method = "POST";

    const displayButton = document.createElement("button");
    displayButton.textContent = "Show Form";
    displayButton.style.display = "block";
    form.style.display = "none";

    displayButton.addEventListener("click", function () {
      form.style.display = "block";
      displayButton.style.display = "none";
    });

    form.parentElement.insertBefore(displayButton, form);

    const responseMessage = document.createElement("p");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      responseMessage.textContent = "Submitting...";
      responseMessage.style.color = "blue";
      form.parentElement.appendChild(responseMessage);

      const formData = new FormData(form);

      fetch(form.action, {
        method: form.method,
        body: formData,
      })
        .then(response => {
          if (response.ok) {
            responseMessage.textContent = "Message sent successfully!";
            responseMessage.style.color = "green";
            form.reset();
          } else {
            responseMessage.textContent = "Error sending message.";
            responseMessage.style.color = "red";
          }
        })
        .catch(error => {
          responseMessage.textContent = "Error sending message.";
          responseMessage.style.color = "red";
        });
    });
  }

  // ====================
  // 2. SCROLL ANIMATIONS
  // ====================
  const fadeElements = document.querySelectorAll("section, .testimonial, .project-item");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  fadeElements.forEach(el => observer.observe(el));

  // ====================
  // 3. HAMBURGER MENU
  // ====================
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  const navLinks = document.querySelectorAll("nav a");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isActive = hamburger.classList.toggle("active");
      navMenu.classList.toggle("show");
      hamburger.setAttribute("aria-expanded", isActive);
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", false);
      });
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("show");
        hamburger.classList.remove("active");
        hamburger.setAttribute("aria-expanded", false);
      }
    });
  }

  // ====================
  // 4. 3D LOGO HOVER
  // ====================
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.addEventListener("mousemove", (e) => {
      const rect = logo.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -(y - centerY) / 10;
      const rotateY = (x - centerX) / 10;
      logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
    });

    logo.addEventListener("mouseleave", () => {
      logo.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });

    logo.addEventListener("mouseenter", () => {
      logo.style.transition = "transform 0.2s ease";
    });
  }
});
