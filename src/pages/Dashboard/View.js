import React from 'react'
import { Section, SectionItem } from 'components/Section'

const Dashboard = () => (
  <Section>
    <SectionItem>
      <div>
        <h2>DATOS</h2>
      </div>
      <div>
        <h2>STEAM OFFERS</h2>
      </div>
      <div>
        <h2>PROGRESO</h2>
      </div>
      <div>
        <h2>ANUNCIO</h2>
      </div>
    </SectionItem>
  </Section>
)

Dashboard.propTypes = {}

Dashboard.defaultProps = {}

export default Dashboard
