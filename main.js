(function() {
    emailjs.init({
      publicKey: "RI88XITF2Y0-LLg4f",
    });
})();

window.onload = function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_AnbisWorld', 'contact_form', '#contactForm', this)
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