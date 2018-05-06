import React from 'react'
import Markdown from '../../../components/markdown'
import doc from '../../../files/neb/neb.md'

const Neb = () => (
  <div>
    <h1>Neb.js Neb Reference</h1>
    <Markdown data={doc} doc />
  </div>
)

export default Neb
