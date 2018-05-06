import React from 'react'
import Prism from 'prismjs'
import 'babel-polyfill'
import Code from './code'
import Markdown from './markdown'

class GitHubFetcher extends React.Component {
  state = {
    data: '# Loading...',
  }

  async componentDidMount() {
    if (this.props.resources) {
      this.setState({
        data: (await (await fetch(this.props.url)).text()).replace(
          /\(resources\//gi,
          `(${this.props.resources}/`
        ),
      })
    } else {
      this.setState({
        data: await (await fetch(this.props.url)).text(),
      })
    }
  }

  render() {
    const { code, title, author } = this.props
    const { data } = this.state

    return (
      <div>
        <a
          style={{ float: 'right', marginLeft: '1em' }}
          href={this.props.url
            .replace('raw.githubusercontent', 'github')
            .replace(
              /\/nebulasio\/([\w-_+]+)\/([\w-_+]+)/,
              '/nebulasio/$1/blob/$2'
            )}
          target="_blank"
        >
          View this file on GitHub
        </a>
        {title && <h1>{title}</h1>}
        {author && (
          <p>
            Written by: <a href={author}>{author}</a>
          </p>
        )}
        {code ? <Code code={data} /> : <Markdown data={data} />}
        {this.props.children}
      </div>
    )
  }
}

export default GitHubFetcher
