import * as React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles';

export default function Layout({ pageTitle, children }) {

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.default,
    },
    title: {
      fontSize: 30
    },

  }))
  const classes = useStyles()

  return (
      <main>
        <title>{pageTitle}</title>
            <Box className={classes.root}>
            <CssBaseline/>
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
    </main>
  )
}
