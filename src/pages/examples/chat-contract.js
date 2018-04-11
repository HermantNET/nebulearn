import React from 'react'
import Link from 'gatsby-link'
import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css'

const code = `var ChatContract = function() {
  LocalContractStorage.defineMapProperty(this, "users")
  LocalContractStorage.defineMapProperty(this, "messages")
  LocalContractStorage.defineProperty(this, "messageCount", null)
}

ChatContract.prototype = {
  init: function() {
    this.messageCount = 0
  },

  newUser: function(name) {
    if (!name || name.trim() === "") name = "Anon"

    var messageCount = new BigNumber(this.messageCount).plus(1)
    var message = { name: "System", msg: name + " joined the room." } 

    this.users.set(Blockchain.transaction.from, name)
    this.messages.set(messageCount, message)
    this.messageCount = messageCount

    return true
  },

  sendMessage: function(msg) {
    if (!msg || msg.trim() === "") return false

    var name = this.users.get(Blockchain.transaction.from)
    var messageCount = new BigNumber(this.messageCount).plus(1)
    var message = { name, msg } 

    this.messages.set(messageCount, message)
    this.messageCount = messageCount

    return true
  },

  getMessages: function(count) {
    var messages = []
    var messageCount = +this.messageCount

    if (!count) count = 5
    if (count > messageCount) count = messageCount
    
    for (var i = 1; messageCount >= i && count >= i; i++) {
      messages.push(this.messages.get(messageCount - count + i))
    }

    return messages
  },

  getMessageCount: function() {
    return +this.messageCount
  },
}

module.exports = ChatContract`

const ChatContract = () => (
  <div>
    <h1>Chat Room Smart Contract</h1>
    <pre class="language-javascript">
      <code class="language-javascript">
        <div
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              code,
              Prism.languages.javascript,
              'javascript'
            ),
          }}
        />
      </code>
    </pre>
    <hr />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ChatContract
