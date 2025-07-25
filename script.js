function toogleNews() {
    const newsletter = document.getElementById("newsletter");
    newsletter.classList.toggle("active");
}

// Show welcome alert on Signup
function handleSignup() {
    const emailInput = document.querySelector("#newsletter input[type='email']");
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter a valid email.");
    } else {
        alert(`Welcome! You've signed up with: ${email}`);
        emailInput.value = ""; // clear input
        toogleNews(); // close popup
    }
}
