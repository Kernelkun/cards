import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import GradientHeader from 'components/GradientHeader'
import Image from 'components/Image'
import { Section, SectionItem } from 'components/Section'
import SegaButton from 'components/SegaButton'
import i18n from 'support/i18n'
import useStyles from './Styles'

const Card = ({ card, getCardsById }) => {
  const { cardId } = useParams()
  const { name, image } = card
  const classes = useStyles()

  useEffect(() => {
    getCardsById(cardId)
  }, [getCardsById, cardId])

  return (
    <>
      <GradientHeader>
        <Grid container style={{ paddingTop: '3em' }}>
          <Grid container item md={12} justify="center">
            <Typography component="h1" variant="h3">
              Card
            </Typography>
          </Grid>
        </Grid>
      </GradientHeader>
      <Section sega style={{ minHeight: '40em' }}>
        <SectionItem>
          <Grid
            alignItems="center"
            item
            container
            direction="column"
            justify="center"
            className={classes.container}
          >
            <Grid container justify="center" alignItems="center" item md>
              <Image src={image} />
            </Grid>
            <Grid container alignItems="center" justify="center" item md>
              <TextField
                className={classes.textField}
                autoFocus
                color="secondary"
                fullWidth
                required
                id="name-input"
                InputLabelProps={{ shrink: true }}
                label="Name"
                value={name}
                variant="outlined"
              />
            </Grid>
            <Grid container alignItems="center" justify="center" item md>
              <TextField
                className={classes.textField}
                required
                color="secondary"
                fullWidth
                id="image-url-input"
                InputLabelProps={{ shrink: true }}
                label="Image URL"
                value={image}
                variant="outlined"
              />
            </Grid>
            <Grid container alignItems="center" justify="center" item md>
              <SegaButton type="submit" color="secondary">
                {i18n.t('COMMON.SUBMIT')}
              </SegaButton>
            </Grid>
          </Grid>
        </SectionItem>
      </Section>
    </>
  )
}

Card.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      count: PropTypes.shape({ total: PropTypes.number })
    })
  ),
  getCardsById: PropTypes.func.isRequired
}

Card.defaultProps = {
  card: []
}

export default Card
