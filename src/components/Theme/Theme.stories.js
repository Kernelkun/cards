import React from 'react'
import TextComponent from '../Text'
import ThemeProvider from './index'
import theme from './theme'

export default {
  component: ThemeProvider,
  title: 'Design System/@igz/components/ThemeProvider'
}

const textInfo = []
const propertiesInfo = []
const paletteInfo = []

const extractInfoFromTheme = () => {
  let key
  const { typography, palette } = theme
  for (key in typography) {
    let value = typography[key]
    const target = typeof value === 'object' ? textInfo : propertiesInfo
    if (typeof value === 'function') value = value.toString()
    target.push({ key, value })
  }
  let group
  let idx = 0
  for (group in palette) {
    const values = palette[group]
    if (typeof values === 'object') {
      for (key in values) {
        const value = values[key]
        if (typeof value === 'string') {
          paletteInfo.push({
            idx: ++idx,
            key: `theme.palette.${group}.${key}`,
            value
          })
        }
      }
    }
  }
  paletteInfo.sort((a, b) => (a.key > b.key ? 1 : -1))
}

const copyToClipboard = str => {
  const d = document
  const el = d.createElement('textarea')
  el.value = str
  d.body.appendChild(el)
  el.select()
  d.execCommand('copy')
  d.body.removeChild(el)
}

const textProperties = value => {
  const properties = []
  let property
  for (property in value) properties.push(`${property}: ${value[property]}`)
  return '{' + properties.join(', ') + '}'
}

extractInfoFromTheme()

export const Text = () => {
  return (
    <div>
      {textInfo.map(({ key, value }) => (
        <div key={key}>
          <TextComponent display="block" variant={key} onClick={() => copyToClipboard(key)}>
            {key}
          </TextComponent>
          <TextComponent display="block" variant="caption">
            {textProperties(value)}
          </TextComponent>
          <hr />
        </div>
      ))}
    </div>
  )
}

export const Properties = () => (
  <div>
    {propertiesInfo.map(({ key, value }) => (
      <div key={key} onClick={() => copyToClipboard(key)}>
        <TextComponent display="block" variant="body2">
          <span>
            {key} = {value}
          </span>
        </TextComponent>
        <hr />
      </div>
    ))}
  </div>
)

export const PaletteColors = () => {
  const rowStyle = {
    display: 'block',
    border: '3px solid',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    margin: 5,
    padding: 0
  }
  const dotStyle = {
    display: 'inline-block',
    cursor: 'pointer',
    width: 60,
    height: 40,
    marginRight: 15
  }
  const textStyle = {
    verticalAlign: 'sub',
    textShadow: '1px 1px 2px #fff'
  }
  let fGroup = null
  return (
    <div>
      {paletteInfo.map(({ idx, key, value }) => {
        const group = key.split('.')[2]
        const style = {
          ...rowStyle,
          borderColor: value,
          background: 'linear-gradient(90deg, transparent 0%, #fff 100%)',
          marginTop: fGroup && group !== fGroup ? 25 : 5
        }
        const row = (
          <div key={idx} style={style}>
            <span style={{ ...dotStyle, background: value }} onClick={() => copyToClipboard(key)}>
              &nbsp;
            </span>
            <TextComponent display="inline" variant="body2" style={textStyle}>
              <span style={{ cursor: 'pointer' }} onClick={() => copyToClipboard(value)}>
                {key} = '{value}'
              </span>
            </TextComponent>
          </div>
        )
        fGroup = group
        return row
      })}
    </div>
  )
}
