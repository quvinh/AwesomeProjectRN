// Validate email
export const isValidEmail = (stringEmail) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))

// Validate password
export const isValidPassword = (stringPassword) => stringPassword.length > 3