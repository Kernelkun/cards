import React from 'react'
import { Section } from 'components/Section'
import i18n from 'support/i18n'
import Collection from './components/Collection'
import Advertising from './components/Advertising'
import Offers from './components/Offers'
import useStyles from './Styles'

const Home = () => {
  const classes = useStyles()

  return (
    <Section>
      <div style={{ height: '100vh', minHeight: '700px', background: 'pink' }}>VIDEO</div>
      <Section sega>
        <Offers className={classes.offers} />
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
