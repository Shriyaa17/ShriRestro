// JavaScript for Contact Form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Extract form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple form validation (optional)
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Show success message (simulate form submission)
        formResponse.style.display = 'block';
        formResponse.innerHTML = `Thank you, ${name}! Your message has been sent successfully.`;

        // Clear form fields
        form.reset();
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
