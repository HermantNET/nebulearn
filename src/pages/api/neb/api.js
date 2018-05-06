import React from 'react'
import Markdown from '../../../components/markdown'
import doc from '../../../files/neb/api.md'

const API = () => (
  <div>
    <h1>Neb.js API Reference</h1>
    <Markdown data={doc} doc />
  </div>
)

export default API
