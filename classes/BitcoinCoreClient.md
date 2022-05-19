[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / BitcoinCoreClient

# Class: BitcoinCoreClient

## Table of contents

### Constructors

- [constructor](/classes/BitcoinCoreClient.md#constructor)

### Properties

- [client](/classes/BitcoinCoreClient.md#client)

### Methods

- [broadcastTx](/classes/BitcoinCoreClient.md#broadcasttx)
- [createWallet](/classes/BitcoinCoreClient.md#createwallet)
- [formatRawTxInput](/classes/BitcoinCoreClient.md#formatrawtxinput)
- [getBalance](/classes/BitcoinCoreClient.md#getbalance)
- [getBestBlockHash](/classes/BitcoinCoreClient.md#getbestblockhash)
- [getMempoolInfo](/classes/BitcoinCoreClient.md#getmempoolinfo)
- [loadWallet](/classes/BitcoinCoreClient.md#loadwallet)
- [mineBlocks](/classes/BitcoinCoreClient.md#mineblocks)
- [sendBtcTxAndMine](/classes/BitcoinCoreClient.md#sendbtctxandmine)
- [sendToAddress](/classes/BitcoinCoreClient.md#sendtoaddress)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new BitcoinCoreClient**(`network`, `host`, `username`, `password`, `port`, `wallet`)

Initialize the Bitcoin-core client, which is a js equivalent to bitcoin-cli

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `network` | `string` | Bitcoin network (mainnet, testnet, regtest) |
| `host` | `string` | URL of Bitcoin node (e.g. localhost) |
| `username` | `string` | User for RPC authentication |
| `password` | `string` | Password for RPC authentication |
| `port` | `string` | Bitcoin node connection port (e.g. 18443) |
| `wallet` | `string` | Wallet to use if several are available. See https://github.com/ruimarinho/bitcoin-core#multiwallet |

#### Defined in

[src/utils/bitcoin-core-client.ts:24](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L24)

## Properties

### <a id="client" name="client"></a> client

• **client**: `any`

#### Defined in

[src/utils/bitcoin-core-client.ts:13](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L13)

## Methods

### <a id="broadcasttx" name="broadcasttx"></a> broadcastTx

▸ **broadcastTx**(`recipient`, `amount`, `data?`): `Promise`<{ `rawTx`: `string` ; `txid`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `data?` | `string` |

#### Returns

`Promise`<{ `rawTx`: `string` ; `txid`: `string`  }\>

#### Defined in

[src/utils/bitcoin-core-client.ts:59](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L59)

___

### <a id="createwallet" name="createwallet"></a> createWallet

▸ **createWallet**(`name`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:109](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L109)

___

### <a id="formatrawtxinput" name="formatrawtxinput"></a> formatRawTxInput

▸ **formatRawTxInput**(`recipient`, `amount`, `data?`): `RecipientsToUTXOAmounts`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `Big` |
| `data?` | `string` |

#### Returns

`RecipientsToUTXOAmounts`[]

#### Defined in

[src/utils/bitcoin-core-client.ts:50](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L50)

___

### <a id="getbalance" name="getbalance"></a> getBalance

▸ **getBalance**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:92](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L92)

___

### <a id="getbestblockhash" name="getbestblockhash"></a> getBestBlockHash

▸ **getBestBlockHash**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:105](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L105)

___

### <a id="getmempoolinfo" name="getmempoolinfo"></a> getMempoolInfo

▸ **getMempoolInfo**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:101](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L101)

___

### <a id="loadwallet" name="loadwallet"></a> loadWallet

▸ **loadWallet**(`name`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:113](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L113)

___

### <a id="mineblocks" name="mineblocks"></a> mineBlocks

▸ **mineBlocks**(`n`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:86](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L86)

___

### <a id="sendbtctxandmine" name="sendbtctxandmine"></a> sendBtcTxAndMine

▸ **sendBtcTxAndMine**(`recipient`, `amount`, `blocksToMine`, `data?`): `Promise`<{ `rawTx`: `string` ; `txid`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `recipient` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `blocksToMine` | `number` |
| `data?` | `string` |

#### Returns

`Promise`<{ `rawTx`: `string` ; `txid`: `string`  }\>

#### Defined in

[src/utils/bitcoin-core-client.ts:35](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L35)

___

### <a id="sendtoaddress" name="sendtoaddress"></a> sendToAddress

▸ **sendToAddress**(`address`, `amount`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/utils/bitcoin-core-client.ts:96](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/bitcoin-core-client.ts#L96)
