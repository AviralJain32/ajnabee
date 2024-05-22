export function validateName(name) {
    // Name should not be empty and should contain only alphabets and spaces
    const nameRegex = /^[a-zA-Z ]+$/;
    return nameRegex.test(name);
  }

 export function validateEmail(email) {
    // Email should not be empty and should match the email format
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
  }