// Demo only: nothing is sent or stored. Inputs have no name attributes, so even
// without JS the browser has nothing to submit. Replace with EmailJS in Stage 5.
document.querySelectorAll('.demo-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        form.reset();
        var message = form.querySelector('.demo-message');
        message.textContent = 'Demo only — nothing was sent or saved. To reach JFCS, please call (336) 285-7238 or email jfcs0525@gmail.com.';
        message.hidden = false;
    });
});
