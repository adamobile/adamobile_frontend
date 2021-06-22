import * as React from 'react'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  Box,
  Typography,
  Container,
  Link,
  ButtonGroup,
  Button
} from '@material-ui/core'
import '../theme/typography.css'
import theme from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: theme.typography.pxToRem(28),
    fontWeight: 800,
  }
}))

const Layout = ({ pageTitle, children }) => {
  const classes = useStyles()
  return (
      <main>
        <title>{pageTitle}</title>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
            <Box>
            <Container align ='right' >
              <br/>
              <ButtonGroup color='primary' size='large' aria-label='large outlined primary button group'>
                <Button><Link href='/'>Home</Link></Button>
                <Button><Link href='/buy'>Buy</Link></Button>
                <Button><Link href='/explore'>Explore</Link></Button>
                <Button><Link href='/about'>FAQ</Link></Button>
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
