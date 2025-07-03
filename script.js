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

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('show');
});

// Close menu when a link is clicked (optional)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      navMenu.classList.remove('show');
      hamburger.classList.remove('active');
    }
  });
});

// Scroll-triggered fade-in animations
const observerOptions = {
  threshold: 0.2
};

const fadeInElements = document.querySelectorAll('section, .testimonial, .project-item');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

fadeInElements.forEach(el => {
  observer.observe(el);
});
