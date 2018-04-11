import React from 'react'
import Link from 'gatsby-link'

const Header = ({ text }) => (
  <h4 style={{ margin: '0.4em', marginTop: '1em' }}>{text}</h4>
)

const Item = ({ text, to }) => (
  <Link
    to={to}
    style={{
      textDecoration: 'none',
      padding: '0.2em 0.4em',
      display: 'block',
      width: '100%',
      color: 'white',
    }}
    activeStyle={{
      background: 'white',
      color: 'black',
    }}
  >
    {text}
  </Link>
)

const Drawer = () => (
  <div
    style={{
      overflowY: 'auto',
      background: '#2D3142',
      color: '#EF8354',
      width: '300px',
      paddingBottom: '2em',
    }}
  >
    <Header text="Official Docs" />
    <Item text="I. Installation" to="/official-docs/installation" />
    <Item text="II. Transactions" to="/official-docs/transactions" />
    <Item text="III. Smart Contracts" to="/official-docs/smart-contracts" />
    <Item text="IV. Storage" to="/official-docs/storage" />
    <Item text="V. RPC API" to="/official-docs/rpc" />
    <Item text="VI. Testnet" to="/official-docs/testnet-tutorial" />
    <Item text="Gas" to="/official-docs/gas" />
    <Item text="Mainnet" to="/official-docs/mainnet" />
    <Item text="Testnet" to="/official-docs/testnet" />

    <Header text="Examples" />
    <Item text="Bank Vault Smart Contract" to="/examples/vault-contract" />
    <Item text="Chat Room Smart Contract" to="/examples/chat-contract" />
    <Item text="Rectangle Smart Contract" to="/examples/rectangle-contract" />
    <Item text="Sample Smart Contract" to="/examples/sample-contract" />

    <Header text="API Reference" />
    <Item text="Events" to="/api/events" />
    <Item text="NRC20 Tokens" to="/api/nrc20" />
    <Item text="REPL Console" to="/api/repl-console" />
    <Item text="Remote Procedure Calls (RPC)" to="/api/rpc" />
    <Item text="RPC Admin" to="/api/rpc-admin" />

    <Header text="Designing Nebulas" />
    <Item text="Overview" to="/design/overview" />
    <Item text="Address" to="/design/address" />
    <Item text="Blockchain" to="/design/blockchain" />
    <Item text="Consensus" to="/design/consensus" />
    <Item text="Crypto" to="/design/crypto" />
    <Item text="Merkle Patricia Tree" to="/design/merkle" />
    <Item text="Network Protocol" to="/design/network" />
    <Item text="Nebulas Virtual Machine" to="/design/nvm" />
    <Item text="Smart Contracts" to="/design/smart-contract" />
    <Item text="Transactions" to="/design/transactions" />

    <Header text="Additional Resources" />
    <Item text="Contribute to Nebulas" to="/resources/contribute" />
    <Item text="Crash Reporter" to="/resources/crash-reporter" />
    <Item text="FAQ" to="/resources/faq" />
    <Item text="Logging" to="/resources/logs" />
  </div>
)

export default Drawer
