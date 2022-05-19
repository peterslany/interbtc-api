[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / RedeemAPI

# Interface: RedeemAPI

## Implemented by

- [`DefaultRedeemAPI`](/classes/DefaultRedeemAPI.md)

## Table of contents

### Methods

- [burn](/interfaces/RedeemAPI.md#burn)
- [cancel](/interfaces/RedeemAPI.md#cancel)
- [execute](/interfaces/RedeemAPI.md#execute)
- [getBurnExchangeRate](/interfaces/RedeemAPI.md#getburnexchangerate)
- [getCurrentInclusionFee](/interfaces/RedeemAPI.md#getcurrentinclusionfee)
- [getDustValue](/interfaces/RedeemAPI.md#getdustvalue)
- [getFeeRate](/interfaces/RedeemAPI.md#getfeerate)
- [getFeesToPay](/interfaces/RedeemAPI.md#getfeestopay)
- [getMaxBurnableTokens](/interfaces/RedeemAPI.md#getmaxburnabletokens)
- [getPremiumRedeemFeeRate](/interfaces/RedeemAPI.md#getpremiumredeemfeerate)
- [getRedeemPeriod](/interfaces/RedeemAPI.md#getredeemperiod)
- [getRequestById](/interfaces/RedeemAPI.md#getrequestbyid)
- [getRequestsByIds](/interfaces/RedeemAPI.md#getrequestsbyids)
- [list](/interfaces/RedeemAPI.md#list)
- [request](/interfaces/RedeemAPI.md#request)
- [requestAdvanced](/interfaces/RedeemAPI.md#requestadvanced)
- [setRedeemPeriod](/interfaces/RedeemAPI.md#setredeemperiod)

## Methods

### <a id="burn" name="burn"></a> burn

▸ **burn**(`amount`, `collateralCurrency`): `Promise`<`void`\>

Burn wrapped tokens for a premium

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | The amount of wrapped tokens to burn |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | Liquidated collateral currency to use when burning wrapped tokens |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/redeem.ts:144](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L144)

___

### <a id="cancel" name="cancel"></a> cancel

▸ **cancel**(`redeemId`, `reimburse?`): `Promise`<`void`\>

Send a redeem cancellation transaction. After the redeem period has elapsed,
the redeemal request can be cancelled. As a result, the griefing collateral
of the vault will be slashed and sent to the redeemer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redeemId` | `string` | The ID returned by the redeem request transaction |
| `reimburse?` | `boolean` | (Optional) In case of redeem failure:  - (Default) `false` = retry redeeming, with a different Vault  - `true` = accept reimbursement in wrapped token |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/redeem.ts:94](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L94)

___

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId`): `Promise`<`void`\>

Send a redeem execution transaction

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestId` | `string` | - |
| `btcTxId` | `string` | Bitcoin transaction ID |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/redeem.ts:84](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L84)

___

### <a id="getburnexchangerate" name="getburnexchangerate"></a> getBurnExchangeRate

▸ **getBurnExchangeRate**<`C`\>(`collateralCurrency`): `Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> | Currency whose exchange rate with BTC to fetch |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

The exchange rate (collateral currency to wrapped token currency)
used when burning tokens

#### Defined in

[src/parachain/redeem.ts:157](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L157)

___

### <a id="getcurrentinclusionfee" name="getcurrentinclusionfee"></a> getCurrentInclusionFee

▸ **getCurrentInclusionFee**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The current inclusion fee based on the expected number of bytes
in the transaction, and the inclusion fee rate reported by the oracle

#### Defined in

[src/parachain/redeem.ts:164](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L164)

___

### <a id="getdustvalue" name="getdustvalue"></a> getDustValue

▸ **getDustValue**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The minimum amount of wrapped tokens that is accepted for redeem requests; any lower values would
risk the bitcoin client to reject the payment

#### Defined in

[src/parachain/redeem.ts:121](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L121)

___

### <a id="getfeerate" name="getfeerate"></a> getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for redeeming. For instance, "0.005" stands for 0.5%

#### Defined in

[src/parachain/redeem.ts:125](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L125)

___

### <a id="getfeestopay" name="getfeestopay"></a> getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | The amount of wrapped tokens for which to compute the redeem fees |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The fees

#### Defined in

[src/parachain/redeem.ts:130](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L130)

___

### <a id="getmaxburnabletokens" name="getmaxburnabletokens"></a> getMaxBurnableTokens

▸ **getMaxBurnableTokens**(`collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | Liquidated collateral currency to use when burning wrapped tokens |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The maximum amount of tokens that can be burned through a liquidation redeem

#### Defined in

[src/parachain/redeem.ts:149](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L149)

___

### <a id="getpremiumredeemfeerate" name="getpremiumredeemfeerate"></a> getPremiumRedeemFeeRate

▸ **getPremiumRedeemFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

If users execute a redeem with a Vault flagged for premium redeem,
they can earn a premium, slashed from the Vault's collateral.
This value is a percentage of the redeemed amount.

#### Defined in

[src/parachain/redeem.ts:138](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L138)

___

### <a id="getredeemperiod" name="getredeemperiod"></a> getRedeemPeriod

▸ **getRedeemPeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between a redeem request
is created and required completion time by a vault.
The redeem period has an upper limit to ensure the user gets their BTC in time
and to potentially punish a vault for inactivity or stealing BTC.

#### Defined in

[src/parachain/redeem.ts:110](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L110)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`redeemId`): `Promise`<[`Redeem`](/interfaces/Redeem.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `redeemId` | `string` \| `H256` | The ID of the redeem request to fetch |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)\>

A redeem request object

#### Defined in

[src/parachain/redeem.ts:115](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L115)

___

### <a id="getrequestsbyids" name="getrequestsbyids"></a> getRequestsByIds

▸ **getRequestsByIds**(`redeemIds`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `redeemIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Defined in

[src/parachain/redeem.ts:116](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L116)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array containing the redeem requests

#### Defined in

[src/parachain/redeem.ts:41](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L41)

___

### <a id="request" name="request"></a> request

▸ **request**(`amount`, `btcAddressEnc`, `vaultId?`, `atomic?`, `retries?`, `availableVaults?`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

Send a redeem request transaction

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | Wrapped token amount to redeem |
| `btcAddressEnc` | `string` | Bitcoin address where the redeemed BTC should be sent |
| `vaultId?` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | (optional) ID of the vault to redeem with. |
| `atomic?` | `boolean` | (optional) Whether the request should be handled atomically or not. Only makes a difference if more than one vault is needed to fulfil it. Defaults to false. |
| `retries?` | `number` | (optional) Number of times to retry redeeming, if some of the requests fail. Defaults to 0. |
| `availableVaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | (optional) A list of all vaults usable for redeem. If not provided, will fetch from the parachain. |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array of type {redeemId, redeemRequest} if the requests succeeded. The function throws an error otherwise.

#### Defined in

[src/parachain/redeem.ts:53](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L53)

___

### <a id="requestadvanced" name="requestadvanced"></a> requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `btcAddressEnc`, `atomic`): `Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

Send a batch of aggregated redeem transactions (to one or more vaults)

**`throws`** Rejects the promise if none of the requests succeeded (or if at least one failed, when atomic=true).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amountsPerVault` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | A mapping of vaults to redeem from, and wrapped token amounts to redeem using each vault |
| `btcAddressEnc` | `string` | Bitcoin address where the redeemed BTC should be sent |
| `atomic` | `boolean` | Whether the issue request should be handled atomically or not. Only makes a difference if more than one vault is needed to fulfil it. |

#### Returns

`Promise`<[`Redeem`](/interfaces/Redeem.md)[]\>

An array of type {redeemId, vault} if the requests succeeded.

#### Defined in

[src/parachain/redeem.ts:71](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L71)

___

### <a id="setredeemperiod" name="setredeemperiod"></a> setRedeemPeriod

▸ **setRedeemPeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blocks` | `number` | The time difference in number of blocks between a redeem request is created and required completion time by a vault. The redeem period has an upper limit to ensure the user gets their BTC in time and to potentially punish a vault for inactivity or stealing BTC. |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/redeem.ts:102](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/redeem.ts#L102)
