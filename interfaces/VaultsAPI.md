[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / VaultsAPI

# Interface: VaultsAPI

## Implemented by

- [`DefaultVaultsAPI`](/classes/DefaultVaultsAPI.md)

## Table of contents

### Methods

- [calculateCapacity](/interfaces/VaultsAPI.md#calculatecapacity)
- [computeBackingCollateral](/interfaces/VaultsAPI.md#computebackingcollateral)
- [computeReward](/interfaces/VaultsAPI.md#computereward)
- [depositCollateral](/interfaces/VaultsAPI.md#depositcollateral)
- [get](/interfaces/VaultsAPI.md#get)
- [getAPY](/interfaces/VaultsAPI.md#getapy)
- [getBlockRewardAPY](/interfaces/VaultsAPI.md#getblockrewardapy)
- [getCollateral](/interfaces/VaultsAPI.md#getcollateral)
- [getGovernanceReward](/interfaces/VaultsAPI.md#getgovernancereward)
- [getIssuedAmount](/interfaces/VaultsAPI.md#getissuedamount)
- [getLiquidationCollateralThreshold](/interfaces/VaultsAPI.md#getliquidationcollateralthreshold)
- [getLiquidationVault](/interfaces/VaultsAPI.md#getliquidationvault)
- [getMaxNominationRatio](/interfaces/VaultsAPI.md#getmaxnominationratio)
- [getPremiumRedeemThreshold](/interfaces/VaultsAPI.md#getpremiumredeemthreshold)
- [getPremiumRedeemVaults](/interfaces/VaultsAPI.md#getpremiumredeemvaults)
- [getPunishmentFee](/interfaces/VaultsAPI.md#getpunishmentfee)
- [getRequiredCollateralForVault](/interfaces/VaultsAPI.md#getrequiredcollateralforvault)
- [getSecureCollateralThreshold](/interfaces/VaultsAPI.md#getsecurecollateralthreshold)
- [getStakingCapacity](/interfaces/VaultsAPI.md#getstakingcapacity)
- [getTotalIssuableAmount](/interfaces/VaultsAPI.md#gettotalissuableamount)
- [getTotalIssuedAmount](/interfaces/VaultsAPI.md#gettotalissuedamount)
- [getVaultCollateralization](/interfaces/VaultsAPI.md#getvaultcollateralization)
- [getVaultsWithIssuableTokens](/interfaces/VaultsAPI.md#getvaultswithissuabletokens)
- [getVaultsWithRedeemableTokens](/interfaces/VaultsAPI.md#getvaultswithredeemabletokens)
- [getWrappedCurrency](/interfaces/VaultsAPI.md#getwrappedcurrency)
- [getWrappedReward](/interfaces/VaultsAPI.md#getwrappedreward)
- [isVaultFlaggedForTheft](/interfaces/VaultsAPI.md#isvaultflaggedfortheft)
- [list](/interfaces/VaultsAPI.md#list)
- [reportVaultTheft](/interfaces/VaultsAPI.md#reportvaulttheft)
- [selectRandomVaultIssue](/interfaces/VaultsAPI.md#selectrandomvaultissue)
- [selectRandomVaultRedeem](/interfaces/VaultsAPI.md#selectrandomvaultredeem)
- [toggleIssueRequests](/interfaces/VaultsAPI.md#toggleissuerequests)
- [withdrawCollateral](/interfaces/VaultsAPI.md#withdrawcollateral)

## Methods

### <a id="calculatecapacity" name="calculatecapacity"></a> calculateCapacity

▸ **calculateCapacity**<`C`\>(`collateral`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | Amount of collateral to calculate issuable capacity for |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Issuable amount by the vault, given the collateral amount

#### Defined in

[src/parachain/vaults.ts:130](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L130)

___

### <a id="computebackingcollateral" name="computebackingcollateral"></a> computeBackingCollateral

▸ **computeBackingCollateral**(`vaultId`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | Vault ID object |
| `nonce?` | `number` | Nonce of the staking pool |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The entire collateral backing a vault's issued tokens.

#### Defined in

[src/parachain/vaults.ts:264](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L264)

___

### <a id="computereward" name="computereward"></a> computeReward

▸ **computeReward**(`vaultAccountId`, `nominatorId`, `collateralCurrencyId`, `rewardCurrencyIdLiteral`, `nonce?`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

Compute the total reward, including the staking (local) pool and the rewards (global) pool

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault ID whose reward pool to check |
| `nominatorId` | `AccountId` | The account ID of the staking pool nominator |
| `collateralCurrencyId` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | - |
| `rewardCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The reward currency, e.g. kBTC, KINT, interBTC, INTR |
| `nonce?` | `number` | - |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

A Monetary.js amount object, representing the total reward in the given currency

#### Defined in

[src/parachain/vaults.ts:290](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L290)

___

### <a id="depositcollateral" name="depositcollateral"></a> depositCollateral

▸ **depositCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of extra collateral to lock |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:230](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L230)

___

### <a id="get" name="get"></a> get

▸ **get**(`vaultAccountId`, `collateralCurrencyIdLiteral`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The ID of the vault to fetch |
| `collateralCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | Collateral used by vault |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A vault object

#### Defined in

[src/parachain/vaults.ts:66](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L66)

___

### <a id="getapy" name="getapy"></a> getAPY

▸ **getAPY**(`vaultAccountId`, `collateralCurrency`): `Promise`<`Big`\>

Get the total APY for a vault based on the income in wrapped and collateral tokens
divided by the locked collateral.

**`note`** this does not account for interest compounding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Defined in

[src/parachain/vaults.ts:201](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L201)

___

### <a id="getblockrewardapy" name="getblockrewardapy"></a> getBlockRewardAPY

▸ **getBlockRewardAPY**(`vaultAccountId`, `nominatorId`, `collateralCurrency`, `governanceCurrency`): `Promise`<`Big`\>

Gets the estimated APY for just the block rewards (in governance tokens).

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultAccountId` | `AccountId` |
| `nominatorId` | `AccountId` |
| `collateralCurrency` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |
| `governanceCurrency` | [`GovernanceIdLiteral`](/modules.md#governanceidliteral) |

#### Returns

`Promise`<`Big`\>

the APY as a percentage string

#### Defined in

[src/parachain/vaults.ts:210](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L210)

___

### <a id="getcollateral" name="getcollateral"></a> getCollateral

▸ **getCollateral**(`vaultId`, `collateralCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vaultId` | `AccountId` |
| `collateralCurrencyIdLiteral` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The collateral of a vault, taking slashes into account.

#### Defined in

[src/parachain/vaults.ts:241](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L241)

___

### <a id="getgovernancereward" name="getgovernancereward"></a> getGovernanceReward

▸ **getGovernanceReward**(`vaultAccountId`, `vaultCollateralIdLiteral`, `governanceCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault ID whose reward pool to check |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |
| `governanceCurrencyIdLiteral` | [`GovernanceIdLiteral`](/modules.md#governanceidliteral) | The fee reward currency |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>\>

The total reward collected by the vault

#### Defined in

[src/parachain/vaults.ts:314](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L314)

___

### <a id="getissuedamount" name="getissuedamount"></a> getIssuedAmount

▸ **getIssuedAmount**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The amount of wrapped tokens issued by the given vault

#### Defined in

[src/parachain/vaults.ts:113](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L113)

___

### <a id="getliquidationcollateralthreshold" name="getliquidationcollateralthreshold"></a> getLiquidationCollateralThreshold

▸ **getLiquidationCollateralThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The lower bound for vault collateralization.
If a Vault’s collateral rate
drops below this, automatic liquidation (forced Redeem) is triggered.

#### Defined in

[src/parachain/vaults.ts:177](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L177)

___

### <a id="getliquidationvault" name="getliquidationvault"></a> getLiquidationVault

▸ **getLiquidationVault**(`collateralCurrency`): `Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<[`SystemVaultExt`](/interfaces/SystemVaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

A vault object representing the liquidation vault

#### Defined in

[src/parachain/vaults.ts:235](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L235)

___

### <a id="getmaxnominationratio" name="getmaxnominationratio"></a> getMaxNominationRatio

▸ **getMaxNominationRatio**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> | The collateral currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`Big`\>

The maximum collateral a vault can accept as nomination, as a ratio of its own collateral

#### Defined in

[src/parachain/vaults.ts:249](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L249)

___

### <a id="getpremiumredeemthreshold" name="getpremiumredeemthreshold"></a> getPremiumRedeemThreshold

▸ **getPremiumRedeemThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The collateral rate at which users receive
a premium allocated from the Vault’s collateral, when performing a redeem with this Vault.

#### Defined in

[src/parachain/vaults.ts:183](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L183)

___

### <a id="getpremiumredeemvaults" name="getpremiumredeemvaults"></a> getPremiumRedeemVaults

▸ **getPremiumRedeemVaults**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults below the premium redeem threshold, sorted in descending order of their redeemable tokens

#### Defined in

[src/parachain/vaults.ts:146](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L146)

___

### <a id="getpunishmentfee" name="getpunishmentfee"></a> getPunishmentFee

▸ **getPunishmentFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

Fee that a Vault has to pay, as a percentage, if it fails to execute
redeem or replace requests (for redeem, on top of the slashed wrapped-token-to-collateral
value of the request). The fee is paid in collateral currency based on the wrapped token
amount at the current exchange rate.

#### Defined in

[src/parachain/vaults.ts:222](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L222)

___

### <a id="getrequiredcollateralforvault" name="getrequiredcollateralforvault"></a> getRequiredCollateralForVault

▸ **getRequiredCollateralForVault**<`C`\>(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Get the amount of collateral required for the given vault to be at the
current SecureCollateralThreshold with the current exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | `Currency`<`C`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

The required collateral the vault needs to deposit to stay
above the threshold limit

#### Defined in

[src/parachain/vaults.ts:104](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L104)

___

### <a id="getsecurecollateralthreshold" name="getsecurecollateralthreshold"></a> getSecureCollateralThreshold

▸ **getSecureCollateralThreshold**(`collateralCurrency`): `Promise`<`Big`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  }\> \| `Currency`<{ `KSM`: ``12`` ; `Planck`: ``0``  }\> |

#### Returns

`Promise`<`Big`\>

The over-collateralization rate for collateral locked
by Vaults, necessary for issuing wrapped tokens

#### Defined in

[src/parachain/vaults.ts:189](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L189)

___

### <a id="getstakingcapacity" name="getstakingcapacity"></a> getStakingCapacity

▸ **getStakingCapacity**(`vaultAccountId`, `collateralCurrency`): `Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrency` | [`CurrencyIdLiteral`](/enums/CurrencyIdLiteral.md) | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

Staking capacity, as a collateral currency (e.g. DOT)

#### Defined in

[src/parachain/vaults.ts:255](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L255)

___

### <a id="gettotalissuableamount" name="gettotalissuableamount"></a> getTotalIssuableAmount

▸ **getTotalIssuableAmount**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total amount of wrapped tokens that can be issued, considering the collateral
locked by the vaults

#### Defined in

[src/parachain/vaults.ts:125](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L125)

___

### <a id="gettotalissuedamount" name="gettotalissuedamount"></a> getTotalIssuedAmount

▸ **getTotalIssuedAmount**(): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total amount of wrapped tokens issued by the vaults

#### Defined in

[src/parachain/vaults.ts:120](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L120)

___

### <a id="getvaultcollateralization" name="getvaultcollateralization"></a> getVaultCollateralization

▸ **getVaultCollateralization**<`C`\>(`vaultAccountId`, `collateralCurrencyIdLiteral`, `newCollateral?`, `onlyIssued?`): `Promise`<`undefined` \| `Big`\>

Get the collateralization of a single vault measured by dividing the value of issued (wrapped) tokens
by the value of total locked collateral.

**`remarks`** Undefined collateralization is handled as infinite collateralization in the UI.
If no tokens have been issued, the `collateralFunds / issuedFunds` ratio divides by zero,
which means collateralization is infinite.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | the vault account id |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by vault |
| `newCollateral?` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | use this instead of the vault's actual collateral |
| `onlyIssued?` | `boolean` | optional, defaults to `false`. Specifies whether the collateralization should only include the issued tokens, leaving out unsettled ("to-be-issued") tokens |

#### Returns

`Promise`<`undefined` \| `Big`\>

the vault collateralization

#### Defined in

[src/parachain/vaults.ts:81](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L81)

___

### <a id="getvaultswithissuabletokens" name="getvaultswithissuabletokens"></a> getVaultsWithIssuableTokens

▸ **getVaultsWithIssuableTokens**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

**`remarks`** The result is not sorted as an attempt to randomize the assignment of requests to vaults.

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults with issuable tokens, not sorted in any particular order.

#### Defined in

[src/parachain/vaults.ts:151](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L151)

___

### <a id="getvaultswithredeemabletokens" name="getvaultswithredeemabletokens"></a> getVaultsWithRedeemableTokens

▸ **getVaultsWithRedeemableTokens**(): `Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

#### Returns

`Promise`<`Map`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md), `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>\>

Vaults with redeemable tokens, sorted in descending order.

#### Defined in

[src/parachain/vaults.ts:157](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L157)

___

### <a id="getwrappedcurrency" name="getwrappedcurrency"></a> getWrappedCurrency

▸ **getWrappedCurrency**(): `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Returns

`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

The wrapped currency issued by the vaults

#### Defined in

[src/parachain/vaults.ts:280](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L280)

___

### <a id="getwrappedreward" name="getwrappedreward"></a> getWrappedReward

▸ **getWrappedReward**(`vaultAccountId`, `vaultCollateralIdLiteral`, `rewardCurrencyIdLiteral`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault ID whose reward pool to check |
| `vaultCollateralIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | Collateral used by the vault |
| `rewardCurrencyIdLiteral` | [`WrappedIdLiteral`](/modules.md#wrappedidliteral) | The fee reward currency |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

The total reward collected by the vault

#### Defined in

[src/parachain/vaults.ts:303](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L303)

___

### <a id="isvaultflaggedfortheft" name="isvaultflaggedfortheft"></a> isVaultFlaggedForTheft

▸ **isVaultFlaggedForTheft**(`vaultAccountId`, `collateralCurrencyIdLiteral`, `btcTxId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | The vault account ID |
| `collateralCurrencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) | - |
| `btcTxId` | `string` | ID of the Bitcoin transaction to check |

#### Returns

`Promise`<`boolean`\>

A bollean value

#### Defined in

[src/parachain/vaults.ts:166](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L166)

___

### <a id="list" name="list"></a> list

▸ **list**(`atBlock?`): `Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `atBlock?` | `BlockHash` |

#### Returns

`Promise`<[`VaultExt`](/classes/VaultExt.md)<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>[]\>

An array containing the vaults with non-zero backing collateral

#### Defined in

[src/parachain/vaults.ts:60](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L60)

___

### <a id="reportvaulttheft" name="reportvaulttheft"></a> reportVaultTheft

▸ **reportVaultTheft**(`vaultAccountId`, `btcTxId`): `Promise`<`void`\>

A relayer may report Vault misbehavior by providing a fraud proof
(malicious Bitcoin transaction and transaction inclusion proof).

**`remarks`** If `txId` is not set, the `merkleProof` and `rawTx` must both be set.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultAccountId` | `AccountId` | - |
| `btcTxId` | `string` | Bitcoin transaction ID |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:276](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L276)

___

### <a id="selectrandomvaultissue" name="selectrandomvaultissue"></a> selectRandomVaultIssue

▸ **selectRandomVaultIssue**(`amount`): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | Wrapped tokens amount to issue |

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

A vault that has sufficient collateral to issue the given amount

#### Defined in

[src/parachain/vaults.ts:137](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L137)

___

### <a id="selectrandomvaultredeem" name="selectrandomvaultredeem"></a> selectRandomVaultRedeem

▸ **selectRandomVaultRedeem**(`amount`): `Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | Wrapped tokens amount to redeem |

#### Returns

`Promise`<[`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)\>

A vault that has issued sufficient wrapped tokens to redeem the given amount

#### Defined in

[src/parachain/vaults.ts:142](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L142)

___

### <a id="toggleissuerequests" name="toggleissuerequests"></a> toggleIssueRequests

▸ **toggleIssueRequests**(`vaultId`, `acceptNewIssues`): `Promise`<`void`\>

Enables or disables issue requests for given vault

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vaultId` | [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md) | The vault ID whose issuing will be toggled |
| `acceptNewIssues` | `boolean` | Boolean denoting whether issuing should be enabled or not |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:324](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L324)

___

### <a id="withdrawcollateral" name="withdrawcollateral"></a> withdrawCollateral

▸ **withdrawCollateral**<`C`\>(`amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of collateral to withdraw |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/vaults.ts:226](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/vaults.ts#L226)
