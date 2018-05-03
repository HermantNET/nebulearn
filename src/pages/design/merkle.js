import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const Merkle = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/merkle_trie.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default Merkle
