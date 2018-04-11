import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Drawer from '../components/drawer'
import './index.css'

const Layout = ({ children, data }) => (
  <div style={{ height: '100vh' }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div style={{ display: 'flex', height: '100%' }}>
      <Drawer />
      <div style={{ width: '100%', overflowY: 'auto' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{ padding: '1em 1.22em' }}>{children()}</div>
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
