import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Blockchain = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/blockchain.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Blockchain
