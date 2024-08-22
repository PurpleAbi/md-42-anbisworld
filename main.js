(function() {
    emailjs.init({
      publicKey: "fOyc3vwrCoJnCorC0",
    });
})();

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_9jjg4nq', 'contact_form', '#contactForm', this)
            .then(() => {
                Swal.fire("Se envió tu mensaje");
            }, (error) => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                  });;
            });
    });
}