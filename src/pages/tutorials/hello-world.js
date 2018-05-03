import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import Code from '../../components/code'

const HelloWorld = () => (
  <div>
    <h1>Hello, World!</h1>
    <h2>Introduction</h2>
    <p>
      Developers and non-developers alike are looking to break into the
      blockchain space. With countless options available, how does one choose a
      platform to build the future on? It may seem daunting at first, but there
      are a few solid choices that provide the ease-of-use and cutting-edge
      features you need to create the impossible. One of, if not the best
      choice, is the technical wonder that is the Nebulas blockchain.
    </p>
    <blockquote>
      <h3>
        Nebulas is a next generation public blockchain, aiming for a
        continuously improving ecosystem.
      </h3>
      Based on its blockchain valuation mechanism, Nebulas proposes
      future-oriented incentive and consensus systems, and the ability to
      self-evolve without forking.
    </blockquote>
    <p>
      Whether you've just written your first function or are a programming
      rockstar, Nebulas offers all the features you are looking for. Evolving
      contracts, mutable storage, and developer incentives are only a few of the
      ways Nebulas aims to enrich the development experience for both noobs and
      veterans alike.
    </p>
    <h2>Smart Contracts</h2>
    <p>
      The milk and sugar of the Nebulas blockchain is it's simple yet
      overwhelmingly powerful Smart Contract implementation. It has never been
      easier to write and deploy a contract to the blockchain. Below shows just
      how simple a contract can be:
    </p>
    <Code
      code={`class HelloWorld { // Contracts can be written as a class or as a prototype function.
  init() {} // Contracts require an init() method.
  hello() {
    return "world"
  }
}

module.exports = HelloWorld // Don't forget to export your module!
`}
    />

    <Link
      className={css({
        marginTop: '2em',
        display: 'block',
        textAlign: 'center',
      })}
      to="/official-docs/installation"
    >
      Next step: Install Nebulas
    </Link>
  </div>
)

export default HelloWorld
