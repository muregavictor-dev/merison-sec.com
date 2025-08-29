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

  // ========== Hamburger Menu ==========
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  menuToggle.classList.toggle('open'); // optional if you add animations
});

// Close menu when clicking a link (mobile UX improvement)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.classList.remove('open');
  });
});


// ========== Scroll-triggered Fade Animations ==========
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2, // 20% of element visible
  rootMargin: "0px 0px -50px 0px" // appear slightly before fully visible
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

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



