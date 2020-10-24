import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from 'components/Card'
import { Section, SectionItem } from 'components/Section'
import CollectionIcon from 'img/collection_icon_001.png'
import SearchBlock from './components/SearchBlock'
import useStyles from './Styles'
import GradientHeader from '../../components/GradientHeader'

const Collection = ({ cards, collectionName, getCards }) => {
  const classes = useStyles()

  useEffect(() => {
    getCards()
  }, [getCards])

  return (
    <>
      <GradientHeader>
        <Typography component="h1" variant="h3">
          Collection
        </Typography>
      </GradientHeader>
      <Section sega>
        <SectionItem>
          <div className={classes.container}>
            <SearchBlock avatar={CollectionIcon} collectionName={collectionName} />
            <Grid className={classes.cardContainer} justify="center" container spacing={1}>
              {cards.map(card => (
                <Grid item container justify="center" key={card.id} md={3} sm={4} xs={12}>
                  <Card image={card.image} name={card.name} count={card.count.total} />
                </Grid>
              ))}
            </Grid>
          </div>
        </SectionItem>
      </Section>
    </>
  )
}

Collection.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      count: PropTypes.shape({ total: PropTypes.number })
    })
  ),
  collectionName: PropTypes.string.isRequired,
  getCards: PropTypes.func.isRequired
}

Collection.defaultProps = {
  cards: []
}

export default Collection
