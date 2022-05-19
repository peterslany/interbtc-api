[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / ElectrsAPI

# Interface: ElectrsAPI

Bitcoin Core API

## Implemented by

- [`DefaultElectrsAPI`](/classes/DefaultElectrsAPI.md)

## Table of contents

### Methods

- [getEarliestPaymentToRecipientAddressTxId](/interfaces/ElectrsAPI.md#getearliestpaymenttorecipientaddresstxid)
- [getLatestBlock](/interfaces/ElectrsAPI.md#getlatestblock)
- [getLatestBlockHeight](/interfaces/ElectrsAPI.md#getlatestblockheight)
- [getMerkleProof](/interfaces/ElectrsAPI.md#getmerkleproof)
- [getParsedExecutionParameters](/interfaces/ElectrsAPI.md#getparsedexecutionparameters)
- [getRawTransaction](/interfaces/ElectrsAPI.md#getrawtransaction)
- [getTransactionBlockHeight](/interfaces/ElectrsAPI.md#gettransactionblockheight)
- [getTransactionStatus](/interfaces/ElectrsAPI.md#gettransactionstatus)
- [getTx](/interfaces/ElectrsAPI.md#gettx)
- [getTxIdByOpReturn](/interfaces/ElectrsAPI.md#gettxidbyopreturn)
- [getUtxoAmount](/interfaces/ElectrsAPI.md#getutxoamount)
- [waitForOpreturn](/interfaces/ElectrsAPI.md#waitforopreturn)
- [waitForTxInclusion](/interfaces/ElectrsAPI.md#waitfortxinclusion)

## Methods

### <a id="getearliestpaymenttorecipientaddresstxid" name="getearliestpaymenttorecipientaddresstxid"></a> getEarliestPaymentToRecipientAddressTxId

▸ **getEarliestPaymentToRecipientAddressTxId**(`recipientAddress`, `amount?`): `Promise`<`string`\>

Fetch the earliest bitcoin transaction ID based on the recipient address and amount.
Throw an error if no such transaction is found.

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `recipientAddress` | `string` | Match the receiving address of a transaction output |
| `amount?` | `BitcoinAmount` | Match the amount (in BTC) of a transaction output that contains said recipientAddress. |

#### Returns

`Promise`<`string`\>

A Bitcoin transaction ID

#### Defined in

[src/external/electrs.ts:111](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L111)

___

### <a id="getlatestblock" name="getlatestblock"></a> getLatestBlock

▸ **getLatestBlock**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

The block hash of the latest Bitcoin block

#### Defined in

[src/external/electrs.ts:58](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L58)

___

### <a id="getlatestblockheight" name="getlatestblockheight"></a> getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The height of the latest Bitcoin block

#### Defined in

[src/external/electrs.ts:62](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L62)

___

### <a id="getmerkleproof" name="getmerkleproof"></a> getMerkleProof

▸ **getMerkleProof**(`txid`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`string`\>

The merkle inclusion proof for the transaction using bitcoind's merkleblock format.

#### Defined in

[src/external/electrs.ts:67](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L67)

___

### <a id="getparsedexecutionparameters" name="getparsedexecutionparameters"></a> getParsedExecutionParameters

▸ **getParsedExecutionParameters**(`txid`): `Promise`<[`Bytes`, `Bytes`]\>

Get the parsed (as Bytes) merkle proof and raw transaction

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | A Bitcoin transaction ID |

#### Returns

`Promise`<[`Bytes`, `Bytes`]\>

A tuple of Bytes object, representing [merkleProof, rawTx]

#### Defined in

[src/external/electrs.ts:145](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L145)

___

### <a id="getrawtransaction" name="getrawtransaction"></a> getRawTransaction

▸ **getRawTransaction**(`txid`): `Promise`<`string`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`string`\>

The raw transaction data, represented as a hex string

#### Defined in

[src/external/electrs.ts:83](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L83)

___

### <a id="gettransactionblockheight" name="gettransactionblockheight"></a> getTransactionBlockHeight

▸ **getTransactionBlockHeight**(`txid`): `Promise`<`undefined` \| `number`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`undefined` \| `number`\>

The height of the block the transaction was included in. If the block has not been confirmed, returns undefined.

#### Defined in

[src/external/electrs.ts:78](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L78)

___

### <a id="gettransactionstatus" name="gettransactionstatus"></a> getTransactionStatus

▸ **getTransactionStatus**(`txid`): `Promise`<`TxStatus`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |

#### Returns

`Promise`<`TxStatus`\>

A TxStatus object, containing the confirmation status and number of confirmations, plus block height if
the tx is included in the blockchain

#### Defined in

[src/external/electrs.ts:73](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L73)

___

### <a id="gettx" name="gettx"></a> getTx

▸ **getTx**(`txid`): `Promise`<`Transaction`\>

Fetch the Bitcoin transaction that matches the given TxId

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | A Bitcoin transaction ID |

#### Returns

`Promise`<`Transaction`\>

A Bitcoin Transaction object

#### Defined in

[src/external/electrs.ts:122](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L122)

___

### <a id="gettxidbyopreturn" name="gettxidbyopreturn"></a> getTxIdByOpReturn

▸ **getTxIdByOpReturn**(`opReturn`, `recipientAddress?`, `amount?`): `Promise`<`string`\>

Fetch the first bitcoin transaction ID based on the OP_RETURN field, recipient and amount.
Throw an error unless there is exactly one transaction with the given opcode.

**`remarks`**
Performs the lookup using an external service, Esplora. Requires the input string to be a hex

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `opReturn` | `string` | Data string used for matching the OP_CODE of Bitcoin transactions |
| `recipientAddress?` | `string` | Match the receiving address of a transaction that contains said op_return |
| `amount?` | `BitcoinAmount` | Match the amount (in BTC) of a transaction that contains said op_return and recipientAddress. This parameter is only considered if `recipientAddress` is defined. |

#### Returns

`Promise`<`string`\>

A Bitcoin transaction ID

#### Defined in

[src/external/electrs.ts:98](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L98)

___

### <a id="getutxoamount" name="getutxoamount"></a> getUtxoAmount

▸ **getUtxoAmount**(`txid`, `recipient`): `Promise`<`number`\>

Fetch the Bitcoin UTXO amount that matches the given TxId and recipient

**`remarks`**
Performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | A Bitcoin transaction ID |
| `recipient` | `string` | A Bitcoin scriptpubkey address |

#### Returns

`Promise`<`number`\>

A UTXO amount if found, 0 otherwise

#### Defined in

[src/external/electrs.ts:134](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L134)

___

### <a id="waitforopreturn" name="waitforopreturn"></a> waitForOpreturn

▸ **waitForOpreturn**(`data`, `timeoutMs`, `retryIntervalMs`): `Promise`<`string`\>

Return a promise that either resolves to the first txid with the given opreturn `data`,
or rejects if the `timeout` has elapsed.

**`remarks`**
Every 5 seconds, performs the lookup using an external service, Esplora

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` | The opReturn of the bitcoin transaction |
| `timeoutMs` | `number` | The duration until the Promise times out (in milliseconds) |
| `retryIntervalMs` | `number` | The time to wait (in milliseconds) between retries |

#### Returns

`Promise`<`string`\>

The Bitcoin txid

#### Defined in

[src/external/electrs.ts:159](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L159)

___

### <a id="waitfortxinclusion" name="waitfortxinclusion"></a> waitForTxInclusion

▸ **waitForTxInclusion**(`txid`, `timeoutMs`, `retryIntervalMs`): `Promise`<`TxStatus`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |
| `timeoutMs` | `number` | - |
| `retryIntervalMs` | `number` | - |

#### Returns

`Promise`<`TxStatus`\>

A TxStatus object, containing the confirmation status and number of confirmations, plus block height if
the tx is included in the blockchain

#### Defined in

[src/external/electrs.ts:165](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/external/electrs.ts#L165)
