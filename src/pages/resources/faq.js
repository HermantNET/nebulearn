import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Faq = () => (
  <GithubFetcher
    url={'https://raw.githubusercontent.com/nebulasio/wiki/master/FAQ.md'}
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Faq
