import React from 'react'
import Link from 'gatsby-link'
import GithubFetcher from '../../components/githubFetcher'

const Mainnet = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/mainnet.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  >
    <Link to="/">Go back to the homepage</Link>
  </GithubFetcher>
)

export default Mainnet