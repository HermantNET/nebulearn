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
    }}
  >
    <Header text="Official Docs" />
    <Item text="I. Installation" to="/installation" />
    <Item text="II. Transactions" to="/transactions" />
    <Item text="III. Smart Contracts" to="/smart-contracts" />
    <Item text="IV. Storage" to="/storage" />
    <Item text="V. RPC API" to="/rpc" />
    <Item text="VI. Testnet" to="/testnet" />
    <Header text="Examples" />
    <Item text="Chat Room Smart Contract" to="/examples/chat-contract" />
    <Header text="API Reference" />
  </div>
)

export default Drawer
