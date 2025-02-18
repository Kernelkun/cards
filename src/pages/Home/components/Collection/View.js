import React from 'react'
import { useHistory } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import paths from 'constans/paths'
import Image from 'components/Image'
import { SectionItem } from 'components/Section'
import SegaButton from 'components/SegaButton'
import captain from 'img/captain.png'
import dots from 'img/dots.svg'
import plus from 'img/plus.svg'
import i18n from 'support/i18n'
import useStyles from './Styles'

const Collection = () => {
  const classes = useStyles()
  const history = useHistory()
  const handleGoToCollection = () => history.push(paths.COLLECTION)

  return (
    <section className={classes.container}>
      <SectionItem>
        <Hidden xsDown>
          <Grid className={classes.iconsContainer} container item sm={12}>
            <div className={classes.dots}>
              <Image src={dots} />
            </div>
            <div className={classes.plus}>
              <Image src={plus} />
            </div>
          </Grid>
        </Hidden>
        <Grid container justify="center" alignItems="center" item sm={12}>
          <Grid container item direction="column" sm={5}>
            <Typography component="h2" variant="h3">
              {i18n.t('PAGES.HOME.COLLECTION.COLLECTION')}
            </Typography>
            <Typography className={classes.paragraph} component="p" variant="body1">
              {i18n.t('PAGES.HOME.COLLECTION.PARAGRAPH')}
            </Typography>

            <Hidden smDown>
              <SegaButton onClick={handleGoToCollection} color="secondary">
                {i18n.t('PAGES.HOME.COLLECTION.GO_TO_COLLECTION')}
              </SegaButton>
            </Hidden>
          </Grid>
          <Grid className={classes.image} container item justify="flex-end" sm={7}>
            <Image src={captain} alt="captain" />
          </Grid>
          <Hidden smUp>
            <Grid container item justify="center" sm={7} style={{ marginTop: '5em' }}>
              <SegaButton onClick={handleGoToCollection} color="secondary">
                {i18n.t('PAGES.HOME.COLLECTION.GO_TO_COLLECTION')}
              </SegaButton>
            </Grid>
          </Hidden>
        </Grid>
      </SectionItem>
    </section>
  )
}

Collection.propTypes = {}

Collection.defaultProps = {}

export default Collection
