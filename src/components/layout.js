import * as React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme/theme'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    background:theme.palette.background.default,
  },
}))

const Layout = ({ pageTitle, children }) => {
  const classes = useStyles()
  return (
      <main>
        <title>{pageTitle}</title>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
            <Box className={classes.root}>
            <Container align ='right' >
              <br/>
              <ButtonGroup size='large' aria-label='large outlined primary button group'>
                <Button><Link to='/'>Home</Link></Button>
                <Button><Link to='/explore'>Explore</Link></Button>
                <Button><Link to='/about'>FAQ</Link></Button>
              </ButtonGroup>
            </Container>
            <Container align ='center' >
              <Typography className={classes.title}>{pageTitle}</Typography>
            </Container>
            <br/>
        {children}
        </Box>
        </ThemeProvider>
    </main>
  )
}

export default Layout
