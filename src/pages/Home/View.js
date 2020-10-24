import React from 'react'
import { Section } from 'components/Section'
import i18n from 'support/i18n'
import Video from 'components/Video'
import xbox from 'img/xbox.webm'
import Collection from './components/Collection'
import Advertising from './components/Advertising'
import useStyles from './Styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Section>
      <div className={classes.video}>
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
