import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Rpc = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/rpc.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Rpc
