import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Switch, useLocation } from 'react-router-dom'
import AuthRoute from 'components/AuthRoute'
import paths from '../../../common_constans/paths'
import ForgotPassword from 'pages/ForgotPassword'
import Login from 'pages/Login'
import ResetPassword from 'pages/ResetPassword'
import SignUp from 'pages/SignUp'
import SignUpConfirm from 'pages/SignUp/pages/Confirm'
import Error from 'pages/Error/View'
import PrivateRoute from '../../../components/PrivateRoute'

const LoggedOut = ({ loggedIn, token, setLoggedOut }) => {
  const location = useLocation()

  const ErrorRoute = () => {
    let result = <Error from={location} />
    if (!loggedIn) {
      setLoggedOut()
      result = <Redirect to={{ pathname: paths.LOGIN, state: { from: location } }} />
    }
    return result
  }

  return (
    <Switch>
      <AuthRoute path={paths.FORGOT_PASSWORD} token={token}>
        <ForgotPassword />
      </AuthRoute>
      <AuthRoute path={paths.LOGIN} token={token}>
        <Login />
      </AuthRoute>
      <AuthRoute path={paths.RESET_PASSWORD} token={token}>
        <ResetPassword />
      </AuthRoute>
      <AuthRoute path={paths.SIGN_UP} token={token}>
        <SignUp />
      </AuthRoute>
      <AuthRoute path={paths.SIGN_UP_CONFIRM} token={token}>
        <SignUpConfirm />
      </AuthRoute>

      <PrivateRoute path="*">
        <ErrorRoute />
      </PrivateRoute>
    </Switch>
  )
}

LoggedOut.propTypes = {
  loggedIn: PropTypes.bool,
  token: PropTypes.string,
  setLoggedOut: PropTypes.func.isRequired
}

LoggedOut.defaultProps = {
  loggedIn: false
}

export default LoggedOut
