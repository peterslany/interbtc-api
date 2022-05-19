[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / SystemAPI

# Interface: SystemAPI

## Table of contents

### Methods

- [getBlockHash](/interfaces/SystemAPI.md#getblockhash)
- [getCurrentActiveBlockNumber](/interfaces/SystemAPI.md#getcurrentactiveblocknumber)
- [getCurrentBlockNumber](/interfaces/SystemAPI.md#getcurrentblocknumber)
- [getStatusCode](/interfaces/SystemAPI.md#getstatuscode)
- [setCode](/interfaces/SystemAPI.md#setcode)
- [subscribeToCurrentBlockHeads](/interfaces/SystemAPI.md#subscribetocurrentblockheads)
- [subscribeToFinalizedBlockHeads](/interfaces/SystemAPI.md#subscribetofinalizedblockheads)

## Methods

### <a id="getblockhash" name="getblockhash"></a> getBlockHash

▸ **getBlockHash**(`blockNumber`): `Promise`<`BlockHash`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockNumber` | `number` | The block number to get the hash for |

#### Returns

`Promise`<`BlockHash`\>

The block hash for the given block number

#### Defined in

[src/parachain/system.ts:47](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L47)

___

### <a id="getcurrentactiveblocknumber" name="getcurrentactiveblocknumber"></a> getCurrentActiveBlockNumber

▸ **getCurrentActiveBlockNumber**(`atBlock?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `atBlock?` | `BlockHash` |

#### Returns

`Promise`<`number`\>

The current active block number being processed.

#### Defined in

[src/parachain/system.ts:19](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L19)

___

### <a id="getcurrentblocknumber" name="getcurrentblocknumber"></a> getCurrentBlockNumber

▸ **getCurrentBlockNumber**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The current block number being processed.

#### Defined in

[src/parachain/system.ts:14](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L14)

___

### <a id="getstatuscode" name="getstatuscode"></a> getStatusCode

▸ **getStatusCode**(): `Promise`<[`SecurityStatusCode`](/interfaces/SecurityStatusCode.md)\>

#### Returns

`Promise`<[`SecurityStatusCode`](/interfaces/SecurityStatusCode.md)\>

The parachain status code object.

#### Defined in

[src/parachain/system.ts:36](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L36)

___

### <a id="setcode" name="setcode"></a> setCode

▸ **setCode**(`code`): `Promise`<`void`\>

**`remarks`** Upgrades runtime using `sudoUncheckedWeight`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Hex-encoded wasm blob |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/system.ts:41](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L41)

___

### <a id="subscribetocurrentblockheads" name="subscribetocurrentblockheads"></a> subscribeToCurrentBlockHeads

▸ **subscribeToCurrentBlockHeads**(`callback`): `Promise`<() => `void`\>

On every new parachain block, call the callback function with the new block header

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` | Function to be called with every new unfinalized block header |

#### Returns

`Promise`<() => `void`\>

#### Defined in

[src/parachain/system.ts:31](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L31)

___

### <a id="subscribetofinalizedblockheads" name="subscribetofinalizedblockheads"></a> subscribeToFinalizedBlockHeads

▸ **subscribeToFinalizedBlockHeads**(`callback`): `Promise`<() => `void`\>

On every new parachain block, call the callback function with the new block header

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`blockHeader`: `Header`) => `void` | Function to be called with every new block header |

#### Returns

`Promise`<() => `void`\>

#### Defined in

[src/parachain/system.ts:25](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/system.ts#L25)
