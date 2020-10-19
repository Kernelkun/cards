import React from 'react'
import Image from './index'

export default {
  component: Image,
  title: 'Design System/components/Image'
}

export const Default = () => (
  <Image
    src="https://images.uncyclomedia.co/inciclopedia/es/thumb/1/13/Frymiradaasesina.jpg/250px-Frymiradaasesina.jpg"
    defaultSrc="https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
  />
)

export const MainImageFail = () => (
  <Image
    src="https://blabla.bla"
    defaultSrc="https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg"
  />
)
