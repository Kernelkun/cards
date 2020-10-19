import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import Image from 'components/Image'
import { Section, SectionItem } from 'components/Section'
import CollectionIcon from 'img/collection_icon_001.png'
import SearchBlock from './components/SearchBlock'

const Collection = ({ cards, collectionName, getCards }) => {
  useEffect(() => {
    getCards()
  }, [getCards])

  return (
    <Section sega>
      <SectionItem>
        <SearchBlock avatar={CollectionIcon} collectionName={collectionName} />
        <div>
          {cards.map(card => (
            <Card key={card.id}>
              <Typography>{card.name}</Typography>
              <Image src={card.image} alt={card.name} />
            </Card>
          ))}
        </div>
      </SectionItem>
    </Section>
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
