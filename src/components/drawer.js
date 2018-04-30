import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'

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
              <Header text="Official Docs" />
              <Item text="I. Installation" to="/official-docs/installation" />
              <Item text="II. Transactions" to="/official-docs/transactions" />
              <Item
                text="III. Smart Contracts"
                to="/official-docs/smart-contracts"
              />
              <Item text="IV. Storage" to="/official-docs/storage" />
              <Item text="V. RPC API" to="/official-docs/rpc" />
              <Item text="VI. Testnet" to="/official-docs/testnet-tutorial" />
              <Item text="Config" to="/official-docs/config" />
              <Item text="Explorer" to="/official-docs/explorer" />
              <Item text="Gas" to="/official-docs/gas" />
              <Item text="go-nebulas" to="/official-docs/go-nebulas" />
              <Item text="Mainnet" to="/official-docs/mainnet" />
              <Item text="Neb.js" to="/official-docs/neb-js" />
              <Item text="Testnet" to="/official-docs/testnet" />
              <Item text="Web Wallet" to="/official-docs/wallet" />

              <Header text="Examples" />
              <Item
                text="Bank Vault Smart Contract"
                to="/examples/vault-contract"
              />
              <Item
                text="Chat Room Smart Contract"
                to="/examples/chat-contract"
              />
              <Item
                text="Dictionary Smart Contract"
                to="/examples/dictionary-contract"
              />
              <Item
                text="Rectangle Smart Contract"
                to="/examples/rectangle-contract"
              />
              <Item
                text="Sample Smart Contract"
                to="/examples/sample-contract"
              />

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
