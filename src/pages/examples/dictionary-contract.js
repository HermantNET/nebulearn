import React from 'react'
import Link from 'gatsby-link'
import GithubFetcher from '../../components/githubFetcher'

const DictionaryContract = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/15010159959/super-dictionary/master/smartContract/super_dictionary.js'
    }
    code={true}
    title="Super Dictionary Smart Contract"
    author="https://github.com/ChengOrangeJu"
  >
    <Link to="/">Go back to the homepage</Link>
  </GithubFetcher>
)

export default DictionaryContract
