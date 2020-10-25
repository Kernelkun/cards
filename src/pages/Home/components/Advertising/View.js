import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import useTheme from '@material-ui/core/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SegaButton from 'components/SegaButton'
import i18n from 'support/i18n'
import useStyles from './Styles'

const Advertising = ({ children, title }) => {
  const classes = useStyles()

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <section className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.bg} />
        <div className={classes.illustration} />
        <Grid
          className={classes.row}
          alignItems="flex-start"
          justify="space-around"
          container
          item
          direction="column"
          wrap="wrap"
          sm={5}
          xs={12}
        >
          <Typography component="h2" variant={matches ? 'h5' : 'h3'}>
            {title}
          </Typography>
          <Typography component="p" variant="body2">
            {children}
          </Typography>
          <SegaButton color="secondary">{i18n.t('PAGES.HOME.ADVERTISING.FIND_OUT')}</SegaButton>
        </Grid>
      </div>
    </section>
  )
}

Advertising.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

Advertising.defaultProps = {}

export default Advertising
