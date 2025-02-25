/* ====================== toggle icon navbar ============================ */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* ====================== scroll section active link ============================ */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/* ====================== sticky navbar ============================ */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

/* ====================== remove toggle icon and navbar ============================ */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ====================== scroll reveal ============================ */
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

/* ====================== Typed JS ============================ */
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Coder'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop:true,
});

/* ====================== form response ============================ */
const scriptURL = 'https://script.google.com/macros/s/AKfycbxgdLqRkEkNjbRYjo8pebYCMJh5eoUdZtPfUWAws8Mdx8TVDjXhwtYHBLOXuI0NWLkD/exec';
const form = document.forms['contactForm'];

form.addEventListener('submit', e => {
  e.preventDefault();

  // Disable the submit button and show loading message
  const submitButton = form.querySelector('input[type="submit"]');
  submitButton.disabled = true;
  submitButton.value = "Submitting...";

  // Show loading message
  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = "Processing your request... Please wait.";
  form.appendChild(loadingMessage); 

  // Set timeout for long form submission
  const timeout = setTimeout(() => {
    alert("The form submission is taking longer than expected. Please try again later.");
    submitButton.disabled = false;
    submitButton.value = "Send Message";
    form.removeChild(loadingMessage); 
  }, 10000); 

  // Send form data to Google Apps Script
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      clearTimeout(timeout); 
      alert("Thank you! Form is submitted");
      form.reset(); 
    })
    .catch(error => {
      clearTimeout(timeout); 
      alert("Oops! Something went wrong. Please try again later.");
      console.error('Error!', error.message);
    })
    .finally(() => {
      submitButton.disabled = false; 
      submitButton.value = "Send Message"; 
      form.removeChild(loadingMessage); 
    });
});