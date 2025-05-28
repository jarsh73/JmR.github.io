// Enkel hantering av kontaktformulär (utan backend)
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contactForm');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Visa ett "tack"-meddelande (skicka ej på riktigt)
      document.getElementById('formMsg').style.display = 'block';
      form.reset();
    });
  }
});