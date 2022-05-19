[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultIssueAPI

# Class: DefaultIssueAPI

## Implements

- [`IssueAPI`](/interfaces/IssueAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultIssueAPI.md#constructor)

### Methods

- [cancel](/classes/DefaultIssueAPI.md#cancel)
- [craftRequestTx](/classes/DefaultIssueAPI.md#craftrequesttx)
- [execute](/classes/DefaultIssueAPI.md#execute)
- [getDustValue](/classes/DefaultIssueAPI.md#getdustvalue)
- [getFeeRate](/classes/DefaultIssueAPI.md#getfeerate)
- [getFeesToPay](/classes/DefaultIssueAPI.md#getfeestopay)
- [getIssueIdsFromEvents](/classes/DefaultIssueAPI.md#getissueidsfromevents)
- [getIssuePeriod](/classes/DefaultIssueAPI.md#getissueperiod)
- [getRequestById](/classes/DefaultIssueAPI.md#getrequestbyid)
- [getRequestLimits](/classes/DefaultIssueAPI.md#getrequestlimits)
- [getRequestsByIds](/classes/DefaultIssueAPI.md#getrequestsbyids)
- [getVaultIssuableAmount](/classes/DefaultIssueAPI.md#getvaultissuableamount)
- [list](/classes/DefaultIssueAPI.md#list)
- [request](/classes/DefaultIssueAPI.md#request)
- [requestAdvanced](/classes/DefaultIssueAPI.md#requestadvanced)
- [setIssuePeriod](/classes/DefaultIssueAPI.md#setissueperiod)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultIssueAPI**(`api`, `btcNetwork`, `electrsAPI`, `wrappedCurrency`, `feeAPI`, `vaultsAPI`, `transactionAPI`)

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

[src/parachain/issue.ts:160](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L160)

## Methods

### <a id="cancel" name="cancel"></a> cancel

▸ **cancel**(`requestId`): `Promise`<`void`\>

Send an issue cancellation transaction. After the issue period has elapsed,
the issuance request can be cancelled. As a result, the griefing collateral
of the requester will be slashed and sent to the vault that had prepared to issue.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[cancel](/interfaces/IssueAPI.md#cancel)

#### Defined in

[src/parachain/issue.ts:299](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L299)

___

### <a id="craftrequesttx" name="craftrequesttx"></a> craftRequestTx

▸ **craftRequestTx**(`vaultId`, `amount`): `Promise`<`SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<`SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\>\>

#### Defined in

[src/parachain/issue.ts:257](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L257)

___

### <a id="execute" name="execute"></a> execute

▸ **execute**(`requestId`, `btcTxId`): `Promise`<`void`\>

Send an issue execution transaction

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestId` | `string` |
| `btcTxId` | `string` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[execute](/interfaces/IssueAPI.md#execute)

#### Defined in

[src/parachain/issue.ts:288](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L288)

___

### <a id="getdustvalue" name="getdustvalue"></a> getDustValue

▸ **getDustValue**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The minimum amount of wrapped tokens that is accepted for issue requests; any lower values would
risk the bitcoin client to reject the payment

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getDustValue](/interfaces/IssueAPI.md#getdustvalue)

#### Defined in

[src/parachain/issue.ts:335](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L335)

___

### <a id="getfeerate" name="getfeerate"></a> getFeeRate

▸ **getFeeRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The fee charged for issuing. For instance, "0.005" stands for 0.5%

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getFeeRate](/interfaces/IssueAPI.md#getfeerate)

#### Defined in

[src/parachain/issue.ts:340](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L340)

___

### <a id="getfeestopay" name="getfeestopay"></a> getFeesToPay

▸ **getFeesToPay**(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The fees, in BTC

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getFeesToPay](/interfaces/IssueAPI.md#getfeestopay)

#### Defined in

[src/parachain/issue.ts:328](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L328)

___

### <a id="getissueidsfromevents" name="getissueidsfromevents"></a> getIssueIdsFromEvents

▸ `Private` **getIssueIdsFromEvents**(`events`): `Hash`[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `events` | `EventRecord`[] | The EventRecord array returned after sending an issue request transaction |

#### Returns

`Hash`[]

The issueId associated with the request. If the EventRecord array does not
contain issue request events, the function throws an error.

#### Defined in

[src/parachain/issue.ts:197](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L197)

___

### <a id="getissueperiod" name="getissueperiod"></a> getIssuePeriod

▸ **getIssuePeriod**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The time difference in number of blocks between an issue request is created
and required completion time by a user. The issue period has an upper limit
to prevent griefing of vault collateral.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getIssuePeriod](/interfaces/IssueAPI.md#getissueperiod)

#### Defined in

[src/parachain/issue.ts:311](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L311)

___

### <a id="getrequestbyid" name="getrequestbyid"></a> getRequestById

▸ **getRequestById**(`issueId`): `Promise`<[`Issue`](/interfaces/Issue.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueId` | `string` \| `H256` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)\>

An issue request object

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestById](/interfaces/IssueAPI.md#getrequestbyid)

#### Defined in

[src/parachain/issue.ts:345](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L345)

___

### <a id="getrequestlimits" name="getrequestlimits"></a> getRequestLimits

▸ **getRequestLimits**(`vaults?`): `Promise`<`IssueLimits`\>

Gets the threshold for issuing with a single vault, and the maximum total
issue request size. Additionally passes the list of vaults for caching.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> |

#### Returns

`Promise`<`IssueLimits`\>

An object of type {singleVault, maxTotal, vaultsCache}

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestLimits](/interfaces/IssueAPI.md#getrequestlimits)

#### Defined in

[src/parachain/issue.ts:170](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L170)

___

### <a id="getrequestsbyids" name="getrequestsbyids"></a> getRequestsByIds

▸ **getRequestsByIds**(`issueIds`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `issueIds` | (`string` \| `H256`)[] |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

The issue request objects

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getRequestsByIds](/interfaces/IssueAPI.md#getrequestsbyids)

#### Defined in

[src/parachain/issue.ts:349](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L349)

___

### <a id="getvaultissuableamount" name="getvaultissuableamount"></a> getVaultIssuableAmount

▸ **getVaultIssuableAmount**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The amount of wrapped tokens issuable by this vault

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[getVaultIssuableAmount](/interfaces/IssueAPI.md#getvaultissuableamount)

#### Defined in

[src/parachain/issue.ts:371](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L371)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array containing the issue requests

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[list](/interfaces/IssueAPI.md#list)

#### Defined in

[src/parachain/issue.ts:316](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L316)

___

### <a id="request" name="request"></a> request

▸ **request**(`amount`, `vaultAccountId?`, `collateralCurrencyIdLiteral?`, `atomic?`, `retries?`, `cachedVaults?`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Request issuing wrapped tokens (e.g. interBTC, kBTC).

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | `undefined` |
| `vaultAccountId?` | `AccountId` | `undefined` |
| `collateralCurrencyIdLiteral?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | `undefined` |
| `atomic` | `boolean` | `true` |
| `retries` | `number` | `0` |
| `cachedVaults?` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> | `undefined` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of type {issueId, issueRequest} if the requests succeeded. The function throws an error otherwise.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[request](/interfaces/IssueAPI.md#request)

#### Defined in

[src/parachain/issue.ts:201](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L201)

___

### <a id="requestadvanced" name="requestadvanced"></a> requestAdvanced

▸ **requestAdvanced**(`amountsPerVault`, `atomic`): `Promise`<[`Issue`](/interfaces/Issue.md)[]\>

Send a batch of aggregated issue transactions (to one or more vaults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `amountsPerVault` | `Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\> |
| `atomic` | `boolean` |

#### Returns

`Promise`<[`Issue`](/interfaces/Issue.md)[]\>

An array of `Issue` objects, if the requests succeeded.

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[requestAdvanced](/interfaces/IssueAPI.md#requestadvanced)

#### Defined in

[src/parachain/issue.ts:264](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L264)

___

### <a id="setissueperiod" name="setissueperiod"></a> setIssuePeriod

▸ **setIssuePeriod**(`blocks`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `blocks` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[IssueAPI](/interfaces/IssueAPI.md).[setIssuePeriod](/interfaces/IssueAPI.md#setissueperiod)

#### Defined in

[src/parachain/issue.ts:305](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/issue.ts#L305)
