function toggleModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = modal.style.display === "block" ? "none" : "block";
}

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login functionality would be implemented here.");
    toggleModal('loginModal');
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const password = this.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    if (!document.getElementById('agreeTerms').checked) {
        alert("Please agree to the Terms and Conditions and Privacy Policy.");
        return;
    }
    alert("Signup functionality would be implemented here.");
    toggleModal('signupModal');
});

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for your message. We'll get back to you soon!");
    this.reset();
});