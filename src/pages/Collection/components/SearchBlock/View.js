import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CollectionIcon from 'img/collection_icon_001.png'
import i18n from 'support/i18n'
import useStyles from './Styles'

const SearchBlock = ({ collectionName, setSearch }) => {
  const [searchField, setSearchField] = useState('')
  const classes = useStyles()

  const handleSearch = event => {
    setSearchField(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSearch(searchField)
  }

  return (
    <Grid container alignItems="center" justify="space-between" className={classes.containe}>
      <Grid container item alignItems="center" md={6} sm={6} xs={12}>
        <Avatar className={classes.avatar} variant="circle" src={CollectionIcon} />
        <Typography variant="h5">{collectionName}</Typography>
      </Grid>
      <Grid
        className={classes.searchContainer}
        container
        item
        justify="flex-end"
        md={6}
        sm={6}
        xs={12}
      >
        <Paper component="form" className={classes.search} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            color="secondary"
            id="search-input"
            label={i18n.t('FORM.SEARCH')}
            onChange={handleSearch}
            inputProps={{ 'aria-label': 'search', shrink: true }}
            value={searchField || ''}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
    </Grid>
  )
}

SearchBlock.propTypes = {
  collectionName: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired
}

SearchBlock.defaultProps = {}

export default SearchBlock
