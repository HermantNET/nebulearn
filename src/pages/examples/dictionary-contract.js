import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const DictionaryContract = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/15010159959/super-dictionary/master/smartContract/super_dictionary.js'
    }
    code={true}
    title="Super Dictionary Smart Contract"
    author="https://github.com/ChengOrangeJu"
  />
)

export default DictionaryContract
