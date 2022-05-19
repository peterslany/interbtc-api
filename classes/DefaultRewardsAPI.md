[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultRewardsAPI

# Class: DefaultRewardsAPI

## Implements

- [`RewardsAPI`](/interfaces/RewardsAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultRewardsAPI.md#constructor)

### Properties

- [api](/classes/DefaultRewardsAPI.md#api)

### Methods

- [computeCollateralInStakingPool](/classes/DefaultRewardsAPI.md#computecollateralinstakingpool)
- [computeRewardInRewardsPool](/classes/DefaultRewardsAPI.md#computerewardinrewardspool)
- [computeRewardInStakingPool](/classes/DefaultRewardsAPI.md#computerewardinstakingpool)
- [getRewardPerBlock](/classes/DefaultRewardsAPI.md#getrewardperblock)
- [getRewardsPoolRewardPerToken](/classes/DefaultRewardsAPI.md#getrewardspoolrewardpertoken)
- [getRewardsPoolRewardTally](/classes/DefaultRewardsAPI.md#getrewardspoolrewardtally)
- [getRewardsPoolStake](/classes/DefaultRewardsAPI.md#getrewardspoolstake)
- [getStakingPoolNonce](/classes/DefaultRewardsAPI.md#getstakingpoolnonce)
- [getStakingPoolRewardPerToken](/classes/DefaultRewardsAPI.md#getstakingpoolrewardpertoken)
- [getStakingPoolRewardTally](/classes/DefaultRewardsAPI.md#getstakingpoolrewardtally)
- [getStakingPoolSlashPerToken](/classes/DefaultRewardsAPI.md#getstakingpoolslashpertoken)
- [getStakingPoolSlashTally](/classes/DefaultRewardsAPI.md#getstakingpoolslashtally)
- [getStakingPoolStake](/classes/DefaultRewardsAPI.md#getstakingpoolstake)
- [getStakingPoolTotalStake](/classes/DefaultRewardsAPI.md#getstakingpooltotalstake)
- [withdrawRewards](/classes/DefaultRewardsAPI.md#withdrawrewards)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultRewardsAPI**(`api`, `wrappedCurrency`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/rewards.ts:156](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L156)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

## Methods

### <a id="computecollateralinstakingpool" name="computecollateralinstakingpool"></a> computeCollateralInStakingPool

▸ **computeCollateralInStakingPool**(`vaultId`, `nominatorId`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `nominatorId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the collateral in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeCollateralInStakingPool](/interfaces/RewardsAPI.md#computecollateralinstakingpool)

#### Defined in

[src/parachain/rewards.ts:277](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L277)

___

### <a id="computerewardinrewardspool" name="computerewardinrewardspool"></a> computeRewardInRewardsPool

▸ **computeRewardInRewardsPool**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeRewardInRewardsPool](/interfaces/RewardsAPI.md#computerewardinrewardspool)

#### Defined in

[src/parachain/rewards.ts:323](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L323)

___

### <a id="computerewardinstakingpool" name="computerewardinstakingpool"></a> computeRewardInStakingPool

▸ **computeRewardInStakingPool**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `rewardCurrencyId?`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `rewardCurrencyId?` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `nonce?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the reward in the given currency

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[computeRewardInStakingPool](/interfaces/RewardsAPI.md#computerewardinstakingpool)

#### Defined in

[src/parachain/rewards.ts:173](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L173)

___

### <a id="getrewardperblock" name="getrewardperblock"></a> getRewardPerBlock

▸ **getRewardPerBlock**(`governanceCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

Gets the vault annuity systemwide per-block reward.

#### Parameters

| Name | Type |
| :------ | :------ |
| `governanceCurrency` | [`GovernanceIdLiteral`](/modules.md#governanceidliteral) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardPerBlock](/interfaces/RewardsAPI.md#getrewardperblock)

#### Defined in

[src/parachain/rewards.ts:370](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L370)

___

### <a id="getrewardspoolrewardpertoken" name="getrewardspoolrewardpertoken"></a> getRewardsPoolRewardPerToken

▸ **getRewardsPoolRewardPerToken**(`currencyId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `currencyId` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolRewardPerToken](/interfaces/RewardsAPI.md#getrewardspoolrewardpertoken)

#### Defined in

[src/parachain/rewards.ts:364](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L364)

___

### <a id="getrewardspoolrewardtally" name="getrewardspoolrewardtally"></a> getRewardsPoolRewardTally

▸ **getRewardsPoolRewardTally**(`rewardCurrencyIdLiteral`, `vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolRewardTally](/interfaces/RewardsAPI.md#getrewardspoolrewardtally)

#### Defined in

[src/parachain/rewards.ts:350](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L350)

___

### <a id="getrewardspoolstake" name="getrewardspoolstake"></a> getRewardsPoolStake

▸ **getRewardsPoolStake**(`vaultCollateralIdLiteral`, `vaultAccountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getRewardsPoolStake](/interfaces/RewardsAPI.md#getrewardspoolstake)

#### Defined in

[src/parachain/rewards.ts:342](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L342)

___

### <a id="getstakingpoolnonce" name="getstakingpoolnonce"></a> getStakingPoolNonce

▸ **getStakingPoolNonce**(`collateralCurrencyIdLiteral`, `vaultAccountId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |

#### Returns

`Promise`<`number`\>

The current nonce of the staking pool

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolNonce](/interfaces/RewardsAPI.md#getstakingpoolnonce)

#### Defined in

[src/parachain/rewards.ts:191](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L191)

___

### <a id="getstakingpoolrewardpertoken" name="getstakingpoolrewardpertoken"></a> getStakingPoolRewardPerToken

▸ **getStakingPoolRewardPerToken**(`wrappedCurrencyIdLiteral`, `vaultAccountId`, `collateralCurrencyIdLiteral`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `wrappedCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultAccountId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The reward per token, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolRewardPerToken](/interfaces/RewardsAPI.md#getstakingpoolrewardpertoken)

#### Defined in

[src/parachain/rewards.ts:257](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L257)

___

### <a id="getstakingpoolrewardtally" name="getstakingpoolrewardtally"></a> getStakingPoolRewardTally

▸ **getStakingPoolRewardTally**(`rewardCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `collateralCurrencyIdLiteral`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The reward tally, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolRewardTally](/interfaces/RewardsAPI.md#getstakingpoolrewardtally)

#### Defined in

[src/parachain/rewards.ts:236](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L236)

___

### <a id="getstakingpoolslashpertoken" name="getstakingpoolslashpertoken"></a> getStakingPoolSlashPerToken

▸ **getStakingPoolSlashPerToken**(`vaultCollateralIdLiteral`, `vaultAccountId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:291](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L291)

___

### <a id="getstakingpoolslashtally" name="getstakingpoolslashtally"></a> getStakingPoolSlashTally

▸ **getStakingPoolSlashTally**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/rewards.ts:306](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L306)

___

### <a id="getstakingpoolstake" name="getstakingpoolstake"></a> getStakingPoolStake

▸ **getStakingPoolStake**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nominatorId`, `nonce?`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolStake](/interfaces/RewardsAPI.md#getstakingpoolstake)

#### Defined in

[src/parachain/rewards.ts:203](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L203)

___

### <a id="getstakingpooltotalstake" name="getstakingpooltotalstake"></a> getStakingPoolTotalStake

▸ **getStakingPoolTotalStake**(`collateralCurrencyIdLiteral`, `vaultAccountId`, `nonce?`): `Promise`<`Big`\>

Total stake for a vault

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `vaultAccountId` | `AccountId` |
| `nonce?` | `number` |

#### Returns

`Promise`<`Big`\>

The stake, as a Big object

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[getStakingPoolTotalStake](/interfaces/RewardsAPI.md#getstakingpooltotalstake)

#### Defined in

[src/parachain/rewards.ts:220](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L220)

___

### <a id="withdrawrewards" name="withdrawrewards"></a> withdrawRewards

▸ **withdrawRewards**(`vaultId`, `nonce?`): `Promise`<`void`\>

**`remarks`** Withdraw all rewards from the current account in the `vaultId` staking pool.

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) |
| `nonce?` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[RewardsAPI](/interfaces/RewardsAPI.md).[withdrawRewards](/interfaces/RewardsAPI.md#withdrawrewards)

#### Defined in

[src/parachain/rewards.ts:162](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/rewards.ts#L162)
