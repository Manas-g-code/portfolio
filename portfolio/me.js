(function() {
  emailjs.init("77f-5a7CozPKfHy7q"); // Replace with your EmailJS user ID
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_6fz4ut8", "template_mibv0yo", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (err) => {
      alert("Failed to send message. Please try again.");
      console.log(err);
    });
});

  // const toggleBtn = document.querySelector('.theme-toggle');
  // const body = document.body;

  // toggleBtn.addEventListener('click', () => {
  //   body.classList.toggle('light-theme');

  //   if (body.classList.contains('light-theme')) {
  //     toggleBtn.textContent = '☀️';
  //   } else {
  //     toggleBtn.textContent = '🌙';
  //   }
  // });

