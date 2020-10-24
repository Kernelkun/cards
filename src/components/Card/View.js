import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import ButtonBase from '@material-ui/core/ButtonBase'
import EditIcon from '@material-ui/icons/Edit'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core'
import imageDefault from 'img/default_img_card.webp'
import i18n from 'support/i18n'
import CardTextNumber from './components/CardTextNumber'
import Mountains from './components/Mountains'
import useStyles from './Styles'

const Card = ({ className, count, cursor, image, level, name, to }) => {
  const [over, setOver] = useState(false)
  const history = useHistory()
  const classes = useStyles({ cursor, image, over })

  const handleClick = () => {
    if (to) history.push(to)
  }

  return (
    <ButtonBase
      className={clsx(classes.container, className)}
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => setOver(false)}
      onClick={handleClick}
    >
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
            {count && (
              <>
                <CardTextNumber color="white">{count}</CardTextNumber>
                <Mountains color="white" className={classes.mountains} />
              </>
            )}
          </Grid>

          {over && (
            <Grid container direction="column" item justify="center" alignItems="center">
              <Grid item xs>
                <EditIcon fontSize="large" />
              </Grid>
              <Grid item xs>
                <Typography className={classes.editButton} variant="body1">
                  {i18n.t('COMMON.EDIT')}
                </Typography>
              </Grid>
            </Grid>
          )}

          <Grid container item justify="center" alignItems="center">
            {name && (
              <Typography align="center" className={classes.name}>
                {name}
              </Typography>
            )}
          </Grid>
        </Grid>
      </div>
    </ButtonBase>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  cursor: PropTypes.string,
  image: PropTypes.string,
  level: PropTypes.string,
  name: PropTypes.string,
  to: PropTypes.string
}

Card.defaultProps = {
  className: '',
  count: null,
  cursor: 'initial',
  image: imageDefault,
  level: null,
  name: null,
  to: null
}

export default Card
