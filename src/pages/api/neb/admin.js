import React from 'react'
import Markdown from '../../../components/markdown'
import doc from '../../../files/neb/admin.md'

const Admin = () => (
  <div>
    <h1>Neb.js Admin Reference</h1>
    <Markdown data={doc} doc />
  </div>
)

export default Admin
