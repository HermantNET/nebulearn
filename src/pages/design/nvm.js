import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Nvm = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/nvm.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Nvm
