import React from 'react'
import PropTypes from 'prop-types'
import { Section, SectionItem } from 'components/Section'
import CollectionIcon from 'img/collection_icon_001.png'
import SearchBlock from './components/SearchBlock'

const Collection = ({ collectionName }) => {
  return (
    <Section sega>
      <SectionItem>
        <SearchBlock avatar={CollectionIcon} collectionName={collectionName} />
        <div>
          <h2>LISTADO</h2>
        </div>
      </SectionItem>
    </Section>
  )
}

Collection.propTypes = {
  collectionName: PropTypes.string.isRequired
}

Collection.defaultProps = {}

export default Collection
