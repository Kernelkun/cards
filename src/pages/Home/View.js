import React from 'react'
import { Section } from 'components/Section'
import i18n from 'support/i18n'
import Collection from './components/Collection'
import Advertising from './components/Advertising'

const Home = () => (
  <Section sega>
    <h1>VIDEO</h1>
    <h1>OFFERS / NOVEDADES</h1>
    <Collection />
    <Advertising title={i18n.t('PAGES.HOME.ADVERTISING.TITLE')}>
      {i18n.t('PAGES.HOME.ADVERTISING.PARAGRAPH')}
    </Advertising>
  </Section>
)

Home.propTypes = {}

Home.defaultProps = {}

export default Home
