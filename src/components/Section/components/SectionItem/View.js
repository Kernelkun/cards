import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import clsx from 'clsx'
import capitalize from '@material-ui/core/utils/capitalize'
import Container from '@material-ui/core/Container'
import useStyles from './Styles'

const SectionItem = ({ children, className, color, wrap }) => {
  const classes = useStyles({ color, wrap })

  return (
    <Grid
      className={clsx(className, {
        [classes[`color${capitalize(color)}`]]: color !== 'initial'
      })}
      container
    >
      <Grid item xs sm md lg xl />

      <Container
        classes={{ maxWidthLg: classes.maxWidthLg }}
        className={classes.container}
        maxWidth="lg"
      >
        <Grid item xs={12} sm={12} md={12}>
          {children}
        </Grid>
      </Container>

      <Grid item xs sm md lg xl />
    </Grid>
  )
}

SectionItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'error',
    'inherit',
    'initial',
    'background',
    'backgroundPaper',
    'primary',
    'primaryDark',
    'primaryLight',
    'secondary',
    'secondaryDark',
    'secondaryLight'
  ]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse'])
}

SectionItem.defaultProps = {
  className: '',
  color: 'inherit',
  wrap: 'wrap'
}

export default SectionItem
