[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultBTCRelayAPI

# Class: DefaultBTCRelayAPI

## Implements

- [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultBTCRelayAPI.md#constructor)

### Methods

- [getLatestBlock](/classes/DefaultBTCRelayAPI.md#getlatestblock)
- [getLatestBlockHeight](/classes/DefaultBTCRelayAPI.md#getlatestblockheight)
- [getStableBitcoinConfirmations](/classes/DefaultBTCRelayAPI.md#getstablebitcoinconfirmations)
- [getStableParachainConfirmations](/classes/DefaultBTCRelayAPI.md#getstableparachainconfirmations)
- [isBlockInRelay](/classes/DefaultBTCRelayAPI.md#isblockinrelay)
- [verifyTransactionInclusion](/classes/DefaultBTCRelayAPI.md#verifytransactioninclusion)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultBTCRelayAPI**(`api`, `electrsAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |

#### Defined in

[src/parachain/btc-relay.ts:45](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L45)

## Methods

### <a id="getlatestblock" name="getlatestblock"></a> getLatestBlock

▸ **getLatestBlock**(): `Promise`<`BitcoinH256Le`\>

#### Returns

`Promise`<`BitcoinH256Le`\>

The raw transaction data, represented as a Buffer object

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[getLatestBlock](/interfaces/BTCRelayAPI.md#getlatestblock)

#### Defined in

[src/parachain/btc-relay.ts:55](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L55)

___

### <a id="getlatestblockheight" name="getlatestblockheight"></a> getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The height of the latest Bitcoin block that was rekayed by the BTC-Relay

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[getLatestBlockHeight](/interfaces/BTCRelayAPI.md#getlatestblockheight)

#### Defined in

[src/parachain/btc-relay.ts:59](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L59)

___

### <a id="getstablebitcoinconfirmations" name="getstablebitcoinconfirmations"></a> getStableBitcoinConfirmations

▸ **getStableBitcoinConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on Bitcoin

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[getStableBitcoinConfirmations](/interfaces/BTCRelayAPI.md#getstablebitcoinconfirmations)

#### Defined in

[src/parachain/btc-relay.ts:47](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L47)

___

### <a id="getstableparachainconfirmations" name="getstableparachainconfirmations"></a> getStableParachainConfirmations

▸ **getStableParachainConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on the parachain

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[getStableParachainConfirmations](/interfaces/BTCRelayAPI.md#getstableparachainconfirmations)

#### Defined in

[src/parachain/btc-relay.ts:51](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L51)

___

### <a id="isblockinrelay" name="isblockinrelay"></a> isBlockInRelay

▸ **isBlockInRelay**(`blockHash`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockHash` | `string` |

#### Returns

`Promise`<`boolean`\>

True if the block is in the relay, false otherwise.

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[isBlockInRelay](/interfaces/BTCRelayAPI.md#isblockinrelay)

#### Defined in

[src/parachain/btc-relay.ts:73](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L73)

___

### <a id="verifytransactioninclusion" name="verifytransactioninclusion"></a> verifyTransactionInclusion

▸ **verifyTransactionInclusion**(`txid`, `confirmations?`): `Promise`<`void`\>

Verifies the inclusion of a transaction with `txid` in the Bitcoin blockchain

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `txid` | `string` | `undefined` |
| `confirmations` | `number` | `DEFAULT_STABLE_CONFIRMATIONS` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[BTCRelayAPI](/interfaces/BTCRelayAPI.md).[verifyTransactionInclusion](/interfaces/BTCRelayAPI.md#verifytransactioninclusion)

#### Defined in

[src/parachain/btc-relay.ts:63](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L63)
