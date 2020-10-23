import React from 'react'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NavBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Image from 'components/Image'
import StreamLootsLogo from 'img/streamloots-logo.svg'
import useStyles from './Styles'

const AppBar = () => {
  const preventDefault = event => event.preventDefault()
  const trigger = useScrollTrigger({ disableHysteresis: true })
  const classes = useStyles({ trigger })

  return (
    <div className={classes.container}>
      <Image className={classes.logo} src={StreamLootsLogo} />
      <NavBar classes={{ positionFixed: classes.navBar }} position="fixed">
        <Toolbar style={{ height: '100%', padding: 0 }}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Grid
            className={classes.menu}
            container
            direction="row"
            alignItems="center"
            justify="center"
          >
            <Grid
              className={classes.buttonsContainer}
              container
              item
              justify="flex-start"
              alignItems="center"
              md
            >
              <Grid container justify="center" item md={2}>
                <div className={classes.clip}>
                  <Button className={classes.button} onClick={preventDefault} variant="text">
                    Home
                  </Button>
                </div>
              </Grid>

              <Divider classes={{ root: classes.divider }} orientation="vertical" flexItem />

              <Grid container justify="center" item md={2}>
                <div className={classes.clip}>
                  <Button className={classes.button} onClick={preventDefault} variant="text">
                    Collection
                  </Button>
                </div>
              </Grid>

              <Divider classes={{ root: classes.divider }} orientation="vertical" flexItem />

              <Grid container justify="center" item md={2}>
                <div className={classes.clip}>
                  <Button className={classes.button} onClick={preventDefault} variant="text">
                    Sega 60th
                  </Button>
                </div>
              </Grid>

              <Divider classes={{ root: classes.divider }} orientation="vertical" flexItem />
            </Grid>
            <Grid
              style={{ height: '100%' }}
              container
              item
              justify="center"
              alignItems="center"
              md={2}
            >
              <div className={classes.clip}>
                <Button
                  className={classes.buttonSignup}
                  color="secondary"
                  variant="contained"
                  onClick={preventDefault}
                >
                  Sign up
                </Button>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </NavBar>
    </div>
  )
}

AppBar.propTypes = {}

AppBar.defaultProps = {}

export default AppBar
