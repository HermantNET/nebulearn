import React from 'react'
import Code from '../../components/code'
import neby from '../../images/neby.svg'

const Neby = ({ pageResources }) => {
  console.log(pageResources)
  return (
    <div style={{ paddingBottom: '8em' }}>
      <div
        style={{
          padding: '2em',
          background: 'radial-gradient(circle, #b23cfc 5%, #161549 70%)',
          color: 'white',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div>
            <img src={neby} alt="neby" width="340" />
          </div>
          <div>
            <h1>Hi, I'm Neby.</h1>
            <p>Neby allows you to send and receive NAS on Twitter.</p>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '3em', margin: '0 auto', maxWidth: '900px' }}>
        <div>
          <h2>@NebBot</h2>
          <a
            className="twitter-timeline"
            href="https://twitter.com/NebBot?ref_src=twsrc%5Etfw"
          >
            Tweets by NebBot
          </a>{' '}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </div>
        <h2>How it works</h2>
        <p>Sending NAS with Neby is simple.</p>
        <ol>
          <li>
            Reply to a tweet made by the person you want to send NAS, following
            the format of:
            <pre>
              <code>
                @NebBot (send|gift|give|wire|grant|drop|donate) (amount) NAS
                (message)
              </code>
            </pre>
            <blockquote>
              <h5>EXAMPLE</h5>
              <p>@NebBot gift 5 NAS to my lad johnny</p>
            </blockquote>
          </li>
          <li>
            Neby(@NebBot) will then send you a direct message to confirm the
            transaction.
            <blockquote>
              <h5>NOTE</h5>
              <p>
                In order to receive the direct message, you must be following
                @NebBot or have the account setting "Receive Direct Messages
                from anyone" enabled.
              </p>
            </blockquote>
          </li>
          <li>
            After submitting the transaction Neby will make a tweet tagging your
            twitter account and the user you replied to.
          </li>
        </ol>
        <p>
          To review transactions, get your address from Neby using the{' '}
          <strong>address</strong> command, then search for your transaction on{' '}
          <a href="https://explorer.nebulas.io/">
            the Nebulas blockchain explorer
          </a>.
        </p>
        <hr />
        <h2>Commands</h2>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <strong>ADDRESS</strong> - Get the NAS address associated with your
            Twitter account ID.
          </li>
          <li>
            <strong>HELP</strong> - Display the available commands.
          </li>
          <li>
            <strong>TRANSFER address amount</strong> - Transfer NAS from your
            Neby address to an external address.
            <Code
              language="bash"
              code="transfer n1ZiyKqyFUKn2ych8k5dAitfq7NgLxUfgJW 13.37"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Neby
