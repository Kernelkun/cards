import React from 'react'
import { Section, SectionItem } from 'components/Section'
import { Button } from '@material-ui/core'

const Dashboard = () => (
  <Section>
    <SectionItem>
      <Button color="primary">Button</Button>
    </SectionItem>
  </Section>
)

Dashboard.propTypes = {}

Dashboard.defaultProps = {}

export default Dashboard
