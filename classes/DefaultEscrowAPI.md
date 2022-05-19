[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultEscrowAPI

# Class: DefaultEscrowAPI

## Implements

- [`EscrowAPI`](/interfaces/EscrowAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultEscrowAPI.md#constructor)

### Methods

- [createLock](/classes/DefaultEscrowAPI.md#createlock)
- [findBlockEpoch](/classes/DefaultEscrowAPI.md#findblockepoch)
- [getEscrowStake](/classes/DefaultEscrowAPI.md#getescrowstake)
- [getEscrowTotalStake](/classes/DefaultEscrowAPI.md#getescrowtotalstake)
- [getMaxPeriod](/classes/DefaultEscrowAPI.md#getmaxperiod)
- [getRewardEstimate](/classes/DefaultEscrowAPI.md#getrewardestimate)
- [getRewardPerBlock](/classes/DefaultEscrowAPI.md#getrewardperblock)
- [getRewardPerToken](/classes/DefaultEscrowAPI.md#getrewardpertoken)
- [getRewardTally](/classes/DefaultEscrowAPI.md#getrewardtally)
- [getRewards](/classes/DefaultEscrowAPI.md#getrewards)
- [getSlopeChange](/classes/DefaultEscrowAPI.md#getslopechange)
- [getSpan](/classes/DefaultEscrowAPI.md#getspan)
- [getStakedBalance](/classes/DefaultEscrowAPI.md#getstakedbalance)
- [increaseAmount](/classes/DefaultEscrowAPI.md#increaseamount)
- [increaseUnlockHeight](/classes/DefaultEscrowAPI.md#increaseunlockheight)
- [rawBalanceAt](/classes/DefaultEscrowAPI.md#rawbalanceat)
- [rawSupplyAt](/classes/DefaultEscrowAPI.md#rawsupplyat)
- [roundHeight](/classes/DefaultEscrowAPI.md#roundheight)
- [saturatingSub](/classes/DefaultEscrowAPI.md#saturatingsub)
- [totalVotingSupply](/classes/DefaultEscrowAPI.md#totalvotingsupply)
- [totalVotingSupplyAt](/classes/DefaultEscrowAPI.md#totalvotingsupplyat)
- [votingBalance](/classes/DefaultEscrowAPI.md#votingbalance)
- [withdraw](/classes/DefaultEscrowAPI.md#withdraw)
- [withdrawRewards](/classes/DefaultEscrowAPI.md#withdrawrewards)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultEscrowAPI**(`api`, `governanceCurrency`, `systemAPI`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `governanceCurrency` | `Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KINT`: ``12`` ; `Planck`: ``0``  }\> |
| `systemAPI` | [`SystemAPI`](/interfaces/SystemAPI.md) |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/escrow.ts:102](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L102)

## Methods

### <a id="createlock" name="createlock"></a> createLock

▸ **createLock**<`U`\>(`amount`, `unlockHeight`): `Promise`<`void`\>

**`remarks`** The amount can't be less than the max period (`getMaxPeriod` getter) to prevent rounding errors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |
| `unlockHeight` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[createLock](/interfaces/EscrowAPI.md#createlock)

#### Defined in

[src/parachain/escrow.ts:109](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L109)

___

### <a id="findblockepoch" name="findblockepoch"></a> findBlockEpoch

▸ `Private` **findBlockEpoch**(`block`, `maxEpoch`): `Promise`<`BN`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `BN` |
| `maxEpoch` | `BN` |

#### Returns

`Promise`<`BN`\>

#### Defined in

[src/parachain/escrow.ts:285](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L285)

___

### <a id="getescrowstake" name="getescrowstake"></a> getEscrowStake

▸ **getEscrowStake**(`accountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/escrow.ts:183](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L183)

___

### <a id="getescrowtotalstake" name="getescrowtotalstake"></a> getEscrowTotalStake

▸ **getEscrowTotalStake**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/escrow.ts:188](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L188)

___

### <a id="getmaxperiod" name="getmaxperiod"></a> getMaxPeriod

▸ **getMaxPeriod**(): `Promise`<`BN`\>

#### Returns

`Promise`<`BN`\>

The maximum time for locks.

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[getMaxPeriod](/interfaces/EscrowAPI.md#getmaxperiod)

#### Defined in

[src/parachain/escrow.ts:341](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L341)

___

### <a id="getrewardestimate" name="getrewardestimate"></a> getRewardEstimate

▸ **getRewardEstimate**<`U`\>(`accountId`, `amountToLock?`, `blockLockTimeExtension?`): `Promise`<{ `amount`: `MonetaryAmount`<`Currency`<`U`\>, `U`\> ; `apy`: `Big`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |
| `amountToLock?` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |
| `blockLockTimeExtension?` | `number` |

#### Returns

`Promise`<{ `amount`: `MonetaryAmount`<`Currency`<`U`\>, `U`\> ; `apy`: `Big`  }\>

The estimated reward, as amount and percentage (APY)

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[getRewardEstimate](/interfaces/EscrowAPI.md#getrewardestimate)

#### Defined in

[src/parachain/escrow.ts:150](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L150)

___

### <a id="getrewardperblock" name="getrewardperblock"></a> getRewardPerBlock

▸ **getRewardPerBlock**(): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

#### Defined in

[src/parachain/escrow.ts:205](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L205)

___

### <a id="getrewardpertoken" name="getrewardpertoken"></a> getRewardPerToken

▸ **getRewardPerToken**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/escrow.ts:199](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L199)

___

### <a id="getrewardtally" name="getrewardtally"></a> getRewardTally

▸ **getRewardTally**(`accountId`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |

#### Returns

`Promise`<`Big`\>

#### Defined in

[src/parachain/escrow.ts:193](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L193)

___

### <a id="getrewards" name="getrewards"></a> getRewards

▸ **getRewards**<`U`\>(`accountId`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

**`remarks`** Implements https://spec.interlay.io/spec/reward.html#computereward

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The rewards that can be withdrawn by the account

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[getRewards](/interfaces/EscrowAPI.md#getrewards)

#### Defined in

[src/parachain/escrow.ts:137](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L137)

___

### <a id="getslopechange" name="getslopechange"></a> getSlopeChange

▸ `Private` **getSlopeChange**(`slopeChanges`, `key`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `slopeChanges` | `Map`<`BN`, `BN`\> |
| `key` | `BN` |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:349](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L349)

___

### <a id="getspan" name="getspan"></a> getSpan

▸ **getSpan**(): `Promise`<`BN`\>

#### Returns

`Promise`<`BN`\>

All future times are rounded by this.

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[getSpan](/interfaces/EscrowAPI.md#getspan)

#### Defined in

[src/parachain/escrow.ts:337](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L337)

___

### <a id="getstakedbalance" name="getstakedbalance"></a> getStakedBalance

▸ **getStakedBalance**(`accountId`): `Promise`<[`StakedBalance`](/modules.md#stakedbalance)<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |

#### Returns

`Promise`<[`StakedBalance`](/modules.md#stakedbalance)<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

The staked amount and end block

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[getStakedBalance](/interfaces/EscrowAPI.md#getstakedbalance)

#### Defined in

[src/parachain/escrow.ts:210](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L210)

___

### <a id="increaseamount" name="increaseamount"></a> increaseAmount

▸ **increaseAmount**<`U`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[increaseAmount](/interfaces/EscrowAPI.md#increaseamount)

#### Defined in

[src/parachain/escrow.ts:127](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L127)

___

### <a id="increaseunlockheight" name="increaseunlockheight"></a> increaseUnlockHeight

▸ **increaseUnlockHeight**(`unlockHeight`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `unlockHeight` | `number` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[increaseUnlockHeight](/interfaces/EscrowAPI.md#increaseunlockheight)

#### Defined in

[src/parachain/escrow.ts:132](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L132)

___

### <a id="rawbalanceat" name="rawbalanceat"></a> rawBalanceAt

▸ `Private` **rawBalanceAt**(`escrowPoint`, `height`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `escrowPoint` | [`RWEscrowPoint`](/modules.md#rwescrowpoint) |
| `height` | `number` |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:232](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L232)

___

### <a id="rawsupplyat" name="rawsupplyat"></a> rawSupplyAt

▸ `Private` **rawSupplyAt**(`escrowPoint`, `height`, `escrowSpan`, `slopeChanges`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `escrowPoint` | [`RWEscrowPoint`](/modules.md#rwescrowpoint) |
| `height` | `BN` |
| `escrowSpan` | `BN` |
| `slopeChanges` | `Map`<`BN`, `BN`\> |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:309](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L309)

___

### <a id="roundheight" name="roundheight"></a> roundHeight

▸ `Private` **roundHeight**(`height`, `span`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `BN` |
| `span` | `BN` |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:345](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L345)

___

### <a id="saturatingsub" name="saturatingsub"></a> saturatingSub

▸ `Private` **saturatingSub**(`x`, `y`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `BN` |
| `y` | `BN` |

#### Returns

`BN`

#### Defined in

[src/parachain/escrow.ts:357](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L357)

___

### <a id="totalvotingsupply" name="totalvotingsupply"></a> totalVotingSupply

▸ **totalVotingSupply**(`blockNumber?`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

**`remarks`**
- Expect poor performance from this function as more blocks are appended to the parachain.
It is not recommended to call this directly, but rather to query through the indexer (currently `interbtc-index`).
- Logic is duplicated from Escrow pallet in the parachain

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockNumber?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

The voting balance

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[totalVotingSupply](/interfaces/EscrowAPI.md#totalvotingsupply)

#### Defined in

[src/parachain/escrow.ts:243](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L243)

___

### <a id="totalvotingsupplyat" name="totalvotingsupplyat"></a> totalVotingSupplyAt

▸ `Private` **totalVotingSupplyAt**(`block`, `epoch`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `block` | `BN` |
| `epoch` | `BN` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

#### Defined in

[src/parachain/escrow.ts:264](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L264)

___

### <a id="votingbalance" name="votingbalance"></a> votingBalance

▸ **votingBalance**(`accountId`, `blockNumber?`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

**`remarks`** Logic is duplicated from Escrow pallet in the parachain

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |
| `blockNumber?` | `number` |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

The voting balance

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[votingBalance](/interfaces/EscrowAPI.md#votingbalance)

#### Defined in

[src/parachain/escrow.ts:215](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L215)

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(): `Promise`<`void`\>

**`remarks`** Withdraws all locked governance currency

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[withdraw](/interfaces/EscrowAPI.md#withdraw)

#### Defined in

[src/parachain/escrow.ts:117](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L117)

___

### <a id="withdrawrewards" name="withdrawrewards"></a> withdrawRewards

▸ **withdrawRewards**(): `Promise`<`void`\>

**`remarks`** Withdraws stake-to-vote rewards

#### Returns

`Promise`<`void`\>

#### Implementation of

[EscrowAPI](/interfaces/EscrowAPI.md).[withdrawRewards](/interfaces/EscrowAPI.md#withdrawrewards)

#### Defined in

[src/parachain/escrow.ts:122](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L122)
