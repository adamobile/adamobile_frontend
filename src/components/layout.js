import * as React from 'react'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function Layout({ pageTitle, children }) {
  return (
      <main>
        <title>{pageTitle}</title>
            <CssBaseline/>
            <Container align = 'center'>
              <br/>
              <ButtonGroup size='large' color='primary' aria-label='large outlined primary button group'>
                <Button><Link to='/'>Home</Link></Button>
                <Button><Link to='/explore'>Explore</Link></Button>
                <Button><Link to='/about'>FAQ</Link></Button>
              </ButtonGroup>
              <h1>{pageTitle}</h1>
            </Container>
            <br/>
        {children}
    </main>
  )
}
