import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    backgroundImage: ({ image }) => `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    cursor: ({ cursor }) => cursor,
    height: ({ cardSelected }) => (cardSelected ? theme.spacing(64.375) : 'inherit'),
    minHeight: ({ cardSelected }) => (!cardSelected ? theme.spacing(49.375) : 'unset'),
    position: ({ cardSelected }) => (cardSelected ? 'absolute' : 'relative'),
    width: ({ cardSelected }) => (cardSelected ? '322px' : theme.spacing(30.625)),
    zoom: ({ cardSelected }) => (cardSelected ? 1.1 : 'unset'),
    zIndex: ({ cardSelected }) => (cardSelected ? 10 : 'unset')
  },
  editButton: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  level: {
    fontSize: theme.spacing(3.604)
  },
  mountains: {
    marginLeft: theme.spacing(0.625),
    marginTop: theme.spacing(-3.125),
    marginBottom: theme.spacing(2)
  },
  name: {
    fontSize: theme.spacing(2),
    textTransform: 'uppercase'
  },
  overlayColor: {
    background: ({ over }) =>
      over
        ? theme.palette.common.black
        : 'linear-gradient(201.73deg,#072fdc -4.92%,#0596a1 85.75%)',
    opacity: 0.7,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1
  },
  overlayContainer: {
    height: '100%',
    width: '100%'
  },
  overlayInformation: {
    boxSizing: 'border-box',
    height: '100%',
    padding: '20px 25px',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 3
  }
}))
