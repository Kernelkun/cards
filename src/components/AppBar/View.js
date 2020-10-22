import React from 'react'
import NavBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './Styles'

const AppBar = () => {
  const classes = useStyles()

  return (
    <NavBar classes={{ positionFixed: classes.container }} position="fixed">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </NavBar>
  )
}

AppBar.propTypes = {}

AppBar.defaultProps = {}

export default AppBar
