const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click',function() {
        navLinks.forEach(link => link.classList.remove('active'));
        link.classList.add('active');
        });
});

const form = document.getElementById('contact-form');
const submitButton = form.querySelector('.submit-btn');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    // Prevent multiple submissions
    if (submitButton.disabled) {
        return;
    }

    // Disable button immediately
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const submissionTime = new Date().toLocaleString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    const params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        time: submissionTime
    };

    const serviceID = 'service_zy15pvt';
    const templateID = 'template_2fox0k2';

    try {
        const response = await emailjs.send(
            serviceID,
            templateID,
            params
        );

        console.log('SUCCESS!', response.status, response.text);

        alert('Message sent successfully!');

        form.reset();

    } catch (error) {
        console.log('FAILED...', error);

        alert('Failed to send message. Please try again.');

    } finally {
        // Enable button again after request finishes
        submitButton.disabled = false;
        submitButton.textContent = 'Send ↟';
    }
});

const toggle = document.querySelector('.theme-toggle');

toggle.addEventListener ('click',() => {
  document.documentElement.classList.toggle('dark');
})

