import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import paths from '../../../common_constans/paths'
import {
  Account as CashAdvanceAccount,
  Apply as CashAdvanceApply,
  Card as CashAdvanceCard,
  Details as CashAdvanceDetails,
  Done as CashAdvanceDone,
  Summary as CashAdvanceSummary,
  Tip as CashAdvanceTip
} from 'pages/CashAdvance/pages'
import {
  Category as DiscountsCategory,
  CategorySearch as DiscountsCategorySearch,
  Detail as DiscountsDetail,
  Summary as DiscountsSummary,
  SummarySearch as DiscountsSummarySearch
} from 'pages/Discounts/pages'
import {
  Category as EntertainmentCategory,
  CategorySearch as EntertainmentCategorySearch,
  Detail as EntertainmentDetail,
  Summary as EntertainmentSummary,
  SummarySearch as EntertainmentSummarySearch
} from 'pages/Entertainment/pages'
import {
  Category as FoodCategory,
  CategorySearch as FoodCategorySearch,
  Detail as FoodDetail,
  Summary as FoodSummary,
  SummarySearch as FoodSummarySearch
} from 'pages/Food/pages'
import { Detail as SearchDetail, SummarySearch as SearchSummarySearch } from 'pages/Search/pages'
import TravelSummary from 'pages/Travel/pages/Summary'
import Home from 'pages/Home'
import Profile from 'pages/Profile/pages/Summary'
import CompanyInfo from 'pages/Company/pages/Information'
import CompanyEmployees from 'pages/Company/pages/Employees'
import CompanyAddEmployee from 'pages/Company/pages/AddEmployee'
import Error from 'pages/Error/View'

const LoggedIn = ({ isLogged, getGeolocation, getMe, getSections }) => {
  useEffect(() => {
    getGeolocation()
    getMe()
    getSections()
  }, [getGeolocation, getMe, getSections])

  const location = useLocation()

  const loginRedirect =
    window.localStorage.getItem('redirectUrl') &&
    window.localStorage.getItem('redirectExpiration') > Date.now()
      ? window.localStorage.getItem('redirectUrl')
      : paths.HOME

  return (
    <Switch>
      <PrivateRoute exact path={paths.CASH_ADVANCE.ACCOUNT}>
        <CashAdvanceAccount />
      </PrivateRoute>
      <PrivateRoute exact path={paths.CASH_ADVANCE.APPLY}>
        <CashAdvanceApply />
      </PrivateRoute>
      <PrivateRoute exact path={paths.CASH_ADVANCE.CARD}>
        <CashAdvanceCard />
      </PrivateRoute>
      <PrivateRoute exact path={paths.CASH_ADVANCE.DETAILS}>
        <CashAdvanceDetails />
      </PrivateRoute>
      <PrivateRoute exact path={paths.CASH_ADVANCE.DONE}>
        <CashAdvanceDone />
      </PrivateRoute>
      <PrivateRoute exact path={paths.CASH_ADVANCE.SUMMARY}>
        <CashAdvanceSummary />
      </PrivateRoute>
      <PrivateRoute exact path={paths.CASH_ADVANCE.TIP}>
        <CashAdvanceTip />
      </PrivateRoute>

      <PrivateRoute exact path={paths.COMPANY.INFO}>
        <CompanyInfo />
      </PrivateRoute>
      <PrivateRoute exact path={paths.COMPANY.EMPLOYEES}>
        <CompanyEmployees />
      </PrivateRoute>
      <PrivateRoute exact path={paths.COMPANY.ADD_EMPLOYEE}>
        <CompanyAddEmployee />
      </PrivateRoute>

      <PrivateRoute exact path={paths.DISCOUNTS.CATEGORY}>
        <DiscountsCategory />
      </PrivateRoute>
      <PrivateRoute exact path={paths.DISCOUNTS.CATEGORY_SEARCH}>
        <DiscountsCategorySearch />
      </PrivateRoute>
      <PrivateRoute exact path={paths.DISCOUNTS.DETAILS}>
        <DiscountsDetail />
      </PrivateRoute>
      <PrivateRoute exact path={paths.DISCOUNTS.SUMMARY}>
        <DiscountsSummary />
      </PrivateRoute>
      <PrivateRoute exact path={paths.DISCOUNTS.SUMMARY_SEARCH}>
        <DiscountsSummarySearch />
      </PrivateRoute>

      <PrivateRoute exact path={paths.ENTERTAINMENT.CATEGORY}>
        <EntertainmentCategory />
      </PrivateRoute>
      <PrivateRoute exact path={paths.ENTERTAINMENT.CATEGORY_SEARCH}>
        <EntertainmentCategorySearch />
      </PrivateRoute>
      <PrivateRoute exact path={paths.ENTERTAINMENT.DETAILS}>
        <EntertainmentDetail />
      </PrivateRoute>
      <PrivateRoute exact path={paths.ENTERTAINMENT.SUMMARY}>
        <EntertainmentSummary />
      </PrivateRoute>
      <PrivateRoute exact path={paths.ENTERTAINMENT.SUMMARY_SEARCH}>
        <EntertainmentSummarySearch />
      </PrivateRoute>

      <PrivateRoute exact path={paths.FOOD.CATEGORY}>
        <FoodCategory />
      </PrivateRoute>
      <PrivateRoute exact path={paths.FOOD.CATEGORY_SEARCH}>
        <FoodCategorySearch />
      </PrivateRoute>
      <PrivateRoute exact path={paths.FOOD.DETAILS}>
        <FoodDetail />
      </PrivateRoute>
      <PrivateRoute exact path={paths.FOOD.SUMMARY}>
        <FoodSummary />
      </PrivateRoute>
      <PrivateRoute exact path={paths.FOOD.SUMMARY_SEARCH}>
        <FoodSummarySearch />
      </PrivateRoute>

      <PrivateRoute exact path={paths.HOME}>
        <Home />
      </PrivateRoute>

      <PrivateRoute exact path={paths.PROFILE.SUMMARY}>
        <Profile />
      </PrivateRoute>

      <PrivateRoute exact path={paths.SEARCH.DETAILS}>
        <SearchDetail />
      </PrivateRoute>
      <PrivateRoute exact path={paths.SEARCH.SUMMARY_SEARCH}>
        <SearchSummarySearch />
      </PrivateRoute>

      <PrivateRoute exact path={paths.TRAVEL.SUMMARY}>
        <TravelSummary />
      </PrivateRoute>

      <Route exact path={paths.LOGIN}>
        <Redirect to={{ pathname: loginRedirect }} />
      </Route>

      <PrivateRoute path="*">
        {isLogged ? (
          <Error from={location} />
        ) : (
          <Redirect to={{ pathname: paths.LOGIN, state: { from: location } }} />
        )}
      </PrivateRoute>
    </Switch>
  )
}

LoggedIn.propTypes = {
  isLogged: PropTypes.bool
}

LoggedIn.defaultProps = {
  isLogged: false
}

export default LoggedIn
