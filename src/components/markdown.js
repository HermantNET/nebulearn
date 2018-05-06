import React from 'react'
import ReactMarkdown from 'react-markdown'
import Code from './code'
import { css } from 'glamor'

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

function CodeRenderer(props) {
  console.log(props.language)
  return <Code language={props.language} code={props.value} />
}

const Markdown = ({ data, doc }) => (
  <div className={doc ? 'documentation' : ''}>
    <ReactMarkdown
      source={data}
      renderers={{ heading: HeadingRenderer, code: CodeRenderer }}
    />
  </div>
)

export default Markdown
