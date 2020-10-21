import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import clsx from 'clsx'
import Image from 'components/Image'
import SegaButton from 'components/SegaButton'
import dots from 'img/dots.svg'
import ball from 'img/ball.svg'
import i18n from 'support/i18n'
import OfferSlider from './components/OfferSlider'
import useStyles from './Styles'

const Offers = ({ className }) => {
  const classes = useStyles()

  return (
    <section className={clsx(className, classes.container)}>
      <div className={classes.bg} />
      <div className={classes.dots}>
        <Image src={dots} />
      </div>
      <div className={classes.ball}>
        <Image src={ball} />
      </div>
      <div className={classes.text}>
        <Typography variant="h2">{i18n.t('PAGES.HOME.OFFERS.NEWS')}</Typography>
        <SegaButton color="secondary">{i18n.t('COMMON.SEE_ALL')}</SegaButton>
      </div>

      <OfferSlider />
    </section>
  )
}

Offers.propTypes = {
  className: PropTypes.node
}

Offers.defaultProps = {
  className: ''
}

export default Offers
