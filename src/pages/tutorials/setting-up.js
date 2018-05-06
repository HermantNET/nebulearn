import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Code from '../../components/code'

const SettingUp = () => (
  <div>
    <h1>Setup</h1>

    <p>
      In the following series of tutorials we will be building our very own
      DApp, Galaxy Slots. In order to follow along, please make sure you have
      completed all of the following steps:
    </p>
    <ol>
      <li>Install Node.js</li>
      <li>Install Git</li>
      <li>
        <Link to="/official-docs/installation">
          Install and run Nebulas locally
        </Link>{' '}
        OR use the official Nebulas testnet.{' '}
        <blockquote>
          the <Link to="/official-docs/wallet">web-wallet</Link> is the easiest
          way to call and deploy contracts on the testnet.
        </blockquote>
      </li>
      <li>
        Download or <code>git clone</code> the following project repository:{' '}
        <a href="#">Galaxy Slots</a>
        <Code language="bash" code="git clone <git-repo>" />
      </li>
      <li>
        Navigate into the project root and install it's dependencies:
        <Code language="bash" code="cd galaxy-slots && npm install" />
      </li>
    </ol>
    <p>
      We will be developing our app in the{' '}
      <code>galaxy-slots/app/index.js</code> file, and our smart contract in the{' '}
      <code>galaxy-slots/app/smart-contract.js</code> file. Open up your
      favorite editor and take a look around the project! When you're ready,
      move onto the next step:{' '}
      <Link to="/tutorials/smart-contracts">Smart Contracts</Link>.
    </p>
  </div>
)

export default SettingUp
