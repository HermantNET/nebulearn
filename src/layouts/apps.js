import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'babel-polyfill'

const Layout = ({ children }) => (
  <div>
    <Helmet
      title="Neby: NAS for Twitter"
      meta={[
        {
          name: 'description',
          content:
            'Neby is a Twitter chatbot that allows you to send and recieve NAS on Twitter.',
        },
        {
          name: 'keywords',
          content:
            'nebulas, documentation, docs, blockchain, NAS, resources, chat, bot, chatbot, twitter, developers, development, dev, developer, coding, code, coder, programming, programmer, smart contracts',
        },
      ]}
    />
    <div>{children()}</div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
