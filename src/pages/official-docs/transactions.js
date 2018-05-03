import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const SecondPage = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/tutorials/%5BEnglish%5D%20Nebulas%20101%20-%2002%20Transaction.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/tutorials/resources'
    }
  />
)

export default SecondPage
