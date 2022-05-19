[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultElectrsAPI

# Class: DefaultElectrsAPI

## Implements

- [`ElectrsAPI`](/interfaces/ElectrsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultElectrsAPI.md#constructor)

### Properties

- [addressApi](/classes/DefaultElectrsAPI.md#addressapi)
- [blockApi](/classes/DefaultElectrsAPI.md#blockapi)
- [scripthashApi](/classes/DefaultElectrsAPI.md#scripthashapi)
- [txApi](/classes/DefaultElectrsAPI.md#txapi)

### Methods

- [broadcastRawTransaction](/classes/DefaultElectrsAPI.md#broadcastrawtransaction)
- [getData](/classes/DefaultElectrsAPI.md#getdata)
- [getEarliestPaymentToRecipientAddressTxId](/classes/DefaultElectrsAPI.md#getearliestpaymenttorecipientaddresstxid)
- [getLatestBlock](/classes/DefaultElectrsAPI.md#getlatestblock)
- [getLatestBlockHeight](/classes/DefaultElectrsAPI.md#getlatestblockheight)
- [getMerkleProof](/classes/DefaultElectrsAPI.md#getmerkleproof)
- [getParsedExecutionParameters](/classes/DefaultElectrsAPI.md#getparsedexecutionparameters)
- [getRawTransaction](/classes/DefaultElectrsAPI.md#getrawtransaction)
- [getTransactionBlockHeight](/classes/DefaultElectrsAPI.md#gettransactionblockheight)
- [getTransactionStatus](/classes/DefaultElectrsAPI.md#gettransactionstatus)
- [getTx](/classes/DefaultElectrsAPI.md#gettx)
- [getTxIdByOpReturn](/classes/DefaultElectrsAPI.md#gettxidbyopreturn)
- [getTxStatus](/classes/DefaultElectrsAPI.md#gettxstatus)
- [getUtxoAmount](/classes/DefaultElectrsAPI.md#getutxoamount)
- [txOutputHasRecipientAndAmount](/classes/DefaultElectrsAPI.md#txoutputhasrecipientandamount)
- [txoHasAtLeastAmount](/classes/DefaultElectrsAPI.md#txohasatleastamount)
- [waitForOpreturn](/classes/DefaultElectrsAPI.md#waitforopreturn)
- [waitForTxInclusion](/classes/DefaultElectrsAPI.md#waitfortxinclusion)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultElectrsAPI**(`network?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `network` | `string` | `"mainnet"` |

#### Defined in

[src/external/electrs.ts:174](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L174)

## Properties

### <a id="addressapi" name="addressapi"></a> addressApi

• `Private` **addressApi**: `AddressApi`

#### Defined in

[src/external/electrs.ts:172](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L172)

___

### <a id="blockapi" name="blockapi"></a> blockApi

• `Private` **blockApi**: `BlockApi`

#### Defined in

[src/external/electrs.ts:169](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L169)

___

### <a id="scripthashapi" name="scripthashapi"></a> scripthashApi

• `Private` **scripthashApi**: `ScripthashApi`

#### Defined in

[src/external/electrs.ts:171](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L171)

___

### <a id="txapi" name="txapi"></a> txApi

• `Private` **txApi**: `TxApi`

#### Defined in

[src/external/electrs.ts:170](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L170)

## Methods

### <a id="broadcastrawtransaction" name="broadcastrawtransaction"></a> broadcastRawTransaction

▸ **broadcastRawTransaction**(`hex`): `Promise`<`AxiosResponse`<`string`\>\>

Broadcasts a transaction to the Bitcoin network configured in the constructor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hex` | `string` | A hex-encoded raw transaction to be broadcast to the Bitcoin blockchain |

#### Returns

`Promise`<`AxiosResponse`<`string`\>\>

The txid of the transaction

#### Defined in

[src/external/electrs.ts:364](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L364)

___

### <a id="getdata" name="getdata"></a> getData

▸ **getData**<`T`\>(`response`): `Promise`<`T`\>

Parse an AxiosResponse Promise

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `response` | `Promise`<`AxiosResponse`<`T`\>\> | A generic AxiosResponse Promise |

#### Returns

`Promise`<`T`\>

The data in the response

#### Defined in

[src/external/electrs.ts:429](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L429)

___

### <a id="getearliestpaymenttorecipientaddresstxid" name="getearliestpaymenttorecipientaddresstxid"></a> getEarliestPaymentToRecipientAddressTxId

▸ **getEarliestPaymentToRecipientAddressTxId**(`recipientAddress`, `amount?`): `Promise`<`string`\>

Fetch the earliest bitcoin transaction ID based on the recipient address and amount.
Throw an error if no such transaction is found.

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipientAddress` | `string` |
| `amount?` | `BitcoinAmount` |

#### Returns

`Promise`<`string`\>

A Bitcoin transaction ID

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getEarliestPaymentToRecipientAddressTxId](/interfaces/ElectrsAPI.md#getearliestpaymenttorecipientaddresstxid)

#### Defined in

[src/external/electrs.ts:229](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L229)

___

### <a id="getlatestblock" name="getlatestblock"></a> getLatestBlock

▸ **getLatestBlock**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The block hash of the latest Bitcoin block

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getLatestBlock](/interfaces/ElectrsAPI.md#getlatestblock)

#### Defined in

[src/external/electrs.ts:196](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L196)

___

### <a id="getlatestblockheight" name="getlatestblockheight"></a> getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The height of the latest Bitcoin block

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getLatestBlockHeight](/interfaces/ElectrsAPI.md#getlatestblockheight)

#### Defined in

[src/external/electrs.ts:200](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L200)

___

### <a id="getmerkleproof" name="getmerkleproof"></a> getMerkleProof

▸ **getMerkleProof**(`txid`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`string`\>

The merkle inclusion proof for the transaction using bitcoind's merkleblock format.

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getMerkleProof](/interfaces/ElectrsAPI.md#getmerkleproof)

#### Defined in

[src/external/electrs.ts:204](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L204)

___

### <a id="getparsedexecutionparameters" name="getparsedexecutionparameters"></a> getParsedExecutionParameters

▸ **getParsedExecutionParameters**(`txid`): `Promise`<[`Bytes`, `Bytes`]\>

Get the parsed (as Bytes) merkle proof and raw transaction

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<[`Bytes`, `Bytes`]\>

A tuple of Bytes object, representing [merkleProof, rawTx]

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getParsedExecutionParameters](/interfaces/ElectrsAPI.md#getparsedexecutionparameters)

#### Defined in

[src/external/electrs.ts:396](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L396)

___

### <a id="getrawtransaction" name="getrawtransaction"></a> getRawTransaction

▸ **getRawTransaction**(`txid`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`string`\>

The raw transaction data, represented as a hex string

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getRawTransaction](/interfaces/ElectrsAPI.md#getrawtransaction)

#### Defined in

[src/external/electrs.ts:411](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L411)

___

### <a id="gettransactionblockheight" name="gettransactionblockheight"></a> getTransactionBlockHeight

▸ **getTransactionBlockHeight**(`txid`): `Promise`<`undefined` \| `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`undefined` \| `number`\>

The height of the block the transaction was included in. If the block has not been confirmed, returns undefined.

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getTransactionBlockHeight](/interfaces/ElectrsAPI.md#gettransactionblockheight)

#### Defined in

[src/external/electrs.ts:392](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L392)

___

### <a id="gettransactionstatus" name="gettransactionstatus"></a> getTransactionStatus

▸ **getTransactionStatus**(`txid`): `Promise`<`TxStatus`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`TxStatus`\>

A TxStatus object, containing the confirmation status and number of confirmations, plus block height if
the tx is included in the blockchain

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getTransactionStatus](/interfaces/ElectrsAPI.md#gettransactionstatus)

#### Defined in

[src/external/electrs.ts:368](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L368)

___

### <a id="gettx" name="gettx"></a> getTx

▸ **getTx**(`txid`): `Promise`<`Transaction`\>

Fetch the Bitcoin transaction that matches the given TxId

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |

#### Returns

`Promise`<`Transaction`\>

A Bitcoin Transaction object

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getTx](/interfaces/ElectrsAPI.md#gettx)

#### Defined in

[src/external/electrs.ts:208](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L208)

___

### <a id="gettxidbyopreturn" name="gettxidbyopreturn"></a> getTxIdByOpReturn

▸ **getTxIdByOpReturn**(`opReturn`, `recipientAddress?`, `amount?`): `Promise`<`string`\>

Fetch the first bitcoin transaction ID based on the OP_RETURN field, recipient and amount.
Throw an error unless there is exactly one transaction with the given opcode.

**`remarks`**
Performs the lookup using an external service, Esplora. Requires the input string to be a hex

#### Parameters

| Name | Type |
| :------ | :------ |
| `opReturn` | `string` |
| `recipientAddress?` | `string` |
| `amount?` | `BitcoinAmount` |

#### Returns

`Promise`<`string`\>

A Bitcoin transaction ID

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getTxIdByOpReturn](/interfaces/ElectrsAPI.md#gettxidbyopreturn)

#### Defined in

[src/external/electrs.ts:272](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L272)

___

### <a id="gettxstatus" name="gettxstatus"></a> getTxStatus

▸ `Private` **getTxStatus**(`txid`): `Promise`<`Status`\>

Use the TxAPI to get the confirmationation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`Status`\>

A Status object, containing transaction settlement information

#### Defined in

[src/external/electrs.ts:420](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L420)

___

### <a id="getutxoamount" name="getutxoamount"></a> getUtxoAmount

▸ **getUtxoAmount**(`txid`, `recipient`): `Promise`<`number`\>

Fetch the Bitcoin UTXO amount that matches the given TxId and recipient

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |
| `recipient` | `string` |

#### Returns

`Promise`<`number`\>

A UTXO amount if found, 0 otherwise

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[getUtxoAmount](/interfaces/ElectrsAPI.md#getutxoamount)

#### Defined in

[src/external/electrs.ts:212](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L212)

___

### <a id="txoutputhasrecipientandamount" name="txoutputhasrecipientandamount"></a> txOutputHasRecipientAndAmount

▸ `Private` **txOutputHasRecipientAndAmount**(`vout`, `recipientAddress?`, `amount?`): `boolean`

Check if a given UTXO sends at least `amountAsBTC` to a certain `recipientAddress`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vout` | `VOut` | UTXO object |
| `recipientAddress?` | `string` | (Optional) Address of recipient |
| `amount?` | `BitcoinAmount` | - |

#### Returns

`boolean`

Boolean value

#### Defined in

[src/external/electrs.ts:349](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L349)

___

### <a id="txohasatleastamount" name="txohasatleastamount"></a> txoHasAtLeastAmount

▸ `Private` **txoHasAtLeastAmount**(`txo`, `amount?`): `boolean`

Check if a given UTXO has at least `amountAsBTC`

#### Parameters

| Name | Type |
| :------ | :------ |
| `txo` | `UTXO` \| `VOut` |
| `amount?` | `BitcoinAmount` |

#### Returns

`boolean`

Boolean value

#### Defined in

[src/external/electrs.ts:260](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L260)

___

### <a id="waitforopreturn" name="waitforopreturn"></a> waitForOpreturn

▸ **waitForOpreturn**(`data`, `timeoutMs`, `retryIntervalMs`): `Promise`<`string`\>

Return a promise that either resolves to the first txid with the given opreturn `data`,
or rejects if the `timeout` has elapsed.

**`remarks`**
Every 5 seconds, performs the lookup using an external service, Esplora

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `timeoutMs` | `number` |
| `retryIntervalMs` | `number` |

#### Returns

`Promise`<`string`\>

The Bitcoin txid

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[waitForOpreturn](/interfaces/ElectrsAPI.md#waitforopreturn)

#### Defined in

[src/external/electrs.ts:300](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L300)

___

### <a id="waitfortxinclusion" name="waitfortxinclusion"></a> waitForTxInclusion

▸ **waitForTxInclusion**(`txid`, `timeoutMs`, `retryIntervalMs`): `Promise`<`TxStatus`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `txid` | `string` |
| `timeoutMs` | `number` |
| `retryIntervalMs` | `number` |

#### Returns

`Promise`<`TxStatus`\>

A TxStatus object, containing the confirmation status and number of confirmations, plus block height if
the tx is included in the blockchain

#### Implementation of

[ElectrsAPI](/interfaces/ElectrsAPI.md).[waitForTxInclusion](/interfaces/ElectrsAPI.md#waitfortxinclusion)

#### Defined in

[src/external/electrs.ts:319](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L319)
