// You need to write regex that will validate a password to make sure it meets the following criteria:
//
// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a digit
// only contains alphanumeric characters (note that '_' is not alphanumeric)


function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    return regex.test(password);
}

// Test cases
console.log(validatePassword("Abc123"));
console.log(validatePassword("abc123"));
console.log(validatePassword("ABC123"));
console.log(validatePassword("Ab123"));
console.log(validatePassword("Abc@123"));