import React from 'react'
import { Grid } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'
import Typography from '@material-ui/core/Typography'
import useStyles from './Styles'

const Footer = () => {
  const classes = useStyles()

  return (
    <footer>
      <Grid>
        <Grid className={classes.container} container>
          <Grid className={classes.footerLogo} container item>
            <img
              alt="Streamloots"
              src="https://static.streamloots.com/99d63dc9-60b1-4376-aea9-08592f04781d/brand/streamloots-logo-halloween.svg"
            />
          </Grid>
          <Grid container>
            <Grid sm item>
              <ul>
                <li className={classes.footerLinksBlog}>
                  <a
                    href="https://blog.streamloots.com/es/?utm_source=streamloots&amp;utm_medium=footer&amp;utm_campaign=footer_blog_es"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Ten éxito con Streamloots
                  </a>
                </li>
                <li>
                  <a
                    href="https://help.streamloots.com/es/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Centro de ayuda
                  </a>
                </li>
                <li>
                  <a href="/streamloots-brand">Press kit</a>
                </li>
                <li>
                  <a href="/terms-and-conditions">Términos y Condiciones</a>
                </li>
              </ul>
            </Grid>
            <Grid sm item>
              <ul>
                <li>
                  <a href="/cookies">Política de Cookies</a>
                </li>
                <li>
                  <a href="/privacy">Política de Privacidad</a>
                </li>
                <li>
                  <a
                    href="https://streamloots.recruitee.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Trabaja con nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/show/36aU9mDL7OSxTgz1dVh6q0"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Podcast
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid sm item>
              <ul>
                <li>
                  <a
                    href="https://twitter.com/streamlootses"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Grid container item alignItems="center">
                      <TwitterIcon />
                      Twitter
                    </Grid>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCm2uuAblORrQHhIWQVkt9SA"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Grid container item alignItems="center">
                      <YouTubeIcon />
                      YouTube
                    </Grid>
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Typography>
            © 2020 Streamloots. All Rights Reserved. Contáctanos en hi@streamloots.com.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  )
}

Footer.propTypes = {}

Footer.defaultProps = {}

export default Footer
