### Table of Contents

* [Transaction][9]
  * [hashTransaction][10]
  * [signTransaction][11]
  * [toPlainObject][12]
  * [toString][13]
  * [toProto][14]
  * [toProtoString][15]
  * [fromProto][16]
* [Contract][17]
* [TransactionOptions][18]

## Transaction

* **See: [For more information about parameters, follow this link][https://github.com/nebulasio/wiki/blob/master/rpc.md#sendrawtransaction][38]**
* **See: [Transaction tutorial.][https://github.com/nebulasio/wiki/blob/master/tutorials/%5benglish%5d%20nebulas%20101%20-%2002%20transaction.md][39]**
* **See: [Create own smart contract in Nebulas.][https://github.com/nebulasio/wiki/blob/master/tutorials/%5benglish%5d%20nebulas%20101%20-%2003%20smart%20contracts%20javascript.md][40]**
* **See: [More about transaction parameters.][https://github.com/nebulasio/wiki/blob/c3f5ce8908c80e9104e3b512a7fdfd75f16ac38c/rpc.md#sendtransaction][41]**

Transaction constructor.
Class encapsulate main operation with transactions.

**Parameters**

* `options` **[TransactionOptions][42]** Transaction options.

**Examples**

```javascript
var acc = Account.NewAccount()

var tx = new Transaction({
  chainID: 1,
  from: acc,
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
```

### hashTransaction

Convert transaction to hash by SHA3-256 algorithm.

**Examples**

```javascript
var acc = Account.NewAccount()

var tx = new Transaction({
  chainID: 1,
  from: acc,
  to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
  value: 10,
  nonce: 12,
  gasPrice: 1000000,
  gasLimit: 2000000,
})
var txHash = tx.hashTransaction()
//Uint8Array(32) [211, 213, 102, 103, 23, 231, 246, 141, 20, 202, 210, 25, 92, 142, 162, 242, 232, 95, 44, 239, 45, 57, 241, 61, 34, 2, 213, 160, 17, 207, 75, 40]
```

Returns **Hash** hash of Transaction.

### signTransaction

Sign transaction with the specified algorithm.

**Examples**

```javascript
var acc = Account.NewAccount()

var tx = new Transaction({
  chainID: 1,
  from: acc,
  to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
  value: 10,
  nonce: 12,
  gasPrice: 1000000,
  gasLimit: 2000000,
})
tx.signTransaction()
```

### toPlainObject

Conver transaction data to plain JavaScript object.

**Examples**

```javascript
var acc = Account.NewAccount()
var tx = new Transaction({
  chainID: 1,
  from: acc,
  to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
  value: 10,
  nonce: 12,
  gasPrice: 1000000,
  gasLimit: 2000000,
})
txData = tx.toPlainObject()
// {chainID: 1001, from: "n1USdDKeZXQYubA44W2ZVUdW1cjiJuqswxp", to: "n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17", value: 1000000000000000000, nonce: 1, …}
```

Returns **[Object][33]** Plain JavaScript object with Transaction fields.

### toString

Convert transaction to JSON string.

**Note:** Transaction should be [sign][transaction#signtransaction][34] before converting.

**Examples**

```javascript
var acc = Account.NewAccount()

var tx = new Transaction({
  chainID: 1,
  from: acc,
  to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
  value: 10,
  nonce: 12,
  gasPrice: 1000000,
  gasLimit: 2000000,
})
tx.signTransaction()
var txHash = tx.toString()
// "{"chainID":1001,"from":"n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5","to":"n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17","value":"1000000000000000000","nonce":1,"timestamp":1521905294,"data":{"payloadType":"binary","payload":null},"gasPrice":"1000000","gasLimit":"20000","hash":"f52668b853dd476fd309f21b22ade6bb468262f55402965c3460175b10cb2f20","alg":1,"sign":"cf30d5f61e67bbeb73bb9724ba5ba3744dcbc995521c62f9b5f43efabd9b82f10aaadf19a9cdb05f039d8bf074849ef4b508905bcdea76ae57e464e79c958fa900"}"
```

Returns **[String][35]** JSON stringify of transaction data.

### toProto

Convert transaction to Protobuf format.

**Note:** Transaction should be [sign][transaction#signtransaction][34] before converting.

**Examples**

```javascript
var acc = Account.NewAccount()

var tx = new Transaction({
  chainID: 1,
  from: acc,
  to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
  value: 10,
  nonce: 12,
  gasPrice: 1000000,
  gasLimit: 2000000,
})
tx.signTransaction()
var txHash = tx.toProto()
// Uint8Array(127)
```

Returns **[Buffer][36]** Transaction data in Protobuf format

### toProtoString

Convert transaction to Protobuf hash string.

**Note:** Transaction should be [sign][transaction#signtransaction][34] before converting.

**Examples**

```javascript
var acc = Account.NewAccount()

var tx = new Transaction({
  chainID: 1,
  from: acc,
  to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
  value: 10,
  nonce: 12,
  gasPrice: 1000000,
  gasLimit: 2000000,
})
tx.signTransaction()
var txHash = tx.toProtoString()
// "EhjZTY/gKLhWVVMZ+xoY9GiHOHJcxhc4uxkaGNlNj+AouFZVUxn7Ghj0aIc4clzGFzi7GSIQAAAAAAAAAAAN4Lazp2QAACgBMPCz6tUFOggKBmJpbmFyeUDpB0oQAAAAAAAAAAAAAAAAAA9CQFIQAAAAAAAAAAAAAAAAAABOIA=="
```

Returns **Base64** Transaction string.

### fromProto

Restore Transaction from Protobuf format.

**Parameters**

* `data`

**Properties**

* `data` **([Buffer][36] \| [String][35])** Buffer or stringify Buffer.

**Examples**

```javascript
var acc = Account.NewAccount()

var tx = new Transaction({
  chainID: 1,
  from: acc,
  to: 'n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17',
  value: 10,
  nonce: 12,
  gasPrice: 1000000,
  gasLimit: 2000000,
})
var tx = tx.fromProto(
  'EhjZTY/gKLhWVVMZ+xoY9GiHOHJcxhc4uxkaGNlNj+AouFZVUxn7Ghj0aIc4clzGFzi7GSIQAAAAAAAAAAAN4Lazp2QAACgBMPCz6tUFOggKBmJpbmFyeUDpB0oQAAAAAAAAAAAAAAAAAA9CQFIQAAAAAAAAAAAAAAAAAABOIA=='
)
```

Returns **[Transaction][37]** Restored transaction.

## Contract

* **See: [Create own smart contract in Nebulas.][https://github.com/nebulasio/wiki/blob/master/tutorials/%5benglish%5d%20nebulas%20101%20-%2003%20smart%20contracts%20javascript.md][40]**
* **See: [More about transaction parameters.][https://github.com/nebulasio/wiki/blob/c3f5ce8908c80e9104e3b512a7fdfd75f16ac38c/rpc.md#sendtransaction][41]**

Represent of smart contract payload data.

Type: [Object][33]

**Properties**

* `source` **[String][35]** Contract source code for deploy contract.
* `sourceType` **[String][35]** Contract source type for deploy contract. Currently support js and ts.
* `args` **[String][35]** The params of contract. The args content is JSON string of parameters array.
* `function` **[String][35]** The contract call function.
* `binary` **[Buffer][36]** Binary contract representation.

**Examples**

```javascript
// It's example of possible fields values.
// For deploy, and execute smart contracts follow this link - https://github.com/nebulasio/wiki/blob/master/tutorials/%5BEnglish%5D%20Nebulas%20101%20-%2003%20Smart%20Contracts%20JavaScript.md
{
    'source': '"use strict";var DepositeContent=function(t){if(t){let n=JSON.parse(t);' +
              'this.balance=new BigNumber(n.balance),this.expiryHeight=new BigNumber(n.expiryHeight)' +
              '}else this.balance=new BigNumber(0),this.expiryHeight=new BigNumber(0)};' +
              'DepositeContent.prototype={toString:function(){return JSON.stringify(this)}};' +
              'var BankVaultContract=function(){LocalContractStorage.defineMapProperty(this,"bankVault",' +
              '{parse:function(t){return new DepositeContent(t)},stringify:function(t){return t.toString()}})};' +
              'BankVaultContract.prototype={init:function(){},save:function(t){var n=Blockchain.transaction.from,' +
              'e=Blockchain.transaction.value,a=new BigNumber(Blockchain.block.height),r=this.bankVault.get(n);' +
              'r&&(e=e.plus(r.balance));var i=new DepositeContent;i.balance=e,i.expiryHeight=a.plus(t),' +
              'this.bankVault.put(n,i)},takeout:function(t){var n=Blockchain.transaction.from,' +
              'e=new BigNumber(Blockchain.block.height),a=new BigNumber(t),r=this.bankVault.get(n);' +
              'if(!r)throw new Error("No deposit before.");if(e.lt(r.expiryHeight))throw new Error("Can't takeout before expiryHeight.");' +
              'if(a.gt(r.balance))throw new Error("Insufficient balance.");if(0!=Blockchain.transfer(n,a))throw new Error("transfer failed.");' +
              'Event.Trigger("BankVault",{Transfer:{from:Blockchain.transaction.to,to:n,value:a.toString()}}),' +
              'r.balance=r.balance.sub(a),this.bankVault.put(n,r)},balanceOf:function(){var t=Blockchain.transaction.from;' +
              'return this.bankVault.get(t)}},module.exports=BankVaultContract;',
    'sourceType': 'js',
    'args': '[0]',
    'function': 'save'
}
```

## TransactionOptions

Represent Transaction parameters

Type: [Object][33]

**Examples**

```javascript
{
   chainID: 1,
   from: "n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5",
   to: "n1SAeQRVn33bamxN4ehWUT7JGdxipwn8b17",
   value: 10,
   nonce: 12,
   gasPrice: 1000000,
   gasLimit: 2000000
}
```

[9]: #transaction
[10]: #hashtransaction
[11]: #signtransaction
[12]: #toplainobject
[13]: #tostring
[14]: #toproto
[15]: #toprotostring
[16]: #fromproto
[17]: #contract
[18]: #transactionoptions
[33]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
[34]: #transactionsigntransaction
[35]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[36]: https://nodejs.org/api/buffer.html
[37]: #transaction
[38]: https://github.com/nebulasio/wiki/blob/master/rpc.md#sendrawtransaction
[39]: https://github.com/nebulasio/wiki/blob/master/tutorials/%5BEnglish%5D%20Nebulas%20101%20-%2002%20Transaction.md
[40]: https://github.com/nebulasio/wiki/blob/master/tutorials/%5BEnglish%5D%20Nebulas%20101%20-%2003%20Smart%20Contracts%20JavaScript.md
[41]: https://github.com/nebulasio/wiki/blob/c3f5ce8908c80e9104e3b512a7fdfd75f16ac38c/rpc.md#sendtransaction
[42]: #transactionoptions
[43]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[45]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
