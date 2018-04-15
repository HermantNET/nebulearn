import React from 'react'
import Link from 'gatsby-link'
import GithubFetcher from '../../components/githubFetcher'

const GoNebulas = () => (
  <GithubFetcher url="https://raw.githubusercontent.com/nebulasio/go-nebulas/develop/README.md">
    <Link to="/">Go back to the homepage</Link>
  </GithubFetcher>
)

export default GoNebulas
