import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import CollectionIcon from 'img/collection_icon_001.png'
import useStyles from './Styles'

const SearchBlock = ({ collectionName }) => {
  const classes = useStyles()

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
        <Paper component="form" className={classes.search}>
          <InputBase
            className={classes.input}
            color="secondary"
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
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
  collectionName: PropTypes.string.isRequired
}

SearchBlock.defaultProps = {}

export default SearchBlock
