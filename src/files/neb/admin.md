### Table of Contents

* [Admin][1]
  * [nodeInfo][2]
  * [accounts][3]
  * [newAccount][4]
  * [unlockAccount][5]
  * [lockAccount][6]
  * [sendTransaction][7]
  * [signHash][8]
  * [signTransactionWithPassphrase][9]
  * [sendTransactionWithPassphrase][10]
  * [startPprof][11]
  * [getConfig][12]

## Admin

* **See: [Admin API documentation:][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md][13].**

Admin API constructor.
Class encapsulate methods for admin APIs commands.

**Parameters**

* `neb` **Neb** Instance of Neb library.

**Examples**

```javascript
var admin = new Admin(new Neb())
// or just
var admin = new Neb().admin
```

### nodeInfo

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#nodeinfo][14]**

Method get info about nodes in Nebulas Network.

**Examples**

```javascript
var admin = new Neb().admin
admin.nodeInfo().then(function(info) {
  //code
})
```

Returns **any** [nodeInfoObject][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#nodeinfo][14]

### accounts

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#accounts][15]**

Method get list of available addresses.

**Examples**

```javascript
var admin = new Neb().admin
admin.accounts().then(function(accounts) {
  //code
})
```

Returns **any** [accountsList][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#accounts][15]

### newAccount

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#newaccount][16]**

Method create a new account in Nebulas network with provided passphrase.

**Parameters**

* `options` **[Object][17]**
  * `options.passphrase` **Password**

**Examples**

```javascript
var admin = new Neb().admin
admin.newAccount({ passphrase: 'passphrase' }).then(function(address) {
  //code
})
```

Returns **any** [address][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#newaccount][16]

### unlockAccount

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#unlockaccount][18]**

Method unlock account with provided passphrase.
After the default unlock time, the account will be locked.

**Parameters**

* `options` **[Object][17]**
  * `options.address` **HexString**
  * `options.passphrase` **Password**
  * `options.duration` **[Number][19]**

**Examples**

```javascript
var admin = new Neb().admin
admin
  .unlockAccount({
    address: 'n1cYKNHTeVW9v1NQRWuhZZn9ETbqAYozckh',
    passphrase: 'passphrase',
    duration: 1000000000,
  })
  .then(function(isUnLocked) {
    //code
  })
```

Returns **any** [isUnLocked][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#unlockaccount][18]

### lockAccount

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#lockaccount][20]**

Method lock account.

**Parameters**

* `options` **[Object][17]**
  * `options.address` **HexString**

**Examples**

```javascript
var admin = new Neb().admin
admin
  .lockAccount({ address: 'n1cYKNHTeVW9v1NQRWuhZZn9ETbqAYozckh' })
  .then(function(isLocked) {
    //code
  })
```

Returns **any** [isLocked][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#lockaccount][20]

### sendTransaction

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#sendtransaction][21]**

Method wrap transaction sending functionality.

**Parameters**

* `options` **TransactionOptions**

**Examples**

```javascript
var admin = new Neb().admin
admin
  .sendTransaction({
    from: 'n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5',
    to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
    value: 10,
    nonce: 12,
    gasPrice: 1000000,
    gasLimit: 2000000,
  })
  .then(function(tx) {
    //code
  })
```

Returns **any** [Transcation hash and contract address][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#sendtransaction][21]

### signHash

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#signhash][22]**

Method sign hash.

**Parameters**

* `options` **[Object][17]**
  * `options.address` **HexString**
  * `options.hash` **Base64** of hash bytes with base64 encode.
  * `options.alg` **UInt32**

**Examples**

```javascript
var admin = new Neb().admin
admin
  .SignHash({
    address: 'n1cYKNHTeVW9v1NQRWuhZZn9ETbqAYozckh',
    hash:
      'OGQ5NjllZWY2ZWNhZDNjMjlhM2E2MjkyODBlNjg2Y2YwYzNmNWQ1YTg2YWZmM2NhMTIwMjBjOTIzYWRjNmM5Mg==',
    alg: 1,
  })
  .then(function(data) {
    //code
  })
```

Returns **any** [data][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#signhash][22]

### signTransactionWithPassphrase

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#signtransactionwithpassphrase][23]**

Method sign transaction with passphrase.
The transaction's from addrees must be unlock before sign call.

**Parameters**

* `options` **TransactionOptions**
  * `options.passphrase` **Password**

**Examples**

```javascript
var admin = new Neb().admin
admin
  .signTransactionWithPassphrase({
    from: 'n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5',
    to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
    value: 10,
    nonce: 12,
    gasPrice: 1000000,
    gasLimit: 2000000,
    passphrase: 'passphrase',
  })
  .then(function(tx) {
    //code
  })
```

Returns **any** [Transcation hash and contract address][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#signtransactionwithpassphrase][23]

### sendTransactionWithPassphrase

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#sendtransactionwithpassphrase][24]**

Method send transaction with passphrase.

**Parameters**

* `options` **TransactionOptions**
  * `options.passphrase` **Password**

**Examples**

```javascript
var admin = new Neb().admin
admin
  .sendTransactionWithPassphrase({
    from: 'n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5',
    to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
    value: 10,
    nonce: 12,
    gasPrice: 1000000,
    gasLimit: 2000000,
    passphrase: 'passphrase',
  })
  .then(function(tx) {
    //code
  })
```

Returns **any** [data][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#sendtransactionwithpassphrase][24]

### startPprof

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#startpprof][25]**

Method start listen provided port.

**Parameters**

* `options` **[Object][17]**
  * `options.listen` **[String][26]** Listen port.

**Examples**

```javascript
var admin = new Neb().admin
admin.startPprof({ listen: '8080' }).then(function(isListenStrted) {
  //code
})
```

Returns **any** [isListenStrted][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#startpprof][25]

### getConfig

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#getConfig][27]**

Method get config of node in Nebulas Network.

**Examples**

```javascript
var admin = new Neb().admin
admin.getConfig().then(function(info) {
  //code
})
```

Returns **any** [config][https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#getconfig][27]

[1]: #admin
[2]: #nodeinfo
[3]: #accounts
[4]: #newaccount
[5]: #unlockaccount
[6]: #lockaccount
[7]: #sendtransaction
[8]: #signhash
[9]: #signtransactionwithpassphrase
[10]: #sendtransactionwithpassphrase
[11]: #startpprof
[12]: #getconfig
[13]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md
[14]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#nodeinfo
[15]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#accounts
[16]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#newaccount
[17]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[18]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#unlockaccount
[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[20]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#lockaccount
[21]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#sendtransaction
[22]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#signhash
[23]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#signtransactionwithpassphrase
[24]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#sendtransactionwithpassphrase
[25]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#startpprof
[26]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[27]: https://github.com/nebulasio/wiki/blob/master/rpc_admin.md#getConfig
