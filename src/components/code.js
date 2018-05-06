import React from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-protobuf'
import 'prismjs/components/prism-go'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-yaml'
import 'prismjs/components/prism-typescript'

const Code = ({ code, language }) => {
  let lang = language
  if (lang === 'txt') {
    return (
      <pre>
        <code>{code}</code>
      </pre>
    )
  } else if (lang === 'js') lang = 'javascript'
  else if (lang === 'yml') lang = 'yaml'
  return (
    <pre className={'language-' + lang}>
      <code className={'language-' + lang}>
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
