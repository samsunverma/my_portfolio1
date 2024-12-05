const toggleButtons = document.querySelectorAll('.toggle-details');

toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const details = this.nextElementSibling;

        if (details.style.display === 'none' || !details.style.display) {
            details.style.display = 'block';
            this.textContent = 'Hide Details';
        } else {
            details.style.display = 'none';
            this.textContent = 'Show Details';
        }
    });
});

const contactForm = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', function (event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        feedback.style.display = 'block';
        event.preventDefault(); // Prevent form submission
    } else {
        feedback.style.display = 'none';
        alert('Form submitted successfully!');
    }
});

navigator.geolocation.getCurrentPosition(
  function (position) {
      const { latitude, longitude } = position.coords;
      alert(`Your current location is: Latitude ${latitude}, Longitude ${longitude}`);
  },
  function () {
      alert('Location access denied.');
  }
);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme); // Save user preference
});

// Load saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

projects.forEach(project => observer.observe(project));
