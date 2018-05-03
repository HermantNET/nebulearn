import React from 'react'
import GithubFetcher from '../../components/githubFetcher'

const CrashReporter = () => (
  <GithubFetcher
    url={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/crash_reporter.md'
    }
    resources={
      'https://raw.githubusercontent.com/nebulasio/wiki/master/resources'
    }
  />
)

export default CrashReporter
