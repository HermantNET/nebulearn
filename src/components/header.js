import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#161549',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-between',
        margin: '0 auto',
        padding: '1.15rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className={css({
            color: 'white',
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            '@media (max-width: 450px)': {
              fontSize: '0.6em',
              lineHeight: '1',
            },
          })}
        >
          {siteTitle}
        </Link>
      </h1>
      <div>
        <h4 style={{ margin: 0, marginBottom: '0.6em' }}>
          <a
            href="https://nebulas.io/"
            target="_blank"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            Official Site
          </a>
        </h4>
        <h4 style={{ margin: 0 }}>
          <a
            href="https://github.com/nebulasio"
            target="_blank"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            GitHub
          </a>
        </h4>
      </div>
    </div>
  </div>
)

export default Header
