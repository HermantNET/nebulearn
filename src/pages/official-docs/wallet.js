import React from 'react'
import Link from 'gatsby-link'
import GithubFetcher from '../../components/githubFetcher'

const Gas = () => (
  <div>
    <h1>Web Wallet</h1>
    <p>
      The official Nebulas wallet for the web. Nebulas users can use it to send
      transactions and submit smart contracts.{' '}
      <Link to="/official-docs/neb-js">Neb.js</Link> is used to allow the wallet
      to interface with Nebulas blockchain.
    </p>
    <h2>Features</h2>
    <ul>
      <li>Generate a Nebulas address/keystore.</li>
      <li>Send a transaction.</li>
      <li>Send an offline transaction.</li>
      <li>View address/keystore info.</li>
      <li>View transaction status & info.</li>
      <li>Deploy/call a smart contract.</li>
      <li>Choose Nebulas network (Mainnet, Testnet etc.).</li>
    </ul>

    <h2>Official Guides</h2>
    <ul>
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

    <h2>Quickstart</h2>
    <h4>Prerequisites</h4>
    <p>
      If you already have git and node.js installed, move on to the first step.
    </p>
    <ul>
      <li>
        <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">
          Install git
        </a>
      </li>
      <li>
        <a href="https://nodejs.org/en/download/">Install node.js</a>
      </li>
    </ul>
    <ol>
      <li>
        Clone the{' '}
        <a href="https://github.com/nebulasio/web-wallet">web-wallet</a> git
        repository from GitHub:
        <pre>
          <code>git clone https://github.com/nebulasio/web-wallet.git</code>
        </pre>
      </li>
      <li>
        Navigate into the directory and run the application:
        <pre>
          <code>cd web-wallet/ && node server.js</code>
        </pre>
      </li>
      <li>
        Open{' '}
        <a target="_blank" href="http://localhost:8080">
          http://localhost:8080
        </a>{' '}
        in your browser.
      </li>
    </ol>
    <hr />
    <h2>Testing a Smart Contract</h2>
    <ol>
      <li>
        Navigate to the <strong>Deploy</strong> tab on the{' '}
        <strong>Contract</strong> page of the web wallet.
      </li>
      <li>
        Paste your in the <strong>code</strong> text box. Nebulas supports both
        JavaScript and Typescript.
      </li>
      <li>
        If you contracts init function has any arguments, input them into the{' '}
        <strong>arguments</strong> text box. Input must be formatted as an
        array, ie. <code>["arg1", "arg2"]</code>
      </li>
      <li>Select your wallet file and unlock your address.</li>
      <li>Update the gasPrice and gasLimit if needed.</li>
      <li>
        Click the <strong>Test</strong> button to run your contract as a
        simulation. Clickling <strong>Submit</strong> will deploy your contract
        to the blockchain.
      </li>
    </ol>
  </div>
)

export default Gas
