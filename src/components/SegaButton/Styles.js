import { makeStyles } from '@material-ui/core/styles'
import slashes from 'img/slashes.png'
import mountains from 'img/mountains2.png'

export default makeStyles(theme => ({
  '@keyframes button_before': {
    '0%': {
      backgroundPosition: '0 0'
    },
    to: {
      backgroundPosition: '100% 0'
    }
  },

  '@keyframes button_after': {
    '0%': {
      bottom: '-3px'
    },
    to: {
      bottom: '5px'
    }
  },
  button: {
    textTransform: 'uppercase',
    color: ({ color }) => theme.palette[color].contrastText,
    border: 'none',
    position: 'relative',
    background: 'none',
    zIndex: 1,
    padding: 0,
    display: 'block',
    maxWidth: '272px',
    height: '55px',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-7px',
      left: '-8px',
      zIndex: '-1',
      width: '60%',
      height: '37px',
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${slashes})`,
      transition: 'all .6s cubic-bezier(.87,0,.13,1)'
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-3px',
      right: '9px',
      zIndex: '3',
      width: '48px',
      height: '9px',
      backgroundRepeat: 'repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${mountains})`,
      transition: 'all .6s cubic-bezier(.87,0,.13,1)'
    }
  },
  span: {
    minWidth: '225px',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: ({ color }) => theme.palette[color].main,
    height: '100%',
    lineHeight: '18px',
    fontSize: '18px',
    fontWeight: '400'
  }
}))
