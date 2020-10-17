import i18n from 'support/i18n'

export const toastError = action => error => {
  const { message } = error.data || { message: i18n.t('ERRORS.DEFAULT') }
  console.error(message)
  action && action(error.data)
}
