// Validate email
export const isValidEmail = (stringEmail) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))

// Validate password
export const isValidPassword = (stringPassword) => stringPassword.length > 5

// Validate password confirmation
export const isValidPasswordConfirmation = (pass, retype) => pass === retype