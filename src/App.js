import React from 'react'
import { Provider } from 'react-redux'
import { Theme as ThemeProvider } from 'components/Theme'
import Router from 'support/navigation'
import { store } from 'store'

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  )
}

export default App
