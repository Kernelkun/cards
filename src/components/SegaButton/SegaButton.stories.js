import React from 'react'
import SegaButton from './View'

export default {
  component: SegaButton,
  title: 'Design System/components/SegaButton'
}

export const Primary = args => (
  <SegaButton color="primary" {...args}>
    SegaButton
  </SegaButton>
)
export const Secondary = args => (
  <SegaButton color="secondary" {...args}>
    SegaButton
  </SegaButton>
)
