import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import SegaButton from 'components/SegaButton'
import i18n from 'support/i18n'
import useStyles from './Styles'

const Advertising = ({ children, title }) => {
  const classes = useStyles()

  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <Grid
          className={classes.row}
          alignItems="flex-start"
          justify="space-around"
          container
          item
          direction="column"
          wrap="wrap"
          sm={5}
        >
          <Typography component="h2" variant="h3">
            {title}
          </Typography>
          <Typography component="p" variant="body1">
            {children}
          </Typography>
          <SegaButton color="secondary">{i18n.t('PAGES.HOME.ADVERTISING.FIND_OUT')}</SegaButton>
        </Grid>
      </div>
      <div className={classes.bg} />
      <div className={classes.illustration} />
    </section>
  )
}

Advertising.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

Advertising.defaultProps = {}

export default Advertising
