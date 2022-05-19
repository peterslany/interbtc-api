[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / FeeAPI

# Interface: FeeAPI

## Implemented by

- [`DefaultFeeAPI`](/classes/DefaultFeeAPI.md)

## Table of contents

### Methods

- [calculateAPY](/interfaces/FeeAPI.md#calculateapy)
- [getGriefingCollateral](/interfaces/FeeAPI.md#getgriefingcollateral)
- [getIssueFee](/interfaces/FeeAPI.md#getissuefee)
- [getIssueGriefingCollateralRate](/interfaces/FeeAPI.md#getissuegriefingcollateralrate)
- [getReplaceGriefingCollateralRate](/interfaces/FeeAPI.md#getreplacegriefingcollateralrate)

## Methods

### <a id="calculateapy" name="calculateapy"></a> calculateAPY

▸ **calculateAPY**<`C`\>(`feesWrapped`, `lockedCollateral`, `exchangeRate?`): `Promise`<`Big`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `feesWrapped` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | Wrapped token fees accrued, in wrapped token (e.g. BTC) |
| `lockedCollateral` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | Collateral value representing the value locked to gain yield. |
| `exchangeRate?` | `ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\> | (Optional) Conversion rate, as a `Monetary.js` object |

#### Returns

`Promise`<`Big`\>

The APY, given the parameters

#### Defined in

[src/parachain/fee.ts:35](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/fee.ts#L35)

___

### <a id="getgriefingcollateral" name="getgriefingcollateral"></a> getGriefingCollateral

▸ **getGriefingCollateral**(`amount`, `type`): `Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | Amount, in BTC, for which to compute the required griefing collateral |
| `type` | `GriefingCollateralType` | Type of griefing collateral to compute (e.g. for issuing, replacing) |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>\>

The griefing collateral

#### Defined in

[src/parachain/fee.ts:25](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/fee.ts#L25)

___

### <a id="getissuefee" name="getissuefee"></a> getIssueFee

▸ **getIssueFee**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The percentage of issued token that is received by the vault as reward

#### Defined in

[src/parachain/fee.ts:51](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/fee.ts#L51)

___

### <a id="getissuegriefingcollateralrate" name="getissuegriefingcollateralrate"></a> getIssueGriefingCollateralRate

▸ **getIssueGriefingCollateralRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The griefing collateral rate for issuing InterBTC

#### Defined in

[src/parachain/fee.ts:43](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/fee.ts#L43)

___

### <a id="getreplacegriefingcollateralrate" name="getreplacegriefingcollateralrate"></a> getReplaceGriefingCollateralRate

▸ **getReplaceGriefingCollateralRate**(): `Promise`<`Big`\>

#### Returns

`Promise`<`Big`\>

The griefing collateral rate for the Vault replace request

#### Defined in

[src/parachain/fee.ts:47](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/fee.ts#L47)
