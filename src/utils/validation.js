export const isInteger = str => str.length > 0 && Number.isInteger(Number(str))

export const isValidMonth = month => month >= 1 || month <= 12

export const isValidYear = year => new Date(year).getFullYear() >= new Date().getFullYear()

export const validateEmail = email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
