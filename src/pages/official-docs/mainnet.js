import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Mainnet = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/mainnet.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Mainnet
