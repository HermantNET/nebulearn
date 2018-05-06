import React from 'react'
import Markdown from '../../../components/markdown'
import doc from '../../../files/neb/account.md'

const Account = () => (
  <div>
    <h1>Neb.js Account Reference</h1>
    <Markdown data={doc} doc />
  </div>
)

export default Account
