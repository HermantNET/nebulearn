### Table of Contents

* [Account][1]
  * [setPrivateKey][2]
  * [getPrivateKey][3]
  * [getPrivateKeyString][4]
  * [getPublicKey][5]
  * [getPublicKeyString][6]
  * [getAddress][7]
  * [getAddressString][8]
  * [toKey][9]
  * [toKeyString][10]
  * [fromKey][11]
  * [NewAccount][12]
  * [isValidAddress][13]
  * [fromAddress][14]

## Account

Account constructor.
Class encapsulate main operation with account entity.

**Parameters**

* `priv` **Hash** Account private key.
* `path` **[String][15]**

**Examples**

```javascript
var account = new Account(
  new Buffer(
    'ac3773e06ae74c0fa566b0e421d4e391333f31aef90b383f0c0e83e4873609d6',
    'hex'
  )
)
```

### setPrivateKey

Private Key setter.

**Parameters**

* `priv` **Hash** Account private key.

**Examples**

```javascript
account.setPrivateKey(
  'ac3773e06ae74c0fa566b0e421d4e391333f31aef90b383f0c0e83e4873609d6'
)
```

### getPrivateKey

Private Key getter.

**Examples**

```javascript
var privKey = account.getPrivateKey()
//<Buffer 5b ed 67 f9 9c b3 31 9e 0c 6f 6a 03 54 8b e3 c8 c5 2a 83 64 46 4f 88 6f> 24
```

Returns **[Buffer][16]** Account private key.

### getPrivateKeyString

Get Private Key in hex string format.

**Examples**

```javascript
var privKey = account.getPrivateKeyString()
//"ac3773e06ae74c0fa566b0e421d4e391333f31aef90b383f0c0e83e4873609d6"
```

Returns **HexString** Account private key in String format.

### getPublicKey

Public Key getter.

**Examples**

```javascript
var publicKey = account.getPublicKey()
//<Buffer c0 96 aa 4e 66 c7 4a 9a c7 18 31 f1 24 72 2a c1 3e b5 df 7f 97 1b 13 1d 46 a2 8a e6 81 c6 1d 96 f7 07 d0 aa e9 a7 67 436b 68 af a8 f0 96 65 17 24 29 ... >
```

Returns **[Buffer][16]** Account public key.

### getPublicKeyString

Get Public Key in hex string format.

**Examples**

```javascript
var publicKey = account.getPublicKey()
//"f18ec04019dd131bbcfada4020b001d547244d768f144ef947577ce53a13ad690eb43e4b02a8daa3c168045cd122c0685f083e1656756ba7982721322ebe4da7"
```

Returns **HexString** Account public key in String format.

### getAddress

Accaunt address getter.

**Examples**

```javascript
var publicKey = account.getAddress()
//<Buffer 7f 87 83 58 46 96 12 7d 1a c0 57 1a 42 87 c6 25 36 08 ff 32 61 36 51 7c>
```

Returns **[Buffer][16]** Account address.

### getAddressString

Get account address in hex string format.

**Examples**

```javascript
var publicKey = account.getAddressString()
//"802d529bf55d6693b3ac72c59b4a7d159da53cae5a7bf99c"
```

Returns **HexString** Account address in String format.

### toKey

Generate key buy passphrase and options.

**Parameters**

* `password` **Password** Provided password.
* `opts` **KeyOptions** Key options.

**Examples**

```javascript
var key = account.toKey('passphrase')
```

Returns **Key** Key Object.

### toKeyString

Generate key buy passphrase and options.
Return in JSON format.

**Parameters**

* `password` **Password** Provided password.
* `opts` **KeyOptions** Key options.

**Examples**

```javascript
var key = account.toKeyString('passphrase')
```

Returns **[String][15]** JSON stringify Key.

### fromKey

Restore account from key and passphrase.

**Parameters**

* `input` **Key** Key Object.
* `password` **Password** Provided password.
* `nonStrict` **[Boolean][17]** Strict сase sensitivity flag.

### NewAccount

Account factory method.
Create random account.

**Examples**

```javascript
var account = Account.NewAccount()
```

Returns **[Account][18]** Instance of Account constructor.

### isValidAddress

Address validation method.

**Parameters**

* `addr` **String/Hash** Account address.
* `type` **[Number][19]** NormalType / ContractType

**Examples**

```javascript
if (Account.isValidAddress('n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5')) {
  // some code
}
```

Returns **[Boolean][17]** Is address has correct format.

### fromAddress

Restore account from address.
Receive addr or Account instance.
If addr is Account instance return new Account instance with same PrivateKey.

**Parameters**

* `addr`
* `null-null` **(Hash | [Object][20])** Client address or Account instance.

**Examples**

```javascript
var account = Account.fromAddress('n1QZMXSZtW7BUerroSms4axNfyBGyFGkrh5')
```

Returns **[Account][18]** Instance of Account restored from address.

[1]: #account
[2]: #setprivatekey
[3]: #getprivatekey
[4]: #getprivatekeystring
[5]: #getpublickey
[6]: #getpublickeystring
[7]: #getaddress
[8]: #getaddressstring
[9]: #tokey
[10]: #tokeystring
[11]: #fromkey
[12]: #newaccount
[13]: #isvalidaddress
[14]: #fromaddress
[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
[16]: https://nodejs.org/api/buffer.html
[17]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[18]: #account
[19]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number
[20]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
