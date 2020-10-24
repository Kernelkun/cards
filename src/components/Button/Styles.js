import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  button: {
    transform: ({ sharp }) => (sharp ? 'skew(-20deg)' : 'unset')
  }
}))
