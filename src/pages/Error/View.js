import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/Section'
import SectionItem from 'components/Section/components/SectionItem'
import useStyles from './Styles'

const Error = () => {
  const classes = useStyles()

  return (
    <Section>
      <SectionItem>Error</SectionItem>
    </Section>
  )
}

Error.propTypes = {}

Error.defaultProps = {}

export default Error
