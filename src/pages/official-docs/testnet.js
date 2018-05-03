import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const SecondPage = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/testnet.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/tutorials'
    }
  />
)

export default SecondPage
