export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export const validatePassword = (password) => {
  // Password must be at least 8 characters     long and contain at least one number
    const passwordRegex = /^(?=.*[0-5]).{6,}$/;
    return passwordRegex.test(password);
}