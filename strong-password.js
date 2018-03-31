/*
A strong password meets the following criteria:

Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+

Return the minimum requirements to fulfill a strong password given n for the length of input and password as the string.
minimumNumber(n, password);

*/


function isALetter(char) {
    if( char.toUpperCase() != char.toLowerCase() )
       return true;
    else
       return false;
}

function minimumNumber(n, password) {
    var lengthNeeded = 0;
    var charsNeeded = 0;
    /* requiredChars is an array of flags: [hasUppercase, hasLowercase, hasNumber, hasSpecialChar]. False means the required chars are missing. */
    var requiredChars = [false, false, false, false];
    
    /* n is password length which needs to be at least 6 chars */
    if (n < 6) {
        lengthNeeded = 6 - n;
    } 
    
    for (var i = 0; i < password.length; i++) {
        /* Is there at least one uppercase letter? */
        if (isALetter(password.charAt(i)) && password.charAt(i) === password.charAt(i).toUpperCase()) {
            requiredChars[0] = true;
        } 
        
        /* Is there at least one lowercase letter? */
        if (isALetter(password.charAt(i)) && password.charAt(i) === password.charAt(i).toLowerCase()) {
            requiredChars[1] = true;
        } 
        
        /* Is there at least one number? */
        if (Number.isInteger(Number.parseInt(password.charAt(i)))) {
            requiredChars[2] = true;
        } 
    
        /* Is there at least one special character? */
        switch (password.charAt(i)) {
            case '!':
            case '@':
            case '#':
            case '$':
            case '%':
            case '^':
            case '&':
            case '*':
            case '(':
            case ')':
            case '-':
            case '+': 
                requiredChars[3] = true;
                break;
            default:
                break;
        } 
    }
    
    /* Count the missing requirements */
    for (var i = 0; i < requiredChars.length; i++) {
        if (requiredChars[i] === false) {
            charsNeeded++;
        }
    }
    
    charsNeeded = Math.max(lengthNeeded,charsNeeded);
    return charsNeeded;
    
    // Return the minimum number of characters to make the password strong
}
