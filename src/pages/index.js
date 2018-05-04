import React from 'react'
import Link from 'gatsby-link'
import nebulasLogo from '../images/nebulas-logo.svg'
import developerProgram from '../images/developer-program.png'
import { css } from 'glamor'

const listStyle = css({
  textAlign: 'left',
  display: 'inline-block',
  padding: '2em 0',
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
    <Link to="/tutorials/hello-world/">Click here to get started.</Link>

    <hr style={{ margin: '2em 0' }} />

    <a href="https://medium.com/nebulasio/the-nebulas-incentive-program-starts-now-with-nearly-3-million-in-rewards-e7a1399addc2">
      <div
        style={{
          background: 'linear-gradient(#6464BB, #3333BB)',
          padding: '0.6em',
          borderRadius: '4px',
        }}
      >
        <img src={developerProgram} style={{ height: '140px', margin: 0 }} />
      </div>
    </a>

    <a href="https://medium.com/nebulasio/nebulas-incentive-program-demo-11584736178e">
      Demo Application
    </a>

    <h2 style={{ marginTop: '2em' }}>Quickstart</h2>

    <p style={{ margin: '3em 0' }}>
      Get up and running quickly with these helpful tutorials from the Nebulas
      blog.
    </p>

    <div
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <div>
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
      </div>

      <div>
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
      </div>

      <div>
        <h4>DApp Development</h4>
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
      </div>
    </div>
  </div>
)

export default IndexPage
