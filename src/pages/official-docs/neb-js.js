import React from 'react'
import Link from 'gatsby-link'
import GithubFetcher from '../../components/githubFetcher'

const NebJs = () => (
  <GithubFetcher url="https://raw.githubusercontent.com/nebulasio/neb.js/master/README.md">
    <Link to="/">Go back to the homepage</Link>
  </GithubFetcher>
)

export default NebJs
