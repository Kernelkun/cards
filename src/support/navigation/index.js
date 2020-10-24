import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ScrollToTop from 'components/ScrollToTop'
import PrivateRoute from 'components/PrivateRoute'
import paths from 'constans/paths'
import Card from 'pages/Card'
import Collection from 'pages/Collection'
import Dashboard from 'pages/Dashboard'
import Home from 'pages/Home'
import Error from 'pages/Error'

const Router = () => {
  const baseUrl = '/'

  return (
    <BrowserRouter basename={baseUrl}>
      <ScrollToTop />
      <Switch>
        <PrivateRoute exact path={paths.CARD_ID}>
          <Card />
        </PrivateRoute>
        <PrivateRoute exact path={paths.COLLECTION}>
          <Collection />
        </PrivateRoute>
        <PrivateRoute exact path={paths.DASHBOARD}>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path={paths.HOME}>
          <Home />
        </PrivateRoute>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

Router.propTypes = {}

Router.defaultProps = {}

export default Router
