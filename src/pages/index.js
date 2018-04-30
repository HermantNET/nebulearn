import React from 'react'
import Link from 'gatsby-link'
import nebulasLogo from '../images/nebulas-logo.svg'
import { css } from 'glamor'

const listStyle = css({
  textAlign: 'left',
  margin: '0 auto 1em auto',
  display: 'inline-block',
})

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

    <h4>
      <a href="https://medium.com/nebulasio/the-nebulas-incentive-program-starts-now-with-nearly-3-million-in-rewards-e7a1399addc2">
        Nebulas Incentive Program
      </a>
    </h4>

    <a href="https://medium.com/nebulasio/nebulas-incentive-program-demo-11584736178e">
      Requirements
    </a>

    <h2 style={{ marginTop: '2em' }}>Quickstart</h2>
    <p>
      Get up and running quickly with these helpful tutorials from the Nebulas
      blog.
    </p>

    <h4>Dive into Nebulas</h4>
    <ul className={listStyle}>
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

    <h4>Web Wallet</h4>
    <ul className={listStyle}>
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
        <a href="https://medium.com/nebulasio/view-wallet-information-fcea3ea35d94">
          View wallet information
        </a>
      </li>
      <li>
        <a href="https://medium.com/nebulasio/check-tx-status-8dc7dd9b79de">
          Check transaction status
        </a>
      </li>
      <li>
        <a href="https://medium.com/nebulasio/deploy-a-smart-contract-1e781e13c22e">
          Deploy a smart contract
        </a>
      </li>
      <li>
        <a href="https://medium.com/nebulasio/signing-a-transaction-offline-ae8278f45201">
          Signing an offline transaction
        </a>
      </li>
    </ul>

    <h4>Smart Contracts</h4>
    <ul className={listStyle}>
      <li>
        <a href="https://medium.com/nebulasio/how-to-build-a-dapp-on-nebulas-part-1-da4eaf9399bc">
          How to build a DApp on Nebulas (Part 1)
        </a>
      </li>
      <li>
        <a href="https://medium.com/nebulasio/how-to-build-a-dapp-on-nebulas-part-2-5424789f7417">
          How to build a DApp on Nebulas (Part 2)
        </a>
      </li>
    </ul>

    <hr style={{ margin: '2em 0' }} />

    <h4>
      Contribute to Nebulearn.com on{' '}
      <a href="https://github.com/HermantNET/nebulearn">GitHub</a>
    </h4>

    <footer style={{ color: 'lightgrey', marginTop: '2em' }}>
      Support Nebulearn (NAS): n1HY4ob2kBRacVHoJKGqmwsvhE6BN5pvEy2
      <div style={{ fontSize: '10px' }}>
        All donated funds will go towards hosting and continued development of
        Nebulearn.com
      </div>
      <div style={{ fontSize: '10px' }}>
        Disclaimer: Nebulearn.com is not affiliated with Nebulas.io
      </div>
    </footer>
  </div>
)

export default IndexPage
