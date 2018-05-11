import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const SecondPage = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/permission_control_in_smart_contract.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default SecondPage
