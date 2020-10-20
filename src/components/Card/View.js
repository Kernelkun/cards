import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import imageDefault from 'img/default_img_card.webp'
import i18n from 'support/i18n'
import CardTextNumber from './components/CardTextNumber'
import Mountains from './components/Mountains'
import useStyles from './Styles'

const Card = ({ className, count, cursor, image, level, name }) => {
  const classes = useStyles({ cursor, image })

  return (
    <div className={clsx(classes.container, className)}>
      <div className={classes.overlayColor} />
      <div className={classes.overlayInformation}>
        <Grid
          className={classes.overlayContainer}
          container
          direction="column"
          justify="space-between"
        >
          <Grid container item direction="column" justify="flex-start">
            {level && (
              <Typography className={classes.level} variant="h2">
                {level}
              </Typography>
            )}
            <CardTextNumber color="white">{count}</CardTextNumber>
            <Mountains color="white" className={classes.mountains} />
          </Grid>
          <Grid container item justify="center" alignItems="center">
            <Typography align="center" className={classes.name}>
              {name}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  cursor: PropTypes.string,
  image: PropTypes.string,
  level: PropTypes.string,
  name: PropTypes.string
}

Card.defaultProps = {
  className: '',
  count: 0,
  cursor: 'initial',
  image: imageDefault,
  level: null,
  name: i18n.t('PAGES.COLLECTION.CARD.NAME')
}

export default Card
