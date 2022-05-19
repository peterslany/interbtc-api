[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultReplaceAPI

# Class: DefaultReplaceAPI

## Implements

- [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultReplaceAPI.md#constructor)

### Methods

- [accept](/classes/DefaultReplaceAPI.md#accept)
- [execute](/classes/DefaultReplaceAPI.md#execute)
- [getDustValue](/classes/DefaultReplaceAPI.md#getdustvalue)
- [getNewVaultReplaceRequests](/classes/DefaultReplaceAPI.md#getnewvaultreplacerequests)
- [getOldVaultReplaceRequests](/classes/DefaultReplaceAPI.md#getoldvaultreplacerequests)
- [getReplacePeriod](/classes/DefaultReplaceAPI.md#getreplaceperiod)
- [getRequestById](/classes/DefaultReplaceAPI.md#getrequestbyid)
- [list](/classes/DefaultReplaceAPI.md#list)
- [map](/classes/DefaultReplaceAPI.md#map)
- [mapReplaceRequests](/classes/DefaultReplaceAPI.md#mapreplacerequests)
- [parseRequestsAsync](/classes/DefaultReplaceAPI.md#parserequestsasync)
- [request](/classes/DefaultReplaceAPI.md#request)
- [withdraw](/classes/DefaultReplaceAPI.md#withdraw)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultReplaceAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `feeAPI`, `vaultsAPI`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `feeAPI` | [`FeeAPI`](/interfaces/FeeAPI.md) |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/replace.ts:102](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L102)

## Methods

### <a id="accept" name="accept"></a> accept

▸ **accept**(`oldVault`, `amount`, `collateral`, `btcAddress`): `Promise`<`void`\>

Accept a replace request

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldVault` | `AccountId` |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateral` | `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `btcAddress` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[accept](/interfaces/ReplaceAPI.md#accept)

#### Defined in

[src/parachain/replace.ts:138](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L138)

___

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId`): `Promise`<`void`\>

Execute a replace request

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[execute](/interfaces/ReplaceAPI.md#execute)

#### Defined in

[src/parachain/replace.ts:162](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L162)

___

### <a id="getdustvalue" name="getdustvalue"></a> getDustValue

▸ **getDustValue**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The minimum amount of btc that is accepted for replace requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getDustValue](/interfaces/ReplaceAPI.md#getdustvalue)

#### Defined in

[src/parachain/replace.ts:173](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L173)

___

### <a id="getnewvaultreplacerequests" name="getnewvaultreplacerequests"></a> getNewVaultReplaceRequests

▸ **getNewVaultReplaceRequests**(`vaultAccountId`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Defined in

[src/parachain/replace.ts:257](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L257)

___

### <a id="getoldvaultreplacerequests" name="getoldvaultreplacerequests"></a> getOldVaultReplaceRequests

▸ **getOldVaultReplaceRequests**(`vaultAccountId`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Defined in

[src/parachain/replace.ts:251](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L251)

___

### <a id="getreplaceperiod" name="getreplaceperiod"></a> getReplacePeriod

▸ **getReplacePeriod**(): `Promise`<`BlockNumber`\>

#### Returns

`Promise`<`BlockNumber`\>

The time difference in number of blocks between when a replace request is created
and required completion time by a vault. The replace period has an upper limit
to prevent griefing of vault collateral.

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getReplacePeriod](/interfaces/ReplaceAPI.md#getreplaceperiod)

#### Defined in

[src/parachain/replace.ts:178](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L178)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`replaceId`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `replaceId` | `string` \| `H256` |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>

A replace request object

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[getRequestById](/interfaces/ReplaceAPI.md#getrequestbyid)

#### Defined in

[src/parachain/replace.ts:228](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L228)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

An array containing the replace requests

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[list](/interfaces/ReplaceAPI.md#list)

#### Defined in

[src/parachain/replace.ts:182](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L182)

___

### <a id="map" name="map"></a> map

▸ **map**(): `Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

#### Returns

`Promise`<`Map`<`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)\>\>

A mapping from the replace request ID to the replace request object

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[map](/interfaces/ReplaceAPI.md#map)

#### Defined in

[src/parachain/replace.ts:201](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L201)

___

### <a id="mapreplacerequests" name="mapreplacerequests"></a> mapReplaceRequests

▸ **mapReplaceRequests**(`vaultAccountId`): `Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

Fetch the replace requests associated with a vault. In the returned requests,
the vault is either the replaced or the replacing one.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<[`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)[]\>

An array with replace requests involving said vault

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[mapReplaceRequests](/interfaces/ReplaceAPI.md#mapreplacerequests)

#### Defined in

[src/parachain/replace.ts:239](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L239)

___

### <a id="parserequestsasync" name="parserequestsasync"></a> parseRequestsAsync

▸ **parseRequestsAsync**(`requestPairs`): `Promise`<[`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)][]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestPairs` | [`H256`, `InterbtcPrimitivesReplaceReplaceRequest`][] |

#### Returns

`Promise`<[`H256`, [`ReplaceRequestExt`](/interfaces/ReplaceRequestExt.md)][]\>

#### Defined in

[src/parachain/replace.ts:263](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L263)

___

### <a id="request" name="request"></a> request

▸ **request**(`amount`, `collateralCurrency`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[request](/interfaces/ReplaceAPI.md#request)

#### Defined in

[src/parachain/replace.ts:112](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L112)

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(`amount`, `collateralCurrency`): `Promise`<`void`\>

Wihdraw a replace request

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ReplaceAPI](/interfaces/ReplaceAPI.md).[withdraw](/interfaces/ReplaceAPI.md#withdraw)

#### Defined in

[src/parachain/replace.ts:128](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/replace.ts#L128)
