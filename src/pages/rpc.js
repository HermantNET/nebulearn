import React from 'react'
import Link from 'gatsby-link'
import GithubFetcher from '../components/githubFetcher'

const Rpc = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/tutorials/%5BEnglish%5D%20Nebulas%20101%20-%2005%20Interacting%20with%20Nebulas%20by%20RPC%20API.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/tutorials/resources'
    }
  >
    <Link to="/">Go back to the homepage</Link>
  </GithubFetcher>
)

export default Rpc
