[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultSystemAPI

# Class: DefaultSystemAPI

## Table of contents

### Constructors

- [constructor](/classes/DefaultSystemAPI.md#constructor)

### Methods

- [getBlockHash](/classes/DefaultSystemAPI.md#getblockhash)
- [getCurrentActiveBlockNumber](/classes/DefaultSystemAPI.md#getcurrentactiveblocknumber)
- [getCurrentBlockNumber](/classes/DefaultSystemAPI.md#getcurrentblocknumber)
- [getStatusCode](/classes/DefaultSystemAPI.md#getstatuscode)
- [setCode](/classes/DefaultSystemAPI.md#setcode)
- [subscribeToCurrentBlockHeads](/classes/DefaultSystemAPI.md#subscribetocurrentblockheads)
- [subscribeToFinalizedBlockHeads](/classes/DefaultSystemAPI.md#subscribetofinalizedblockheads)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultSystemAPI**(`api`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/system.ts:51](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L51)

## Methods

### <a id="getblockhash" name="getblockhash"></a> getBlockHash

▸ **getBlockHash**(`blockNumber`): `Promise`<`BlockHash`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber` | `number` |

#### Returns

`Promise`<`BlockHash`\>

#### Defined in

[src/parachain/system.ts:85](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L85)

___

### <a id="getcurrentactiveblocknumber" name="getcurrentactiveblocknumber"></a> getCurrentActiveBlockNumber

▸ **getCurrentActiveBlockNumber**(`atBlock?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `atBlock?` | `BlockHash` |

#### Returns

`Promise`<`number`\>

#### Defined in

[src/parachain/system.ts:57](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L57)

___

### <a id="getcurrentblocknumber" name="getcurrentblocknumber"></a> getCurrentBlockNumber

▸ **getCurrentBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[src/parachain/system.ts:53](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L53)

___

### <a id="getstatuscode" name="getstatuscode"></a> getStatusCode

▸ **getStatusCode**(): `Promise`<[`SecurityStatusCode`](/interfaces/SecurityStatusCode.md)\>

#### Returns

`Promise`<[`SecurityStatusCode`](/interfaces/SecurityStatusCode.md)\>

#### Defined in

[src/parachain/system.ts:76](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L76)

___

### <a id="setcode" name="setcode"></a> setCode

▸ **setCode**(`code`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/system.ts:80](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L80)

___

### <a id="subscribetocurrentblockheads" name="subscribetocurrentblockheads"></a> subscribeToCurrentBlockHeads

▸ **subscribeToCurrentBlockHeads**(`callback`): `Promise`<() => `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` |

#### Returns

`Promise`<() => `void`\>

#### Defined in

[src/parachain/system.ts:69](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L69)

___

### <a id="subscribetofinalizedblockheads" name="subscribetofinalizedblockheads"></a> subscribeToFinalizedBlockHeads

▸ **subscribeToFinalizedBlockHeads**(`callback`): `Promise`<() => `void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` |

#### Returns

`Promise`<() => `void`\>

#### Defined in

[src/parachain/system.ts:62](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L62)
