import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-protobuf'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-typescript'

const Code = ({ code, language }) => {
  if (language === 'txt') {
    return (
      <pre>
        <code>{code}</code>
      </pre>
    )
  }
  return (
    <pre class="language-javascript">
      <code class="language-javascript">
        <div
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              code,
              Prism.languages[
                language && language === 'yml'
                  ? 'yaml'
                  : language || 'javascript'
              ],
              language || 'javascript'
            ),
          }}
        />
      </code>
    </pre>
  )
}

export default Code
