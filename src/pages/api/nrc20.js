import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Nrc20 = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/NRC20.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Nrc20
