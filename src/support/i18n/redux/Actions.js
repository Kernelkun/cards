import * as types from './Constants'

export function setI18nToReload (lang) {
  return { type: types.SET_I18N_MUST_UPDATE, lang }
}
