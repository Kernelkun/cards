import React from 'react'
import PropTypes from 'prop-types'
import { Section, SectionItem } from 'components/Section'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Avatar from '@material-ui/core/Avatar'
import CollectionIcon from 'img/collection_icon_001.png'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useStyles from './Styles'

const Collection = ({ collectionName }) => {
  const classes = useStyles()
  return (
    <Section sega>
      <SectionItem>
        <Grid
          container
          alignItems="center"
          justify="space-between"
          className={classes.searchContainer}
        >
          <Grid container item alignItems="center" sm>
            <Avatar className={classes.avatar} variant="circle" src={CollectionIcon} />
            <Typography variant="h5">{collectionName}</Typography>
          </Grid>
          <Grid container item justify="flex-end" sm>
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
