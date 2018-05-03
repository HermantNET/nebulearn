import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Transactions = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/transaction_process.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Transactions
