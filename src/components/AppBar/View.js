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
import CloseIcon from '@material-ui/icons/Close'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import paths from 'constans/paths'
import Image from 'components/Image'
import StreamLootsLogo from 'img/streamloots-logo.svg'
import useStyles from './Styles'

const AppBar = () => {
  const [out, setOut] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(true)
  const preventDefault = event => event.preventDefault()
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 })
  const classes = useStyles({ trigger })

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const toggleDrawer = () => setOpenDrawer(!openDrawer)

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
              aria-label="menu"
              className={classes.menuButton}
              color="inherit"
              edge="start"
              onClick={toggleDrawer}
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
        <Drawer
          anchor="left"
          classes={{
            paper: classes.drawerPaper
          }}
          open={openDrawer}
          onClose={toggleDrawer}
        >
          <div className={classes.drawerMenu} role="presentation" onKeyDown={toggleDrawer}>
            <List>
              <Grid className={classes.drawerHeader} container alignItems="flex-start">
                <Grid item xs />
                <Grid container justify="center" item xs>
                  <Image src={StreamLootsLogo} />
                </Grid>
                <Grid container justify="flex-end" item xs>
                  <IconButton onClick={toggleDrawer}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>

              <ListItem button component={Link} key="Home" onClick={toggleDrawer} to={paths.HOME}>
                <ListItemText primary="Home" />
              </ListItem>

              <ListItem
                button
                component={Link}
                key="Collection"
                onClick={toggleDrawer}
                to={paths.COLLECTION}
              >
                <ListItemText primary="Collection" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </NavBar>
    </div>
  )
}

AppBar.propTypes = {}

AppBar.defaultProps = {}

export default AppBar
