// Demo only: nothing is sent or stored. Inputs have no name attributes, so even
// without JS the browser has nothing to submit. Replace with EmailJS in Stage 5.
document.querySelectorAll('.demo-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.reset();
        form.querySelector('.demo-message').hidden = false;
    });
});
