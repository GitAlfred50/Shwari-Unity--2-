document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const switchToLoginFromForgot = document.getElementById("switchToLoginFromForgot");

    
    function showLoginForm() {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
        forgotPasswordForm.style.display = "none";
    }

    function showSignupForm() {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
        forgotPasswordForm.style.display = "none";
    }

    
    switchToSignup.addEventListener("click", function(e) {
        e.preventDefault();
        showSignupForm();
    });

    switchToLogin.addEventListener("click", function(e) {
        e.preventDefault();
        showLoginForm();
    });

    forgotPasswordLink.addEventListener("click", function(e) {
        e.preventDefault();
        loginForm.style.display = "none";
        forgotPasswordForm.style.display = "block";
    });

    switchToLoginFromForgot.addEventListener("click", function(e) {
        e.preventDefault();
        showLoginForm();
    });

    
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
       
        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

       
        if (username === "example" && password === "password") {
            
            window.location.href = "patientdash.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    
    signupForm.addEventListener("submit", function(e) {
        e.preventDefault();
      
        alert("Signup form submitted");
    });

    
    forgotPasswordForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        alert("Forgot password form submitted");
    });

    
    showLoginForm();
});
