import React, { useState } from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Button from 'components/Button'
import useStyles from './Styles'

const RareBar = ({ className }) => {
  const [selected, setSelected] = useState(0)
  const buttons = [
    { id: 0, text: 'Show All', selected: true },
    { id: 1, text: 'Common', selected: false },
    { id: 2, text: 'Rare', selected: false },
    { id: 3, text: 'Epic', selected: false },
    { id: 4, text: 'Legendary', selected: false }
  ]
  const classes = useStyles()

  return (
    <Grid className={clsx(className)} container item md={6} justify="space-between">
      {buttons.map(button => {
        return (
          <Button
            className={clsx(button.id === selected && classes.selected, classes.base)}
            key={button.id}
            onClick={() => setSelected(button.id)}
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
  className: PropTypes.string
}

RareBar.defaultProps = {
  className: ''
}

export default RareBar
