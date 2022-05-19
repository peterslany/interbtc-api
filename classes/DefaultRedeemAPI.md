[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultRedeemAPI

# Class: DefaultRedeemAPI

## Implements

- [`RedeemAPI`](/interfaces/RedeemAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRedeemAPI.md#constructor)

### Methods

- [burn](/classes/DefaultRedeemAPI.md#burn)
- [cancel](/classes/DefaultRedeemAPI.md#cancel)
- [execute](/classes/DefaultRedeemAPI.md#execute)
- [getBurnExchangeRate](/classes/DefaultRedeemAPI.md#getburnexchangerate)
- [getCurrentInclusionFee](/classes/DefaultRedeemAPI.md#getcurrentinclusionfee)
- [getDustValue](/classes/DefaultRedeemAPI.md#getdustvalue)
- [getFeeRate](/classes/DefaultRedeemAPI.md#getfeerate)
- [getFeesToPay](/classes/DefaultRedeemAPI.md#getfeestopay)
- [getMaxBurnableTokens](/classes/DefaultRedeemAPI.md#getmaxburnabletokens)
- [getPremiumRedeemFeeRate](/classes/DefaultRedeemAPI.md#getpremiumredeemfeerate)
- [getRedeemIdsFromEvents](/classes/DefaultRedeemAPI.md#getredeemidsfromevents)
- [getRedeemPeriod](/classes/DefaultRedeemAPI.md#getredeemperiod)
- [getRequestById](/classes/DefaultRedeemAPI.md#getrequestbyid)
- [getRequestsByIds](/classes/DefaultRedeemAPI.md#getrequestsbyids)
- [list](/classes/DefaultRedeemAPI.md#list)
- [request](/classes/DefaultRedeemAPI.md#request)
- [requestAdvanced](/classes/DefaultRedeemAPI.md#requestadvanced)
- [setRedeemPeriod](/classes/DefaultRedeemAPI.md#setredeemperiod)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultRedeemAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `vaultsAPI`, `oracleAPI`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `btcNetwork` | [`Network`](/interfaces/bitcoin.networks.Network.md) |
| `electrsAPI` | [`ElectrsAPI`](/interfaces/ElectrsAPI.md) |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `oracleAPI` | [`OracleAPI`](/interfaces/OracleAPI.md) |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/redeem.ts:168](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L168)

## Methods

### <a id="burn" name="burn"></a> burn

▸ **burn**(`amount`, `collateralCurrency`): `Promise`<`void`\>

Burn wrapped tokens for a premium

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[burn](/interfaces/RedeemAPI.md#burn)

#### Defined in

[src/parachain/redeem.ts:261](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L261)

___

### <a id="cancel" name="cancel"></a> cancel

▸ **cancel**(`requestId`, `reimburse?`): `Promise`<`void`\>

Send a redeem cancellation transaction. After the redeem period has elapsed,
the redeemal request can be cancelled. As a result, the griefing collateral
of the vault will be slashed and sent to the redeemer

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `requestId` | `string` | `undefined` |
| `reimburse` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[cancel](/interfaces/RedeemAPI.md#cancel)

#### Defined in

[src/parachain/redeem.ts:255](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L255)

___

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId`): `Promise`<`void`\>

Send a redeem execution transaction

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[execute](/interfaces/RedeemAPI.md#execute)

#### Defined in

[src/parachain/redeem.ts:244](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L244)

___

### <a id="getburnexchangerate" name="getburnexchangerate"></a> getBurnExchangeRate

▸ **getBurnExchangeRate**<`C`\>(`collateralCurrency`): `Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

The exchange rate (collateral currency to wrapped token currency)
used when burning tokens

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getBurnExchangeRate](/interfaces/RedeemAPI.md#getburnexchangerate)

#### Defined in

[src/parachain/redeem.ts:295](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L295)

___

### <a id="getcurrentinclusionfee" name="getcurrentinclusionfee"></a> getCurrentInclusionFee

▸ **getCurrentInclusionFee**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The current inclusion fee based on the expected number of bytes
in the transaction, and the inclusion fee rate reported by the oracle

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getCurrentInclusionFee](/interfaces/RedeemAPI.md#getcurrentinclusionfee)

#### Defined in

[src/parachain/redeem.ts:318](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L318)

___

### <a id="getdustvalue" name="getdustvalue"></a> getDustValue

▸ **getDustValue**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The minimum amount of wrapped tokens that is accepted for redeem requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getDustValue](/interfaces/RedeemAPI.md#getdustvalue)

#### Defined in

[src/parachain/redeem.ts:352](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L352)

___

### <a id="getfeerate" name="getfeerate"></a> getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for redeeming. For instance, "0.005" stands for 0.5%

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getFeeRate](/interfaces/RedeemAPI.md#getfeerate)

#### Defined in

[src/parachain/redeem.ts:347](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L347)

___

### <a id="getfeestopay" name="getfeestopay"></a> getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The fees

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getFeesToPay](/interfaces/RedeemAPI.md#getfeestopay)

#### Defined in

[src/parachain/redeem.ts:340](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L340)

___

### <a id="getmaxburnabletokens" name="getmaxburnabletokens"></a> getMaxBurnableTokens

▸ **getMaxBurnableTokens**(`collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The maximum amount of tokens that can be burned through a liquidation redeem

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getMaxBurnableTokens](/interfaces/RedeemAPI.md#getmaxburnabletokens)

#### Defined in

[src/parachain/redeem.ts:282](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L282)

___

### <a id="getpremiumredeemfeerate" name="getpremiumredeemfeerate"></a> getPremiumRedeemFeeRate

▸ **getPremiumRedeemFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

If users execute a redeem with a Vault flagged for premium redeem,
they can earn a premium, slashed from the Vault's collateral.
This value is a percentage of the redeemed amount.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getPremiumRedeemFeeRate](/interfaces/RedeemAPI.md#getpremiumredeemfeerate)

#### Defined in

[src/parachain/redeem.ts:357](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L357)

___

### <a id="getredeemidsfromevents" name="getredeemidsfromevents"></a> getRedeemIdsFromEvents

▸ `Private` **getRedeemIdsFromEvents**(`events`, `event`): `Hash`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |
| `event` | `AugmentedEvent`<`ApiTypes`, `AnyTuple`\> |

#### Returns

`Hash`[]

#### Defined in

[src/parachain/redeem.ts:178](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L178)

___

### <a id="getredeemperiod" name="getredeemperiod"></a> getRedeemPeriod

▸ **getRedeemPeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between a redeem request
is created and required completion time by a vault.
The redeem period has an upper limit to ensure the user gets their BTC in time
and to potentially punish a vault for inactivity or stealing BTC.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRedeemPeriod](/interfaces/RedeemAPI.md#getredeemperiod)

#### Defined in

[src/parachain/redeem.ts:277](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L277)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`redeemId`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemId` | `string` \| `H256` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

A redeem request object

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRequestById](/interfaces/RedeemAPI.md#getrequestbyid)

#### Defined in

[src/parachain/redeem.ts:362](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L362)

___

### <a id="getrequestsbyids" name="getrequestsbyids"></a> getRequestsByIds

▸ **getRequestsByIds**(`redeemIds`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[getRequestsByIds](/interfaces/RedeemAPI.md#getrequestsbyids)

#### Defined in

[src/parachain/redeem.ts:367](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L367)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array containing the redeem requests

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[list](/interfaces/RedeemAPI.md#list)

#### Defined in

[src/parachain/redeem.ts:327](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L327)

___

### <a id="request" name="request"></a> request

▸ **request**(`amount`, `btcAddressEnc`, `vaultId?`, `atomic?`, `retries?`, `cachedVaults?`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

Send a redeem request transaction

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `btcAddressEnc` | `string` | `undefined` |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | `undefined` |
| `atomic` | `boolean` | `true` |
| `retries` | `number` | `0` |
| `cachedVaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | `undefined` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array of type {redeemId, redeemRequest} if the requests succeeded. The function throws an error otherwise.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[request](/interfaces/RedeemAPI.md#request)

#### Defined in

[src/parachain/redeem.ts:182](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L182)

___

### <a id="requestadvanced" name="requestadvanced"></a> requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `btcAddressEnc`, `atomic`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

Send a batch of aggregated redeem transactions (to one or more vaults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountsPerVault` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> |
| `btcAddressEnc` | `string` |
| `atomic` | `boolean` |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array of type {redeemId, vault} if the requests succeeded.

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[requestAdvanced](/interfaces/RedeemAPI.md#requestadvanced)

#### Defined in

[src/parachain/redeem.ts:219](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L219)

___

### <a id="setredeemperiod" name="setredeemperiod"></a> setRedeemPeriod

▸ **setRedeemPeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RedeemAPI](/interfaces/RedeemAPI.md).[setRedeemPeriod](/interfaces/RedeemAPI.md#setredeemperiod)

#### Defined in

[src/parachain/redeem.ts:271](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L271)
