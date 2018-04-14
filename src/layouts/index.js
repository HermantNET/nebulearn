import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'babel-polyfill'
import ScrollToTop from 'react-scroll-up'

import Header from '../components/header'
import Drawer from '../components/drawer'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        display: 'flex',
        height: '100vh',
      }}
    >
      <Drawer />
      <div style={{ flex: 1, width: '50%' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            padding: '1em 1.22em',
            width: '100%',
            paddingBottom: '5em',
          }}
        >
          {children()}
        </div>
        <ScrollToTop showUnder={160}>
          <span
            style={{
              boxSizing: 'borderBox',
              paddingTop: '0.2em',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '2em',
              color: 'white',
              background: 'linear-gradient(#595599, #161559)',
              height: '2em',
              width: '2em',
              borderRadius: '100%',
            }}
          >
            ⬆
          </span>
        </ScrollToTop>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
