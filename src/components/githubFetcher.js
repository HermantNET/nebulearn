import React from 'react'
import ReactMarkdown from 'react-markdown'
import 'babel-polyfill'

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

function HeadingRenderer(props) {
  var children = React.Children.toArray(props.children)
  var text = children.reduce(flatten, '')
  var slug = text
    .toLowerCase()
    .replace(/[\(\)]/g, '')
    .replace(/\W/g, '-')
  return React.createElement('h' + props.level, { id: slug }, props.children)
}

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
          style={{ float: 'right', marginLeft: '1em' }}
          href={this.props.url
            .replace('raw.githubusercontent', 'github')
            .replace('/master', '/blob/master')}
          target="_blank"
        >
          View this file on GitHub
        </a>
        <ReactMarkdown
          source={this.state.data}
          renderers={{ heading: HeadingRenderer }}
        />
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default GitHubFetcher
