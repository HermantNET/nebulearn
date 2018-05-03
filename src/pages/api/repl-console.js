import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const ReplConsole = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/console.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default ReplConsole
