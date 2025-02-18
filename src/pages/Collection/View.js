import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from 'components/Card'
import GradientHeader from 'components/GradientHeader'
import RareBar from 'components/RareBar'
import { Section, SectionItem } from 'components/Section'
import CollectionIcon from 'img/collection_icon_001.png'
import SearchBlock from './components/SearchBlock'
import useStyles from './Styles'
import paths from '../../constans/paths'

const Collection = ({ cards, collectionName, filter, getCards, setFilter, setSearch }) => {
  const classes = useStyles()

  useEffect(() => {
    getCards()
  }, [getCards, filter])

  return (
    <>
      <GradientHeader>
        <Grid container style={{ paddingTop: '3em' }}>
          <Grid container item md={12} justify="center">
            <Typography className={classes.title} component="h1" variant="h3">
              Collection
            </Typography>
          </Grid>

          <Grid container justify="center">
            <Grid item sm xs />
            <Grid container item justify="center" sm={7} xs={12}>
              <RareBar className={classes.rareBar} setFilter={setFilter} />
            </Grid>
            <Grid item sm xs />
          </Grid>
        </Grid>
      </GradientHeader>
      <Section sega>
        <SectionItem>
          <div className={classes.container}>
            <SearchBlock
              avatar={CollectionIcon}
              collectionName={collectionName}
              setSearch={setSearch}
            />
            <Grid className={classes.cardContainer} justify="center" container spacing={1}>
              {cards.map(card => (
                <Grid item container justify="center" key={card.id} md={3} sm={4} xs={12}>
                  <Card cursor="pointer" image={card.image} to={`${paths.CARD}${card.id}`} />
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
  filter: PropTypes.string,
  getCards: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired
}

Collection.defaultProps = {
  cards: [],
  filter: ''
}

export default Collection
