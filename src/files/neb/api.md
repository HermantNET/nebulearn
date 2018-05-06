### Table of Contents

* [API][1]
  * [getNebState][2]
  * [latestIrreversibleBlock][3]
  * [getAccountState][4]
  * [call][5]
  * [sendRawTransaction][6]
  * [getBlockByHash][7]
  * [getBlockByHeight][8]
  * [getTransactionReceipt][9]
  * [subscribe][10]
  * [gasPrice][11]
  * [estimateGas][12]
  * [getEventsByHash][13]
  * [getDynasty][14]

## API

* **See: [API documentation][https://github.com/nebulasio/wiki/blob/master/rpc.md][15]**

User API constructor.
Class encapsulate methods for building distributed applications and services.

**Parameters**

* `neb` **Neb** Instance of Neb library.

**Examples**

```javascript
var api = new API(new Neb())
// or just
var api = new Neb().api
```

### getNebState

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#getnebstate][16]**

Method get state of Nebulas Network.

**Examples**

```javascript
var api = new Neb().api
api.getNebState().then(function(state) {
  //code
})
```

Returns **any** [NebStateObject][https://github.com/nebulasio/wiki/blob/master/rpc.md#getnebstate][16]

### latestIrreversibleBlock

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#latestirreversibleblock][17]**

Method get latest irreversible block of Nebulas Network.

**Examples**

```javascript
var api = new Neb().api
api.latestIrreversibleBlock().then(function(blockData) {
  //code
})
```

Returns **any** [dataBlockInfo.][https://github.com/nebulasio/wiki/blob/master/rpc.md#latestirreversibleblock][17]

### getAccountState

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#getaccountstate][18]**

Method return the state of the account. Balance and nonce.

**Parameters**

* `options` **[Object][19]**
  * `options.address` **HexString**
  * `options.height` **[String][20]**

**Examples**

```javascript
var api = new Neb().api
api
  .getAccountState({ address: 'n1QsosVXKxiV3B4iDWNmxfN4VqpHn2TeUcn' })
  .then(function(state) {
    //code
  })
```

Returns **any** [accaountStateObject][https://github.com/nebulasio/wiki/blob/master/rpc.md#getaccountstate][18]

### call

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#call][21]**

Method wrap smart contract call functionality.

**Parameters**

* `options` **TransactionOptions**

**Examples**

```javascript
var api = new Neb().api
api
  .call({
    chainID: 1,
    from: 'n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5',
    to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
    value: 10,
    nonce: 12,
    gasPrice: 1000000,
    gasLimit: 2000000,
    contract: {
      function: 'save',
      args: '[0]',
    },
  })
  .then(function(tx) {
    //code
  })
```

Returns **any** [Transcation hash][https://github.com/nebulasio/wiki/blob/master/rpc.md#call][21]

### sendRawTransaction

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#sendrawtransaction][22]**

Method wrap submit the signed transaction.

**Parameters**

* `options` **[Object][19]**
  * `options.data` **[String][20]**

**Examples**

```javascript
var api = new Neb().api
var tx = new Transaction({
  chainID: 1,
  from: acc1,
  to: acc2,
  value: 10,
  nonce: 12,
  gasPrice: 1000000,
  gasLimit: 2000000,
})
tx.signTransaction()
api.sendRawTransaction({ data: tx.toProtoString() }).then(function(hash) {
  //code
})
```

Returns **any** [Transcation hash][https://github.com/nebulasio/wiki/blob/master/rpc.md#sendrawtransaction][22]

### getBlockByHash

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#getblockbyhash][23]**

Get block header info by the block hash.

**Parameters**

* `options` **[Object][19]**
  * `options.hash` **HexString**
  * `options.fullTransaction` **[Boolean][24]**

**Examples**

```javascript
var api = new Neb().api
api
  .getBlockByHash({
    hash: '00000658397a90df6459b8e7e63ad3f4ce8f0a40b8803ff2f29c611b2e0190b8',
    fullTransaction: true,
  })
  .then(function(block) {
    //code
  })
```

Returns **any** [Block][https://github.com/nebulasio/wiki/blob/master/rpc.md#getblockbyhash][23]

### getBlockByHeight

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#getblockbyheight][25]**

Get block header info by the block height.

**Parameters**

* `options` **[Object][19]**
  * `options.height` **[Number][26]**
  * `options.fullTransaction` **[Boolean][24]**

**Examples**

```javascript
var api = new Neb().api
api
  .getBlockByHeight({ height: 2, fullTransaction: true })
  .then(function(block) {
    //code
  })
```

Returns **any** [Block][https://github.com/nebulasio/wiki/blob/master/rpc.md#getblockbyheight][25]

### getTransactionReceipt

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#gettransactionreceipt][27]**

Get transactionReceipt info by tansaction hash.

**Parameters**

* `options` **[Object][19]**
  * `options.hash` **HexString**

**Examples**

```javascript
var api = new Neb().api
api
  .getTransactionReceipt({
    hash: 'cc7133643a9ae90ec9fa222871b85349ccb6f04452b835851280285ed72b008c',
  })
  .then(function(receipt) {
    //code
  })
```

Returns **any** [TransactionReceipt][https://github.com/nebulasio/wiki/blob/master/rpc.md#gettransactionreceipt][27]

### subscribe

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#subscribe][28]**

Return the subscribed events of transaction & block.

**Parameters**

* `options` **[Object][19]**
  * `options.topics` **([Array][29] \| [String][20])**
  * `options.onDownloadProgress` **[Function][30]** On progress callback function. Recive chunk.

**Examples**

```javascript
var api = new Neb().api
api
  .subscribe({ topics: ['chain.linkBlock', 'chain.pendingTransaction'] })
  .then(function(eventData) {
    //code
  })
```

Returns **any** [eventData][https://github.com/nebulasio/wiki/blob/master/rpc.md#subscribe][28]

### gasPrice

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#getgasprice][31]**

Return current gasPrice.

**Examples**

```javascript
var api = new Neb().api
api.gasPrice().then(function(gasPrice) {
  //code
})
```

Returns **any** [Gas Price][https://github.com/nebulasio/wiki/blob/master/rpc.md#getgasprice][31]

### estimateGas

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#estimategas][32]**

Return the estimate gas of transaction.

**Parameters**

* `options` **TransactionOptions**

**Examples**

```javascript
var api = new Neb().api
api
  .estimateGas({
    chainID: 1,
    from: 'n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5',
    to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
    value: 10,
    nonce: 12,
    gasPrice: 1000000,
    gasLimit: 2000000,
  })
  .then(function(gas) {
    //code
  })
```

Returns **any** [Gas][https://github.com/nebulasio/wiki/blob/master/rpc.md#estimategas][32]

### getEventsByHash

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#geteventsbyhash][33]**

Return the events list of transaction.

**Parameters**

* `options` **[Object][19]**
  * `options.hash` **HexString**

**Examples**

```javascript
var api = new Neb().api
api
  .getEventsByHash({
    hash: 'ec239d532249f84f158ef8ec9262e1d3d439709ebf4dd5f7c1036b26c6fe8073',
  })
  .then(function(events) {
    //code
  })
```

Returns **any** [Events][https://github.com/nebulasio/wiki/blob/master/rpc.md#geteventsbyhash][33]

### getDynasty

* **See: [https://github.com/nebulasio/wiki/blob/master/rpc.md#getdynasty][34]**

Method getter for dpos dynasty.

**Parameters**

* `options` **[Object][19]**
  * `options.height` **[Number][26]**

**Examples**

```javascript
var api = new Neb().api
api.getDynasty({ height: 1 }).then(function(delegatees) {
  //code
})
```

Returns **any** [delegatees][https://github.com/nebulasio/wiki/blob/master/rpc.md#getdynasty][34]

[1]: #api
[2]: #getnebstate
[3]: #latestirreversibleblock
[4]: #getaccountstate
[5]: #call
[6]: #sendrawtransaction
[7]: #getblockbyhash
[8]: #getblockbyheight
[9]: #gettransactionreceipt
[10]: #subscribe
[11]: #gasprice
[12]: #estimategas
[13]: #geteventsbyhash
[14]: #getdynasty
[15]: https://github.com/nebulasio/wiki/blob/master/rpc.md
[16]: https://github.com/nebulasio/wiki/blob/master/rpc.md#getnebstate
[17]: https://github.com/nebulasio/wiki/blob/master/rpc.md#latestirreversibleblock
[18]: https://github.com/nebulasio/wiki/blob/master/rpc.md#getaccountstate
[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[20]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[21]: https://github.com/nebulasio/wiki/blob/master/rpc.md#call
[22]: https://github.com/nebulasio/wiki/blob/master/rpc.md#sendrawtransaction
[23]: https://github.com/nebulasio/wiki/blob/master/rpc.md#getblockbyhash
[24]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[25]: https://github.com/nebulasio/wiki/blob/master/rpc.md#getblockbyheight
[26]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[27]: https://github.com/nebulasio/wiki/blob/master/rpc.md#gettransactionreceipt
[28]: https://github.com/nebulasio/wiki/blob/master/rpc.md#subscribe
[29]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
[30]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function
[31]: https://github.com/nebulasio/wiki/blob/master/rpc.md#getgasprice
[32]: https://github.com/nebulasio/wiki/blob/master/rpc.md#estimategas
[33]: https://github.com/nebulasio/wiki/blob/master/rpc.md#geteventsbyhash
[34]: https://github.com/nebulasio/wiki/blob/master/rpc.md#getdynasty
