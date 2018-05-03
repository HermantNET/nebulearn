import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const RpcAdmin = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/rpc_admin.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default RpcAdmin
