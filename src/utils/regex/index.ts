export const emailValid =
  /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/;
export const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;

export const phoneRegex =
  /(\+\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/;

export const cityRegex = /^[A-Z][a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
export const birthdayRegex = /^\d{2}\.\d{2}\.\d{4}$/;
