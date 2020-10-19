import React from 'react'
import imageDefault from 'img/default_img_card.webp'
import Card from './index'

export default {
  component: Card,
  title: 'Design System/components/Card'
}

export const Default = args => <Card {...args}>Card</Card>
Default.args = {
  count: 10,
  image: imageDefault,
  level: 'Rare',
  name: 'name',
  selected: true
}
