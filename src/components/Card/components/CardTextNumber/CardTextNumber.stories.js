import React from 'react'
import CardTextNumber from './index'

export default {
  component: CardTextNumber,
  title: 'Design System/components/CardTextNumber'
}

// eslint-disable-next-line react/prop-types
export const Default = args => <CardTextNumber {...args}>{args.children}</CardTextNumber>
Default.args = {
  children: 10
}
