import * as React from 'react'
import { Link } from 'gatsby'

export default function Layout({ pageTitle, children }) {
  return (
      <main>
        <title>{pageTitle}</title>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/explore">Explore</Link></li>
          </ul>
        </nav>
        <h1>{pageTitle}</h1>
        {children}
    </main>
  )
}
