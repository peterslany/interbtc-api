[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / EscrowAPI

# Interface: EscrowAPI

## Implemented by

- [`DefaultEscrowAPI`](/classes/DefaultEscrowAPI.md)

## Table of contents

### Methods

- [createLock](/interfaces/EscrowAPI.md#createlock)
- [getMaxPeriod](/interfaces/EscrowAPI.md#getmaxperiod)
- [getRewardEstimate](/interfaces/EscrowAPI.md#getrewardestimate)
- [getRewards](/interfaces/EscrowAPI.md#getrewards)
- [getSpan](/interfaces/EscrowAPI.md#getspan)
- [getStakedBalance](/interfaces/EscrowAPI.md#getstakedbalance)
- [increaseAmount](/interfaces/EscrowAPI.md#increaseamount)
- [increaseUnlockHeight](/interfaces/EscrowAPI.md#increaseunlockheight)
- [totalVotingSupply](/interfaces/EscrowAPI.md#totalvotingsupply)
- [votingBalance](/interfaces/EscrowAPI.md#votingbalance)
- [withdraw](/interfaces/EscrowAPI.md#withdraw)
- [withdrawRewards](/interfaces/EscrowAPI.md#withdrawrewards)

## Methods

### <a id="createlock" name="createlock"></a> createLock

▸ **createLock**<`U`\>(`amount`, `unlockHeight`): `Promise`<`void`\>

**`remarks`** The amount can't be less than the max period (`getMaxPeriod` getter) to prevent rounding errors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | Governance token amount to lock (e.g. KINT or INTR) |
| `unlockHeight` | `number` | Block number to lock until |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:49](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L49)

___

### <a id="getmaxperiod" name="getmaxperiod"></a> getMaxPeriod

▸ **getMaxPeriod**(): `Promise`<`BN`\>

#### Returns

`Promise`<`BN`\>

The maximum time for locks.

#### Defined in

[src/parachain/escrow.ts:66](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L66)

___

### <a id="getrewardestimate" name="getrewardestimate"></a> getRewardEstimate

▸ **getRewardEstimate**<`U`\>(`accountId`, `amountToLock?`, `blockLockTimeExtension?`): `Promise`<{ `amount`: `MonetaryAmount`<`Currency`<`U`\>, `U`\> ; `apy`: `Big`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `AccountId` | User account ID |
| `amountToLock?` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | New amount to add to the current stake |
| `blockLockTimeExtension?` | `number` | Amount of blocks the stake will be locked for |

#### Returns

`Promise`<{ `amount`: `MonetaryAmount`<`Currency`<`U`\>, `U`\> ; `apy`: `Big`  }\>

The estimated reward, as amount and percentage (APY)

#### Defined in

[src/parachain/escrow.ts:91](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L91)

___

### <a id="getrewards" name="getrewards"></a> getRewards

▸ **getRewards**<`U`\>(`accountId`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

**`remarks`** Implements https://spec.interlay.io/spec/reward.html#computereward

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `AccountId` | User account ID |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The rewards that can be withdrawn by the account

#### Defined in

[src/parachain/escrow.ts:84](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L84)

___

### <a id="getspan" name="getspan"></a> getSpan

▸ **getSpan**(): `Promise`<`BN`\>

#### Returns

`Promise`<`BN`\>

All future times are rounded by this.

#### Defined in

[src/parachain/escrow.ts:62](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L62)

___

### <a id="getstakedbalance" name="getstakedbalance"></a> getStakedBalance

▸ **getStakedBalance**(`accountId`): `Promise`<[`StakedBalance`](/modules.md#stakedbalance)<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `AccountId` | ID of the user whose stake to fetch |

#### Returns

`Promise`<[`StakedBalance`](/modules.md#stakedbalance)<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

The staked amount and end block

#### Defined in

[src/parachain/escrow.ts:54](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L54)

___

### <a id="increaseamount" name="increaseamount"></a> increaseAmount

▸ **increaseAmount**<`U`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | Governance token amount to lock (e.g. KINT or INTR) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:74](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L74)

___

### <a id="increaseunlockheight" name="increaseunlockheight"></a> increaseUnlockHeight

▸ **increaseUnlockHeight**(`unlockHeight`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `unlockHeight` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:78](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L78)

___

### <a id="totalvotingsupply" name="totalvotingsupply"></a> totalVotingSupply

▸ **totalVotingSupply**(`blockNumber?`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

**`remarks`**
- Expect poor performance from this function as more blocks are appended to the parachain.
It is not recommended to call this directly, but rather to query through the indexer (currently `interbtc-index`).
- Logic is duplicated from Escrow pallet in the parachain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `blockNumber?` | `number` | The number of block to query state at |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

The voting balance

#### Defined in

[src/parachain/escrow.ts:43](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L43)

___

### <a id="votingbalance" name="votingbalance"></a> votingBalance

▸ **votingBalance**(`accountId`, `blockNumber?`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

**`remarks`** Logic is duplicated from Escrow pallet in the parachain

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `AccountId` | Account whose voting balance to fetch |
| `blockNumber?` | `number` | The number of block to query state at |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

The voting balance

#### Defined in

[src/parachain/escrow.ts:31](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L31)

___

### <a id="withdraw" name="withdraw"></a> withdraw

▸ **withdraw**(): `Promise`<`void`\>

**`remarks`** Withdraws all locked governance currency

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:58](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L58)

___

### <a id="withdrawrewards" name="withdrawrewards"></a> withdrawRewards

▸ **withdrawRewards**(): `Promise`<`void`\>

**`remarks`** Withdraws stake-to-vote rewards

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/escrow.ts:70](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/escrow.ts#L70)
