import React from 'react'
import Link from 'gatsby-link'
import nebulasLogo from '../images/nebulas-logo.svg'

const IndexPage = () => (
  <div
    style={{
      textAlign: 'center',
    }}
  >
    <img
      src={nebulasLogo}
      alt="Nebulas logo."
      style={{
        width: '14em',
      }}
    />
    <h1>Welcome to Nebulearn</h1>
    <p>
      Nebulearn is a collection of educational resources for those wanting to
      get started developing on the Nebulas blockchain.
    </p>
    <Link to="/installation/">Click here to get started.</Link>
  </div>
)

export default IndexPage
