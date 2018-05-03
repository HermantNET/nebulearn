import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const SmartContract = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/smart_contract.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default SmartContract
