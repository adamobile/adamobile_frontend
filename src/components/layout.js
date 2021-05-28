import * as React from 'react'
import { Link } from 'gatsby'
import { Global, css } from "@emotion/react"
import styled from "@emotion/styled"

const Wrapper = styled("div")`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
  padding: 10px;
`

const ul = styled("ul")`
  display: flex;
  list-style: none;
  padding-left: 0;
`

const li = styled("li")`
  padding-right: 2rem;
`

const sLink = styled("Link")`
  color: black;
`


export default function Layout({ pageTitle, children }) {
  return (
    <Wrapper>
      <main>
        <title>{pageTitle}</title>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <h1>{pageTitle}</h1>
        {children}
    </main>
    </Wrapper>
  )
}
