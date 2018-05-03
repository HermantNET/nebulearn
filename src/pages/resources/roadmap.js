import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Roadmap = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/roadmap.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Roadmap
