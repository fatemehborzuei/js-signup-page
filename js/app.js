const forbiddenWords = ["admin", "root", "fake", "scam", "superuser"];

const signupForm = document.getElementById('signupForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');

const userError = document.getElementById('userError');
const emailError = document.getElementById('emailError');
const successMsg = document.getElementById('successMsg');

signupForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    userError.style.display = 'none';
    emailError.style.display = 'none';
    successMsg.style.display = 'none';

    const username = usernameInput.value.trim().toLowerCase();
    const email = emailInput.value.trim().toLowerCase();

    let isFormValid = true;

    
    
    const containsForbidden = forbiddenWords.some(word => username.indexOf(word) !== -1);

    if (username.length < 3) {
        alert("نام کاربری خیلی کوتاه است.");
        isFormValid = false;
    } else if (containsForbidden) {
        userError.style.display = 'block';
        isFormValid = false;
    }


    if (!email.includes('@') || email.indexOf('.') === -1) {
        emailError.style.display = 'block';
        isFormValid = false;
    }

    
    if (isFormValid) {
        console.log("Sending Data to Server:", { username, email });
        successMsg.style.display = 'block';
        signupForm.reset(); 
    }
});
