import React from 'react'
import Grid from '@material-ui/core/Grid'
import Image from 'components/Image'
import { Section } from 'components/Section'
import Video from 'components/Video'
import xbox from 'img/xbox.webm'
import StreamLootsLogo from 'img/streamloots-logo.svg'
import i18n from 'support/i18n'
import Collection from './components/Collection'
import Advertising from './components/Advertising'
import useStyles from './Styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Section>
      <div className={classes.video}>
        <Grid className={classes.videoLogo} container item justify="center" alignItems="center">
          <Image src={StreamLootsLogo} />
        </Grid>
        <Video src={xbox} />
      </div>
      <Section className={classes.container} sega>
        <Collection />
        <Advertising title={i18n.t('PAGES.HOME.ADVERTISING.TITLE')}>
          {i18n.t('PAGES.HOME.ADVERTISING.PARAGRAPH')}
        </Advertising>
      </Section>
    </Section>
  )
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
