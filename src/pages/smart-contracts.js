import React from 'react'
import Link from 'gatsby-link'
import GithubFetcher from '../components/githubFetcher'

const SecondPage = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/tutorials/%5BEnglish%5D%20Nebulas%20101%20-%2003%20Smart%20Contracts%20JavaScript.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/tutorials/resources'
    }
  >
    <Link to="/">Go back to the homepage</Link>
  </GithubFetcher>
)

export default SecondPage
