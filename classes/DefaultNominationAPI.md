[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultNominationAPI

# Class: DefaultNominationAPI

## Implements

- [`NominationAPI`](/interfaces/NominationAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultNominationAPI.md#constructor)

### Methods

- [depositCollateral](/classes/DefaultNominationAPI.md#depositcollateral)
- [getActiveNominatorRewards](/classes/DefaultNominationAPI.md#getactivenominatorrewards)
- [getFilteredNominations](/classes/DefaultNominationAPI.md#getfilterednominations)
- [getNominationStatus](/classes/DefaultNominationAPI.md#getnominationstatus)
- [getNominatorReward](/classes/DefaultNominationAPI.md#getnominatorreward)
- [getNonces](/classes/DefaultNominationAPI.md#getnonces)
- [getTotalNomination](/classes/DefaultNominationAPI.md#gettotalnomination)
- [isNominationEnabled](/classes/DefaultNominationAPI.md#isnominationenabled)
- [isVaultOptedIn](/classes/DefaultNominationAPI.md#isvaultoptedin)
- [list](/classes/DefaultNominationAPI.md#list)
- [listAllNominations](/classes/DefaultNominationAPI.md#listallnominations)
- [listNominatorRewards](/classes/DefaultNominationAPI.md#listnominatorrewards)
- [listVaults](/classes/DefaultNominationAPI.md#listvaults)
- [optIn](/classes/DefaultNominationAPI.md#optin)
- [optOut](/classes/DefaultNominationAPI.md#optout)
- [setNominationEnabled](/classes/DefaultNominationAPI.md#setnominationenabled)
- [withdrawCollateral](/classes/DefaultNominationAPI.md#withdrawcollateral)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultNominationAPI**(`api`, `wrappedCurrency`, `vaultsAPI`, `rewardsAPI`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `vaultsAPI` | [`VaultsAPI`](/interfaces/VaultsAPI.md) |
| `rewardsAPI` | [`RewardsAPI`](/interfaces/RewardsAPI.md) |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/nomination.ts:153](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L153)

## Methods

### <a id="depositcollateral" name="depositcollateral"></a> depositCollateral

▸ **depositCollateral**<`C`\>(`vaultAccountId`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[depositCollateral](/interfaces/NominationAPI.md#depositcollateral)

#### Defined in

[src/parachain/nomination.ts:161](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L161)

___

### <a id="getactivenominatorrewards" name="getactivenominatorrewards"></a> getActiveNominatorRewards

▸ **getActiveNominatorRewards**(`nominatorId`): `Promise`<`NominationReward`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nominatorId` | `AccountId` |

#### Returns

`Promise`<`NominationReward`[]\>

The rewards a currently active nominator has accumulated

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getActiveNominatorRewards](/interfaces/NominationAPI.md#getactivenominatorrewards)

#### Defined in

[src/parachain/nomination.ts:282](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L282)

___

### <a id="getfilterednominations" name="getfilterednominations"></a> getFilteredNominations

▸ **getFilteredNominations**(`vaultId?`, `collateralCurrencyId?`, `nominatorId?`): `Promise`<`Nomination`[]\>

**`remarks`** At least one of the parameters must be specified

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId?` | `AccountId` |
| `collateralCurrencyId?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `nominatorId?` | `AccountId` |

#### Returns

`Promise`<`Nomination`[]\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getFilteredNominations](/interfaces/NominationAPI.md#getfilterednominations)

#### Defined in

[src/parachain/nomination.ts:302](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L302)

___

### <a id="getnominationstatus" name="getnominationstatus"></a> getNominationStatus

▸ **getNominationStatus**(`vaultId`, `collateralCurrencyId`, `nominatorId`): `Promise`<[`NominationStatus`](/enums/NominationStatus.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `nominatorId` | `AccountId` |

#### Returns

`Promise`<[`NominationStatus`](/enums/NominationStatus.md)\>

#### Defined in

[src/parachain/nomination.ts:334](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L334)

___

### <a id="getnominatorreward" name="getnominatorreward"></a> getNominatorReward

▸ **getNominatorReward**(`vaultId`, `collateralCurrencyId`, `rewardCurrencyId`, `nominatorId`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `rewardCurrencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `nominatorId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The rewards a (possibly inactive) nominator has accumulated

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getNominatorReward](/interfaces/NominationAPI.md#getnominatorreward)

#### Defined in

[src/parachain/nomination.ts:289](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L289)

___

### <a id="getnonces" name="getnonces"></a> getNonces

▸ **getNonces**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `number`\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `number`\>\>

A map (vaultId => nonce), representing the nonces for each reward pool with the given currency

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getNonces](/interfaces/NominationAPI.md#getnonces)

#### Defined in

[src/parachain/nomination.ts:219](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L219)

___

### <a id="gettotalnomination" name="gettotalnomination"></a> getTotalNomination

▸ **getTotalNomination**(`vaultId?`, `collateralCurrency?`, `nominatorId?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

**`remarks`** At least one of the parameters must be specified

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId?` | `AccountId` |
| `collateralCurrency?` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |
| `nominatorId?` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The total nominated amount, filtered using the given parameters

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[getTotalNomination](/interfaces/NominationAPI.md#gettotalnomination)

#### Defined in

[src/parachain/nomination.ts:352](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L352)

___

### <a id="isnominationenabled" name="isnominationenabled"></a> isNominationEnabled

▸ **isNominationEnabled**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

A boolean value representing whether the vault nomination feature is enabled

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[isNominationEnabled](/interfaces/NominationAPI.md#isnominationenabled)

#### Defined in

[src/parachain/nomination.ts:214](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L214)

___

### <a id="isvaultoptedin" name="isvaultoptedin"></a> isVaultOptedIn

▸ **isVaultOptedIn**(`accountId`, `collateralCurrencyIdLiteral`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`boolean`\>

A boolean value

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[isVaultOptedIn](/interfaces/NominationAPI.md#isvaultoptedin)

#### Defined in

[src/parachain/nomination.ts:383](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L383)

___

### <a id="list" name="list"></a> list

▸ **list**(): `Promise`<`Nomination`[]\>

#### Returns

`Promise`<`Nomination`[]\>

All nominations for the wrapped currency set in the API

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[list](/interfaces/NominationAPI.md#list)

#### Defined in

[src/parachain/nomination.ts:298](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L298)

___

### <a id="listallnominations" name="listallnominations"></a> listAllNominations

▸ **listAllNominations**(): `Promise`<`RawNomination`[]\>

#### Returns

`Promise`<`RawNomination`[]\>

#### Defined in

[src/parachain/nomination.ts:233](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L233)

___

### <a id="listnominatorrewards" name="listnominatorrewards"></a> listNominatorRewards

▸ **listNominatorRewards**(): `Promise`<`NominationReward`[]\>

#### Returns

`Promise`<`NominationReward`[]\>

The rewards a nominator has accumulated, in wrapped token (e.g. interBTC, kBTC)

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[listNominatorRewards](/interfaces/NominationAPI.md#listnominatorrewards)

#### Defined in

[src/parachain/nomination.ts:262](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L262)

___

### <a id="listvaults" name="listvaults"></a> listVaults

▸ **listVaults**(): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)[]\>

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)[]\>

A list of all vaults that opted in to the nomination feature.

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[listVaults](/interfaces/NominationAPI.md#listvaults)

#### Defined in

[src/parachain/nomination.ts:378](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L378)

___

### <a id="optin" name="optin"></a> optIn

▸ **optIn**(`collateralCurrency`): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt in to the nomination feature

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[optIn](/interfaces/NominationAPI.md#optin)

#### Defined in

[src/parachain/nomination.ts:197](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L197)

___

### <a id="optout" name="optout"></a> optOut

▸ **optOut**(`collateralCurrency`): `Promise`<`void`\>

**`remarks`** Function callable by vaults to opt out of the nomination feature

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[optOut](/interfaces/NominationAPI.md#optout)

#### Defined in

[src/parachain/nomination.ts:203](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L203)

___

### <a id="setnominationenabled" name="setnominationenabled"></a> setNominationEnabled

▸ **setNominationEnabled**(`enabled`): `Promise`<`void`\>

**`remarks`** Testnet utility function

#### Parameters

| Name | Type |
| :------ | :------ |
| `enabled` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[setNominationEnabled](/interfaces/NominationAPI.md#setnominationenabled)

#### Defined in

[src/parachain/nomination.ts:209](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L209)

___

### <a id="withdrawcollateral" name="withdrawcollateral"></a> withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`vaultAccountId`, `amount`, `nonce?`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |
| `nonce?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[NominationAPI](/interfaces/NominationAPI.md).[withdrawCollateral](/interfaces/NominationAPI.md#withdrawcollateral)

#### Defined in

[src/parachain/nomination.ts:176](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/nomination.ts#L176)
