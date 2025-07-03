document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    form.action = "https://formsubmit.co/merisonsecsystem@gmail.com"; // Set form action to email submission
    form.method = "POST"; // Set form method to POST

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
        event.preventDefault(); // Prevent default form submission
        responseMessage.textContent = "Submitting..."; // Show submitting message
        responseMessage.style.color = "blue"; // Set message color
        form.parentElement.appendChild(responseMessage); // Append message to form
        const formData = new FormData(form); // Create FormData object from form
        fetch(form.action, {
            method: form.method,
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                responseMessage.textContent = "Message sent successfully!"; // Success message
                responseMessage.style.color = "green"; // Change message color to green
                form.reset(); // Clear form fields
            } else {
                responseMessage.textContent = "Error sending message. Please try again."; // Error message
                responseMessage.style.color = "red"; // Change message color to red
            }
        })
        .catch(error => {
            responseMessage.textContent = "Error sending message. Please try again."; // Error message
            responseMessage.style.color = "red"; // Change message color to red
        });

        responseMessage.style.color = "blue";
        form.parentElement.appendChild(responseMessage);
    });
});


// Select elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav a');
const fadeInElements = document.querySelectorAll('section, .testimonial, .project-item');

// Hamburger Toggle
hamburger.addEventListener('click', () => {
  const isActive = hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
  
  // Accessibility: toggle aria-expanded
  hamburger.setAttribute('aria-expanded', isActive);
});

// Close menu when clicking any nav link (on mobile)
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
});

// IntersectionObserver options
const observerOptions = {
  threshold: 0.2
};

// Observer callback
const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

// Create observer
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe all fade-in elements
fadeInElements.forEach(el => {
  observer.observe(el);
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (
    !hamburger.contains(e.target) &&
    !navMenu.contains(e.target) &&
    navMenu.classList.contains('show')
  ) {
    navMenu.classList.remove('show');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
  }
});

}, observerOptions);

fadeInElements.forEach(el => {
  observer.observe(el);
});

// Select the logo container
const logo = document.querySelector('.logo');

logo.addEventListener('mousemove', (e) => {
  const rect = logo.getBoundingClientRect();
  const x = e.clientX - rect.left; // X within element
  const y = e.clientY - rect.top;  // Y within element

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  // Calculate rotation, adjust sensitivity as needed
  const rotateX = -(y - centerY) / 10;
  const rotateY = (x - centerX) / 10;

  logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
});

logo.addEventListener('mouseleave', () => {
  // Smoothly reset to default
  logo.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
});

logo.addEventListener('mouseenter', () => {
  // Subtle grow when entering
  logo.style.transition = 'transform 0.2s ease';
});


// =======================
// 1. SCROLL ANIMATIONS
// =======================
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate only once
    }
  });
});

document.querySelectorAll('section, .testimonial, .project-item').forEach(el => {
  observer.observe(el);
});

// =======================
// 2. HAMBURGER MENU TOGGLE
// =======================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});

// =======================
// 3. CLOSE MENU ON LINK CLICK (Mobile UX)
// =======================
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('show');
  });
});



