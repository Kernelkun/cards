import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Button from 'components/Button'
import useStyles from './Styles'

const RareBar = ({ className, setFilter }) => {
  const [selected, setSelected] = useState(0)
  const buttons = [
    { id: 0, text: 'Show All', value: '', selected: true },
    { id: 1, text: 'Common', value: 'COMMON', selected: false },
    { id: 2, text: 'Rare', value: 'RARE', selected: false },
    { id: 3, text: 'Epic', value: 'EPIC', selected: false },
    { id: 4, text: 'Legendary', value: 'LEGENDARY', selected: false }
  ]
  const classes = useStyles()

  const handleSelected = id => {
    buttons.forEach(button => button.id === id && setFilter(button.value))
    setSelected(id)
  }

  return (
    <Grid className={clsx(className)} container item md={6} justify="space-between">
      {buttons.map(button => {
        return (
          <Button
            className={clsx(button.id === selected && classes.selected, classes.base)}
            key={button.id}
            onClick={() => handleSelected(button.id)}
            sharp
            variant="outlined"
          >
            {button.text}
          </Button>
        )
      })}
    </Grid>
  )
}

RareBar.propTypes = {
  className: PropTypes.string,
  setFilter: PropTypes.func.isRequired
}

RareBar.defaultProps = {
  className: ''
}

export default RareBar
