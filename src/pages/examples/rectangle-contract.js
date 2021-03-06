import React from 'react'
import Prism from 'prismjs'

const code = `
class Rectangle {
  constructor() {
      // define fields stored to state trie.
      LocalContractStorage.defineProperties(this, {
          height: null,
          width: null,
      });
  }

  // init function.
  init(height, width) {
      this.height = height;
      this.width = width;
  }

  // calc area function.
  calcArea() {
      return this.height * this.width;
  }

  // verify function.
  verify(expected) {
      let area = this.calcArea();
      if (expected != area) {
          throw new Error("Error: expected " + expected + ", actual is " + area + ".");
      }
  }
}

module.exports = Rectangle`

const RectContract = () => (
  <div>
    <h1>Rectangle Smart Contract</h1>
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
  </div>
)

export default RectContract
