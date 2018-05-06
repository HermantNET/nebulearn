import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Arrow from '../images/up-arrow.svg'

const Header = ({ text }) => (
  <h4 style={{ margin: '0.4em', marginTop: '1em' }}>{text}</h4>
)

const Item = ({ text, to }) => (
  <Link
    to={to}
    className={css({
      textDecoration: 'none',
      padding: '0.2em 0.4em',
      display: 'block',
      width: '100%',
      color: 'white',
    })}
    activeStyle={{
      background: 'white',
      color: 'black',
    }}
  >
    {text}
  </Link>
)

class Collapsable extends React.Component {
  state = {
    open: false,
  }

  toggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { text, children } = this.props
    return [
      <div
        onClick={this.toggle}
        style={{
          color: 'white',
          padding: '0.2em 0.4em',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{ display: 'inline-block' }}>{text}</div>
        <svg
          width="8pt"
          height="8pt"
          viewBox="0 0 560 560"
          style={{
            transform: this.state.open && 'rotate(180deg)',
            marginLeft: '0.4em',
          }}
        >
          <g
            transform="translate(0, -0.561)"
            style={{
              fill: 'white',
              fillRule: 'evenodd',
              stroke: 'none',
            }}
          >
            <path d="M0 559.991 C0 558.504 279.994 0 280.458 0.561456 C282.014 2.44528 560.512 560.13 559.999 560.337 C559.665 560.472 496.562 533.384 419.77 500.142 C419.77 500.142 280.15 439.701 280.15 439.701 C280.15 439.701 140.756 500.131 140.756 500.131 C64.0894 533.368 1.05572 560.561 0.681114 560.561 C0.306506 560.561 8e-06 560.304 8e-06 559.991 C8e-06 559.991 0 559.991 0 559.991 Z" />
          </g>
        </svg>
      </div>,
      this.state.open ? (
        <div style={{ marginLeft: '0.4em' }}>{children}</div>
      ) : (
        ''
      ),
    ]
  }
}

const toggleStyle = css({
  width: '20px',
  background: 'black',
  cursor: 'pointer',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
})

const windowCheck = typeof window !== 'undefined'

class Drawer extends React.Component {
  state = {
    open: windowCheck ? window.innerWidth > 800 : true,
    prevPath: windowCheck ? window.location.pathname : '/',
  }

  componentDidUpdate() {
    if (
      window.innerWidth <= 800 &&
      window.location.pathname !== this.state.prevPath
    ) {
      this.setState({
        open: false,
        prevPath: window.location.pathname,
      })
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

  render() {
    if (this.state.open) {
      return (
        <div>
          <div
            className={css({
              width: '320px',
              height: '100px',
              display: 'inline-block',
              '@media (max-width: 800px)': {
                width: 0,
              },
            })}
          />
          <div
            style={{
              top: 0,
              left: 0,
              position: 'fixed',
              height: '100vh',
              overflowY: 'auto',
              display: 'inline-flex',
            }}
          >
            <div
              className={css({
                overflowY: 'auto',
                background: '#2D3142',
                color: '#EF8354',
                width: '300px',
                boxSizing: 'border-box',
                paddingBottom: '2em',
                '::-webkit-scrollbar-track': {
                  '::-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.3)',
                  backgrounColor: '#F5F5F5',
                },

                '::-webkit-scrollbar': {
                  width: '10px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                },

                '::-webkit-scrollbar-thumb': {
                  backgroundColor: 'rgba(255,255,255,0.5)',
                  border: '2px solid #555555',
                },
              })}
            >
              <Header text="Tutorials" />
              <Item text="Hello, World!" to="/tutorials/hello-world" />
              <Item text="Neb.js Quickstart" to="/tutorials/neb" />
              {/* <Item
                text="I. Interacting with Nebulas"
                to="/tutorials/interacting-with-nebulas"
              />
              <Item
                text="Setup"
                to="/tutorials/smart-contracts"
              />
              <Item
                text="II. Contract Fundamentals"
                to="/tutorials/smart-contracts"
              />
              <Item
                text="III. Working with Data"
                to="/tutorials/contract-storage"
              />
              <Item
                text="IV. Deploying your Contract"
                to="/tutorials/contract-deploy"
              />
              <Item
                text="VI. Putting it All Together"
                to="/tutorials/contract-deploy"
              />
              <Item
                text="V. Calling Contract Methods"
                to="/tutorials/contract-call"
              /> */}

              <Header text="Nebulas Wiki" />
              <Item text="I. Installation" to="/official-docs/installation" />
              <Item text="II. Transactions" to="/official-docs/transactions" />
              <Item
                text="III. Smart Contracts"
                to="/official-docs/smart-contracts"
              />
              <Item text="IV. Storage" to="/official-docs/storage" />
              <Item text="V. RPC API" to="/official-docs/rpc" />
              <Item text="Config" to="/official-docs/config" />
              <Item text="Explorer" to="/official-docs/explorer" />
              <Item text="Gas" to="/official-docs/gas" />
              <Item text="go-nebulas" to="/official-docs/go-nebulas" />
              <Item text="Mainnet" to="/official-docs/mainnet" />
              <Item text="Neb.js" to="/official-docs/neb-js" />
              <Item text="Testnet" to="/official-docs/testnet" />
              <Item text="Web Wallet" to="/official-docs/wallet" />

              <Header text="Examples" />
              <Collapsable text="Smart Contracts">
                <Item text="Bank Vault" to="/examples/vault-contract" />
                <Item text="Chat Room" to="/examples/chat-contract" />
                <Item text="Dictionary" to="/examples/dictionary-contract" />
                <Item text="Rectangle" to="/examples/rectangle-contract" />
                <Item text="Sample" to="/examples/sample-contract" />
              </Collapsable>

              <Header text="API Reference" />
              <Item text="Events" to="/api/events" />
              <Collapsable text="Neb.js">
                <Item text="Account" to="/api/neb/account" />
                <Item text="Admin" to="/api/neb/admin" />
                <Item text="API" to="/api/neb/api" />
                <Item text="Neb" to="/api/neb/neb" />
                <Item text="Transaction" to="/api/neb/transaction" />
              </Collapsable>
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
              <Item text="Community" to="/resources/community" />
              <Item text="Contribute to Nebulas" to="/resources/contribute" />
              <Item text="Crash Reporter" to="/resources/crash-reporter" />
              <Item text="Exchanges" to="/resources/exchanges" />
              <Item text="FAQ" to="/resources/faq" />
              <Item text="Logging" to="/resources/logs" />
            </div>
            <div className={toggleStyle} onClick={this.toggleDrawer}>
              {'<'}
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div style={{ width: '20px' }}>
          <div style={{ position: 'fixed', height: '100%' }}>
            <div className={toggleStyle} onClick={this.toggleDrawer}>
              {'>'}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Drawer
