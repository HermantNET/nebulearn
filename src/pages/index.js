import React from 'react'
import Link from 'gatsby-link'
import nebulasLogo from '../images/nebulas-logo.svg'
import { css } from 'glamor'

const IndexPage = () => (
  <div
    className={css({
      textAlign: 'center',
    })}
  >
    <img
      src={nebulasLogo}
      alt="Nebulas logo."
      className={css({
        width: '10em',
      })}
    />
    <h1>Welcome to Nebulearn</h1>
    <p>
      Nebulearn is a collection of educational resources for those wanting to
      get started developing on the Nebulas blockchain.
    </p>
    <Link to="/official-docs/installation/">Click here to get started.</Link>
    <hr style={{ margin: '2em 0' }} />
    <h2>Quickstart</h2>
    <p>
      Get up and running quickly with these helpful tutorials from the Nebulas
      blog.
    </p>
    <ul
      style={{ textAlign: 'left', margin: '0 auto', display: 'inline-block' }}
    >
      <li>
        <a href="https://medium.com/nebulasio/creating-a-nas-wallet-9d01b5fa2df6">
          Creating a NAS wallet
        </a>
      </li>
      <li>
        <a href="https://medium.com/nebulasio/sending-nas-from-your-wallet-be1b958c4e5d">
          Sending NAS from your wallet
        </a>
      </li>
      <li>
        <a href="https://medium.com/nebulasio/dive-into-nebulas-1-introduction-3ec8bc73571c">
          Dive into Nebulas 1 — An Introduction
        </a>
      </li>
      <li>
        <a href="https://medium.com/nebulasio/dive-into-nebulas-2-quick-start-105da9df80e1">
          Dive into Nebulas 2  —  A Quick Start
        </a>
      </li>
    </ul>
  </div>
)

export default IndexPage
