function showAlert() {
    alert("Welcome to our Medical Shop! We are here to serve you.");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
