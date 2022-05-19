[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / Transaction

# Class: Transaction

[bitcoin](/modules/bitcoin.md).Transaction

## Table of contents

### Constructors

- [constructor](/classes/bitcoin.Transaction.md#constructor)

### Properties

- [\_\_toBuffer](/classes/bitcoin.Transaction.md#__tobuffer)
- [ins](/classes/bitcoin.Transaction.md#ins)
- [locktime](/classes/bitcoin.Transaction.md#locktime)
- [outs](/classes/bitcoin.Transaction.md#outs)
- [version](/classes/bitcoin.Transaction.md#version)
- [ADVANCED\_TRANSACTION\_FLAG](/classes/bitcoin.Transaction.md#advanced_transaction_flag)
- [ADVANCED\_TRANSACTION\_MARKER](/classes/bitcoin.Transaction.md#advanced_transaction_marker)
- [DEFAULT\_SEQUENCE](/classes/bitcoin.Transaction.md#default_sequence)
- [SIGHASH\_ALL](/classes/bitcoin.Transaction.md#sighash_all)
- [SIGHASH\_ANYONECANPAY](/classes/bitcoin.Transaction.md#sighash_anyonecanpay)
- [SIGHASH\_NONE](/classes/bitcoin.Transaction.md#sighash_none)
- [SIGHASH\_SINGLE](/classes/bitcoin.Transaction.md#sighash_single)

### Methods

- [addInput](/classes/bitcoin.Transaction.md#addinput)
- [addOutput](/classes/bitcoin.Transaction.md#addoutput)
- [byteLength](/classes/bitcoin.Transaction.md#bytelength)
- [clone](/classes/bitcoin.Transaction.md#clone)
- [getHash](/classes/bitcoin.Transaction.md#gethash)
- [getId](/classes/bitcoin.Transaction.md#getid)
- [hasWitnesses](/classes/bitcoin.Transaction.md#haswitnesses)
- [hashForSignature](/classes/bitcoin.Transaction.md#hashforsignature)
- [hashForWitnessV0](/classes/bitcoin.Transaction.md#hashforwitnessv0)
- [isCoinbase](/classes/bitcoin.Transaction.md#iscoinbase)
- [setInputScript](/classes/bitcoin.Transaction.md#setinputscript)
- [setWitness](/classes/bitcoin.Transaction.md#setwitness)
- [toBuffer](/classes/bitcoin.Transaction.md#tobuffer)
- [toHex](/classes/bitcoin.Transaction.md#tohex)
- [virtualSize](/classes/bitcoin.Transaction.md#virtualsize)
- [weight](/classes/bitcoin.Transaction.md#weight)
- [fromBuffer](/classes/bitcoin.Transaction.md#frombuffer)
- [fromHex](/classes/bitcoin.Transaction.md#fromhex)
- [isCoinbaseHash](/classes/bitcoin.Transaction.md#iscoinbasehash)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Transaction**()

## Properties

### <a id="__tobuffer" name="__tobuffer"></a> \_\_toBuffer

• `Private` **\_\_toBuffer**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:51

___

### <a id="ins" name="ins"></a> ins

• **ins**: [`TxInput`](/interfaces/bitcoin.TxInput.md)[]

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:25

___

### <a id="locktime" name="locktime"></a> locktime

• **locktime**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:24

___

### <a id="outs" name="outs"></a> outs

• **outs**: [`TxOutput`](/interfaces/bitcoin.TxOutput.md)[]

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:26

___

### <a id="version" name="version"></a> version

• **version**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:23

___

### <a id="advanced_transaction_flag" name="advanced_transaction_flag"></a> ADVANCED\_TRANSACTION\_FLAG

▪ `Static` `Readonly` **ADVANCED\_TRANSACTION\_FLAG**: ``1``

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:19

___

### <a id="advanced_transaction_marker" name="advanced_transaction_marker"></a> ADVANCED\_TRANSACTION\_MARKER

▪ `Static` `Readonly` **ADVANCED\_TRANSACTION\_MARKER**: ``0``

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:18

___

### <a id="default_sequence" name="default_sequence"></a> DEFAULT\_SEQUENCE

▪ `Static` `Readonly` **DEFAULT\_SEQUENCE**: ``4294967295``

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:13

___

### <a id="sighash_all" name="sighash_all"></a> SIGHASH\_ALL

▪ `Static` `Readonly` **SIGHASH\_ALL**: ``1``

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:14

___

### <a id="sighash_anyonecanpay" name="sighash_anyonecanpay"></a> SIGHASH\_ANYONECANPAY

▪ `Static` `Readonly` **SIGHASH\_ANYONECANPAY**: ``128``

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:17

___

### <a id="sighash_none" name="sighash_none"></a> SIGHASH\_NONE

▪ `Static` `Readonly` **SIGHASH\_NONE**: ``2``

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:15

___

### <a id="sighash_single" name="sighash_single"></a> SIGHASH\_SINGLE

▪ `Static` `Readonly` **SIGHASH\_SINGLE**: ``3``

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:16

## Methods

### <a id="addinput" name="addinput"></a> addInput

▸ **addInput**(`hash`, `index`, `sequence?`, `scriptSig?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |
| `index` | `number` |
| `sequence?` | `number` |
| `scriptSig?` | `Buffer` |

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:28

___

### <a id="addoutput" name="addoutput"></a> addOutput

▸ **addOutput**(`scriptPubKey`, `value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptPubKey` | `Buffer` |
| `value` | `number` |

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:29

___

### <a id="bytelength" name="bytelength"></a> byteLength

▸ **byteLength**(`_ALLOW_WITNESS?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_ALLOW_WITNESS?` | `boolean` |

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:33

___

### <a id="clone" name="clone"></a> clone

▸ **clone**(): [`Transaction`](/classes/bitcoin.Transaction.md)

#### Returns

[`Transaction`](/classes/bitcoin.Transaction.md)

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:34

___

### <a id="gethash" name="gethash"></a> getHash

▸ **getHash**(`forWitness?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `forWitness?` | `boolean` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:45

___

### <a id="getid" name="getid"></a> getId

▸ **getId**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:46

___

### <a id="haswitnesses" name="haswitnesses"></a> hasWitnesses

▸ **hasWitnesses**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:30

___

### <a id="hashforsignature" name="hashforsignature"></a> hashForSignature

▸ **hashForSignature**(`inIndex`, `prevOutScript`, `hashType`): `Buffer`

Hash transaction for signing a specific input.

Bitcoin uses a different hash for each signed transaction input.
This method copies the transaction, makes the necessary changes based on the
hashType, and then hashes the result.
This hash can then be used to sign the provided transaction input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `inIndex` | `number` |
| `prevOutScript` | `Buffer` |
| `hashType` | `number` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:43

___

### <a id="hashforwitnessv0" name="hashforwitnessv0"></a> hashForWitnessV0

▸ **hashForWitnessV0**(`inIndex`, `prevOutScript`, `value`, `hashType`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inIndex` | `number` |
| `prevOutScript` | `Buffer` |
| `value` | `number` |
| `hashType` | `number` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:44

___

### <a id="iscoinbase" name="iscoinbase"></a> isCoinbase

▸ **isCoinbase**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:27

___

### <a id="setinputscript" name="setinputscript"></a> setInputScript

▸ **setInputScript**(`index`, `scriptSig`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `scriptSig` | `Buffer` |

#### Returns

`void`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:49

___

### <a id="setwitness" name="setwitness"></a> setWitness

▸ **setWitness**(`index`, `witness`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `witness` | `Buffer`[] |

#### Returns

`void`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:50

___

### <a id="tobuffer" name="tobuffer"></a> toBuffer

▸ **toBuffer**(`buffer?`, `initialOffset?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer?` | `Buffer` |
| `initialOffset?` | `number` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:47

___

### <a id="tohex" name="tohex"></a> toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:48

___

### <a id="virtualsize" name="virtualsize"></a> virtualSize

▸ **virtualSize**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:32

___

### <a id="weight" name="weight"></a> weight

▸ **weight**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:31

___

### <a id="frombuffer" name="frombuffer"></a> fromBuffer

▸ `Static` **fromBuffer**(`buffer`, `_NO_STRICT?`): [`Transaction`](/classes/bitcoin.Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `_NO_STRICT?` | `boolean` |

#### Returns

[`Transaction`](/classes/bitcoin.Transaction.md)

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:20

___

### <a id="fromhex" name="fromhex"></a> fromHex

▸ `Static` **fromHex**(`hex`): [`Transaction`](/classes/bitcoin.Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`Transaction`](/classes/bitcoin.Transaction.md)

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:21

___

### <a id="iscoinbasehash" name="iscoinbasehash"></a> isCoinbaseHash

▸ `Static` **isCoinbaseHash**(`buffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/transaction.d.ts:22
