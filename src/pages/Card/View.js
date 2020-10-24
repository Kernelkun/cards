import React, { useEffect, useState } from 'react'
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

const Card = ({ card: { id, name, image }, getCardsById, updateCardById }) => {
  const [form, setForm] = useState({ name, url: image })
  const { cardId } = useParams()
  const classes = useStyles()

  useEffect(() => {
    getCardsById(cardId)
  }, [getCardsById, cardId])

  useEffect(() => {
    setForm({ name, url: image })
  }, [name, image])

  const handleChangeName = event => setForm({ ...form, name: event.target.value })
  const handleChangeURL = event => setForm({ ...form, url: event.target.value })

  const handleSubmit = event => {
    event.preventDefault()
    updateCardById({ id, data: { name: form.name, url: form.url } })
  }

  return (
    <>
      <GradientHeader>
        <Grid container style={{ paddingTop: '3em' }}>
          <Grid container item md={12} justify="center">
            <Typography component="h1" variant="h3">
              {i18n.t('PAGES.HOME.CARD.EDIT_CARD')}
            </Typography>
          </Grid>
        </Grid>
      </GradientHeader>
      <Section sega style={{ minHeight: '40em' }}>
        <SectionItem>
          <form className={classes.container} onSubmit={handleSubmit}>
            <Grid
              alignItems="center"
              item
              container
              direction="column"
              justify="center"
              style={{ height: '100%' }}
            >
              <Grid container justify="center" alignItems="center" item md>
                <Image src={image} />
              </Grid>
              <Grid container alignItems="center" justify="center" item md>
                <TextField
                  className={classes.textField}
                  color="secondary"
                  fullWidth
                  id="name-input"
                  InputLabelProps={{ shrink: true }}
                  label={i18n.t('FORM.CARD_NAME')}
                  onChange={handleChangeName}
                  required
                  value={form.name || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid container alignItems="center" justify="center" item md>
                <TextField
                  className={classes.textField}
                  color="secondary"
                  fullWidth
                  id="image-url-input"
                  InputLabelProps={{ shrink: true }}
                  label={i18n.t('FORM.IMAGE_URL')}
                  onChange={handleChangeURL}
                  required
                  value={form.url || ''}
                  variant="outlined"
                />
              </Grid>
              <Grid container alignItems="center" justify="center" item md>
                <SegaButton type="submit" color="secondary">
                  {i18n.t('COMMON.SUBMIT')}
                </SegaButton>
              </Grid>
            </Grid>
          </form>
        </SectionItem>
      </Section>
    </>
  )
}

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    count: PropTypes.shape({ total: PropTypes.number })
  }),
  getCardsById: PropTypes.func.isRequired,
  updateCardById: PropTypes.func.isRequired
}

Card.defaultProps = {
  card: {}
}

export default Card
