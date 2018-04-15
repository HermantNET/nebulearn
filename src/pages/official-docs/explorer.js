import React from 'react'
import Link from 'gatsby-link'
import GithubFetcher from '../../components/githubFetcher'

const Explorer = () => (
  <GithubFetcher url="https://raw.githubusercontent.com/nebulasio/explorer/develop/README.md">
    <Link to="/">Go back to the homepage</Link>
  </GithubFetcher>
)

export default Explorer
