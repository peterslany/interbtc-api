[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / BTCRelayAPI

# Interface: BTCRelayAPI

## Implemented by

- [`DefaultBTCRelayAPI`](/classes/DefaultBTCRelayAPI.md)

## Table of contents

### Methods

- [getLatestBlock](/interfaces/BTCRelayAPI.md#getlatestblock)
- [getLatestBlockHeight](/interfaces/BTCRelayAPI.md#getlatestblockheight)
- [getStableBitcoinConfirmations](/interfaces/BTCRelayAPI.md#getstablebitcoinconfirmations)
- [getStableParachainConfirmations](/interfaces/BTCRelayAPI.md#getstableparachainconfirmations)
- [isBlockInRelay](/interfaces/BTCRelayAPI.md#isblockinrelay)
- [verifyTransactionInclusion](/interfaces/BTCRelayAPI.md#verifytransactioninclusion)

## Methods

### <a id="getlatestblock" name="getlatestblock"></a> getLatestBlock

▸ **getLatestBlock**(): `Promise`<`BitcoinH256Le`\>

#### Returns

`Promise`<`BitcoinH256Le`\>

The raw transaction data, represented as a Buffer object

#### Defined in

[src/parachain/btc-relay.ts:26](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L26)

___

### <a id="getlatestblockheight" name="getlatestblockheight"></a> getLatestBlockHeight

▸ **getLatestBlockHeight**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The height of the latest Bitcoin block that was rekayed by the BTC-Relay

#### Defined in

[src/parachain/btc-relay.ts:30](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L30)

___

### <a id="getstablebitcoinconfirmations" name="getstablebitcoinconfirmations"></a> getStableBitcoinConfirmations

▸ **getStableBitcoinConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on Bitcoin

#### Defined in

[src/parachain/btc-relay.ts:17](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L17)

___

### <a id="getstableparachainconfirmations" name="getstableparachainconfirmations"></a> getStableParachainConfirmations

▸ **getStableParachainConfirmations**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

A global security parameter: the required block confirmations
for a transaction to be considered stable on the parachain

#### Defined in

[src/parachain/btc-relay.ts:22](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L22)

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

#### Defined in

[src/parachain/btc-relay.ts:41](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L41)

___

### <a id="verifytransactioninclusion" name="verifytransactioninclusion"></a> verifyTransactionInclusion

▸ **verifyTransactionInclusion**(`txid`, `confirmations?`): `Promise`<`void`\>

Verifies the inclusion of a transaction with `txid` in the Bitcoin blockchain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `txid` | `string` | The ID of a Bitcoin transaction |
| `confirmations?` | `number` | The number of block confirmations needed to accept the inclusion proof. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/btc-relay.ts:37](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/btc-relay.ts#L37)
