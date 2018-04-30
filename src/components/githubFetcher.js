import React from 'react'
import ReactMarkdown from 'react-markdown'
import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css'
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
        {code ? (
          <pre class="language-javascript">
            <code class="language-javascript">
              <div
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(
                    data,
                    Prism.languages.javascript,
                    'javascript'
                  ),
                }}
              />
            </code>
          </pre>
        ) : (
          <ReactMarkdown
            source={data}
            renderers={{ heading: HeadingRenderer }}
          />
        )}
        <hr />
        {this.props.children}
      </div>
    )
  }
}

export default GitHubFetcher
