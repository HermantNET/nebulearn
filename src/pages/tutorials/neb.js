import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import * as Neb from 'nebulas'
import Code from '../../components/code'

const NebJs = () => (
  <div>
    <h1>Neb.js Introduction</h1>
    <h2>The Nebulas JavaScript API</h2>
    <p>
      Neb.js from Nebulas.io is the JavaScript solution for interacting with the
      Nebulas blockchain. It exports a suite of powerful tools:
    </p>
    <ul>
      <li>HTTPRequest</li>
      <li>Neb</li>
      <li>Account</li>
      <li>Transaction</li>
      <li>Utils</li>
      <li>CryptoUtils</li>
      <li>Unit</li>
    </ul>
    <p>Let's start by adding Neb.js to a new project.</p>
    <h4>Prerequisites</h4>
    <ul>
      <li>Node.js</li>
      <li>Git</li>
    </ul>
    <h5>1. Clone the starter project</h5>
    <p>
      To get up-and-running as quickly as possible, clone the following
      repository from GitHub:{' '}
      <a href="https://github.com/cvgellhorn/webpack-boilerplate.git">
        webpack-boilerplate
      </a>.
    </p>
    <Code
      language="bash"
      code="git clone https://github.com/cvgellhorn/webpack-boilerplate.git"
    />
    <blockquote>
      When cloning a repository, you can change the name of the projects root
      folder by adding an argument after the repositories URL:
      <Code
        language="bash"
        code="git clone https://github.com/cvgellhorn/webpack-boilerplate.git neb-tutorial"
      />
    </blockquote>
    <br />
    <h5>2. Install the projects dependencies</h5>
    <p>
      After cloning the repo, navigate into the directory and install it's
      dependencies:
    </p>
    <Code language="bash" code="cd webpack-boilerplate && npm install" />
    <br />
    <h5>3. Add Neb.js</h5>
    <p>Now lets add Neb.js to our project:</p>
    <Code
      language="bash"
      code="npm install --save https://github.com/nebulasio/neb.js.git"
    />
    <br />
    <h5>4. Test Neb.js</h5>
    <p>
      Once we've added Neb.js, we're good to go! Let's confirm it's working.
      Open up your favorite code editor and add the following to the bottom of{' '}
      <code>app/index.js</code>
    </p>
    <Code
      language="bash"
      code={`import * as Neb from "nebulas" 

let account = Neb.Account.NewAccount()
alert(account.getAddressString())`}
    />
    <br />

    <h3>Live Example</h3>
    <p>
      Here's a live example of the previous directions applied to Nebulearn.com!
    </p>
    <blockquote>
      Generated Address: {Neb.Account.NewAccount().getAddressString()}
    </blockquote>

    <p>
      Congratulations, you've added Neb.js to your project and are ready to
      develop your epic DApp. Have fun exploring the exported modules mentioned
      at the start of this tutorial. Live long and Nebulas! 👾
    </p>
  </div>
)

export default NebJs
