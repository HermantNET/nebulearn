import React from 'react'
import Markdown from '../../../components/markdown'
import doc from '../../../files/neb/transaction.md'

const Transaction = () => (
  <div>
    <h1>Neb.js Transaction Reference</h1>
    <Markdown data={doc} doc />
  </div>
)

export default Transaction
