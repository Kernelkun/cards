import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/Section'
import SectionItem from 'components/Section/components/SectionItem'
import useStyles from './Styles'

const Login = ({}) => {
  const classes = useStyles()

  return (
    <Section>
      <SectionItem>Login</SectionItem>
    </Section>
  )
}

Login.propTypes = {}

Login.defaultProps = {}

export default Login