import React from 'react'
import Section from './index'
import SectionItem from './components/SectionItem'
import Dummy from '../Dummy'

export default {
  component: Section,
  title: 'Design System/frontend/components/Section'
}

export const Default = args => (
  <div>
    <Section {...args}>
      <SectionItem>
        <Dummy>Header</Dummy>
      </SectionItem>
    </Section>
  </div>
)

export const primary = () => (
  <div>
    <Section color='primary'>
      <SectionItem>
        <Dummy>Header</Dummy>
      </SectionItem>
    </Section>
  </div>
)

export const secondary = () => (
  <div>
    <Section color='secondary'>
      <SectionItem>
        <Dummy>Header</Dummy>
      </SectionItem>
    </Section>
  </div>
)
