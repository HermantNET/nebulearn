import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Config = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/config.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Config
