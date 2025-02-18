import React from 'react'
import i18n from 'i18n-js'
import en from './en.json'
import { setI18nToReload } from './redux/Actions'

i18n.defaultLocale = 'en'
i18n.locale = 'en'
i18n.fallbacks = true
i18n.translations = { en }
i18n.currentLocale()
i18n.toCurrencyStrip = amount => i18n.toCurrency(amount, { strip_insignificant_zeros: true })

i18n.tWithComponent = (i18nKey, components) => {
  const object = {}

  Object.entries(components).forEach(([key], index) => {
    object[key] = `#{${index}}#`
  })

  const array = i18n.t(i18nKey, object).split('#')

  const result = array.map(value => {
    let temp = React.createElement('span', null, value)
    Object.entries(components).forEach((x, index) => {
      // eslint-disable-next-line prefer-destructuring
      if (value === `{${index}}`) temp = x[1]
    })
    return temp
  })

  return React.Children.map(result, (child) => {
    return React.cloneElement(child, { key: new Date() })
  })
}

export function setI18nLang (lang, dispatch) {
  i18n.locale = lang
  i18n.currentLocale()
  dispatch(setI18nToReload(lang))
}

export default i18n
