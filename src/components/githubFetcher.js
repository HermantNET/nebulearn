import React from 'react'
import ReactMarkdown from 'react-markdown'

class GitHubFetcher extends React.Component {
  state = {
    data: '# Loading...',
  }

  async componentDidMount() {
    this.setState({
      data: (await (await fetch(this.props.url)).text()).replace(
        /\(resources\//gi,
        `(${this.props.resources}/`
      ),
    })
  }

  render() {
    return (
      <div>
        <a
          style={{ float: 'right' }}
          href={this.props.url
            .replace('raw.githubusercontent', 'github')
            .replace('/master', '/blob/master')}
          target="_blank"
        >
          View this file on GitHub
        </a>
        <ReactMarkdown source={this.state.data} />
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default GitHubFetcher
