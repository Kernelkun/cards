import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Image from 'components/Image'
import dots from 'img/dots.svg'
import diamond from 'img/diamond.svg'
import mountains from 'img/mountains2.png'
import useStyles from './Styles'

const GradientHeader = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Hidden xsDown>
        <div className={classes.diamond}>
          <Image src={diamond} />
        </div>
        <div className={classes.dots}>
          <Image src={dots} />
        </div>
      </Hidden>
      <div className={classes.mountains}>
        <Image src={mountains} />
      </div>
      <Grid className={classes.wrapper} container justify="center" alignItems="center">
        {children}
      </Grid>
    </div>
  )
}

GradientHeader.propTypes = {
  children: PropTypes.node
}

GradientHeader.defaultProps = {
  children: null
}

export default GradientHeader
