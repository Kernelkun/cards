import React from 'react'
import { Theme as ThemeProvider } from 'components/Theme'

const withThemeProvider = Story => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}
export const decorators = [withThemeProvider]
