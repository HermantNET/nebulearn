import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Contribute = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/contribute.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Contribute
