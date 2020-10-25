import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NavBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import useTheme from '@material-ui/core/styles/useTheme'
import paths from 'constans/paths'
import Image from 'components/Image'
import StreamLootsLogo from 'img/streamloots-logo.svg'
import useStyles from './Styles'

const AppBar = () => {
  const [out, setOut] = useState(false)
  const preventDefault = event => event.preventDefault()
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 })
  const classes = useStyles({ trigger })

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  useEffect(() => {
    if (trigger && !out) setOut(true)
  }, [out, trigger])

  return (
    <div className={classes.container}>
      <Image
        className={clsx(
          !matches && trigger && 'slide-in-top',
          !matches && !trigger && out && 'slide-out-top',
          classes.logo
        )}
        src={StreamLootsLogo}
      />
      <NavBar classes={{ positionFixed: classes.navBar }} position="fixed">
        <Toolbar className={classes.toolbar}>
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
          <Hidden xsDown>
            <Grid
              className={clsx(
                classes.menu,
                trigger && 'move-right',
                !trigger && out && 'move-left'
              )}
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
                sm
              >
                <Grid container justify="center" item md={2} sm={2}>
                  <div className={classes.clip}>
                    <Button
                      className={classes.button}
                      component={Link}
                      variant="text"
                      to={paths.HOME}
                    >
                      Home
                    </Button>
                  </div>
                </Grid>

                <Divider classes={{ root: classes.divider }} orientation="vertical" flexItem />

                <Grid container justify="center" item md={2} sm={2}>
                  <div className={classes.clip}>
                    <Button
                      className={classes.button}
                      component={Link}
                      variant="text"
                      to={paths.COLLECTION}
                    >
                      Collection
                    </Button>
                  </div>
                </Grid>

                <Divider classes={{ root: classes.divider }} orientation="vertical" flexItem />

                <Grid container justify="center" item md={2} sm={2}>
                  <div className={classes.clip}>
                    <Button
                      className={classes.button}
                      component={Link}
                      variant="text"
                      to={paths.HOME}
                    >
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
                sm={2}
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
          </Hidden>
        </Toolbar>
      </NavBar>
    </div>
  )
}

AppBar.propTypes = {}

AppBar.defaultProps = {}

export default AppBar
