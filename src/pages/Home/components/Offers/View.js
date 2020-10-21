import React from 'react'
import { Typography } from '@material-ui/core'
import Image from 'components/Image'
import SegaButton from 'components/SegaButton'
import dots from 'img/dots.svg'
import ball from 'img/ball.svg'
import i18n from 'support/i18n'
import useStyles from './Styles'
import OfferSlider from './components/OfferSlider'

const Offers = () => {
  const classes = useStyles()

  return (
    <section className={classes.container}>
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

Offers.propTypes = {}

Offers.defaultProps = {}

export default Offers
