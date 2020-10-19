import React from 'react'
import Section from './index'
import SectionItem from './components/SectionItem'

export default {
  component: Section,
  title: 'Design System/components/Section'
}

export const Default = args => (
  <div>
    <Section {...args}>
      <SectionItem>
        <h1>Hello world</h1>
      </SectionItem>
    </Section>
  </div>
)

export const primary = () => (
  <div>
    <Section color="primary">
      <SectionItem>
        <h1>Hello world</h1>
      </SectionItem>
    </Section>
  </div>
)

export const secondary = () => (
  <div>
    <Section color="secondary">
      <SectionItem>
        <h1>Hello world</h1>
      </SectionItem>
    </Section>
  </div>
)
