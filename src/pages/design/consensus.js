import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Address = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/consensus.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Address
