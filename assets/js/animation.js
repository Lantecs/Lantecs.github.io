
var type = new Typed(".auto-type", {
    strings: ["Freelancer", "Developer", "Student"],
    typeSpeed: 100,
    startDelay: 1200,
    backSpeed: 70,
    loop: true
  })

  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach((bar) => {
      const targetWidth = parseFloat(bar.getAttribute('aria-valuenow'));
      let currentWidth = 0;

      // Function to update the width of the progress bar
      function updateWidth() {
        if (currentWidth < targetWidth) {
          currentWidth += 1; // Adjust the animation speed as needed
          bar.style.width = `${currentWidth}%`;
          requestAnimationFrame(updateWidth);
        }
      }

      updateWidth();
    });
  }

  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
  
      // Simulate sending the message (you can replace this with actual code to send the message)
      simulateMessageSending()
        .then(() => {
          // Message sent successfully
          successMessage.style.display = "block";
          setTimeout(() => {
            successMessage.style.display = "none";
          }, 2000); // Hide the success message after 3 seconds
  
          // Clear all input fields and the textarea
          const inputElements = form.querySelectorAll("input, textarea");
          inputElements.forEach((element) => {
            element.value = "";
          });
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    });
  
    function simulateMessageSending() {
      return new Promise((resolve, reject) => {
        // Simulate sending the message by delaying for a few seconds
        setTimeout(() => {
          // Resolve to simulate a successful send
          resolve();
        }, 0); // Simulate a 2-second delay (you can adjust this as needed)
      });
    }
  });
  
  


  // Call the function to start the animation when the page is loaded
  window.addEventListener('load', animateProgressBars);

/* const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit',(e)=>{
  e.preventDefault();

Email.send({
  Host : "smtp.elasticemail.com",
  Username : "moneytracker456@gmail.com",
  Password : "DC475711F590ADB9ABC69456F26DE174288A",
  To : 'lanberttecson@gmail.com',
  From : email.value,
  Subject : subject.value,
  Body : message.value
}).then(
  message => alert(message)
);
}); */
