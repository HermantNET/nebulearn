import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'

const Footer = ({ noBack }) => [
  !noBack && (
    <div style={{ padding: '1.22em', textAlign: 'right' }}>
      <hr />
      <Link to="/">Return to the homepage</Link>
    </div>
  ),
  <footer
    className={css({
      textAlign: 'center',
      padding: '2em 0',
      background: '#161549',
      color: 'white',
    })}
  >
    <h4>
      Contribute to Nebulearn.com on{' '}
      <a
        href="https://github.com/HermantNET/nebulearn"
        className={css({
          color: '#EF8354',
          ':hover': {
            color: '#ba6541',
          },
        })}
      >
        GitHub
      </a>
    </h4>
    <div style={{ color: 'rgba(255,255,255,0.5)', marginTop: '2em' }}>
      Support Nebulearn (NAS): n1HY4ob2kBRacVHoJKGqmwsvhE6BN5pvEy2
      <div style={{ fontSize: '10px' }}>
        All donated funds go towards hosting and the continued development of
        Nebulearn.com
      </div>
      <div style={{ fontSize: '10px' }}>
        Disclaimer: Nebulearn.com is not affiliated with Nebulas.io
      </div>
    </div>
  </footer>,
]

export default Footer
