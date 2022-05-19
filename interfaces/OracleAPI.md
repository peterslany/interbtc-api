[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / OracleAPI

# Interface: OracleAPI

## Implemented by

- [`DefaultOracleAPI`](/classes/DefaultOracleAPI.md)

## Table of contents

### Methods

- [convertCollateralToWrapped](/interfaces/OracleAPI.md#convertcollateraltowrapped)
- [convertWrappedToCurrency](/interfaces/OracleAPI.md#convertwrappedtocurrency)
- [getBitcoinFees](/interfaces/OracleAPI.md#getbitcoinfees)
- [getExchangeRate](/interfaces/OracleAPI.md#getexchangerate)
- [getOnlineTimeout](/interfaces/OracleAPI.md#getonlinetimeout)
- [getRawValuesUpdated](/interfaces/OracleAPI.md#getrawvaluesupdated)
- [getSourcesById](/interfaces/OracleAPI.md#getsourcesbyid)
- [getValidUntil](/interfaces/OracleAPI.md#getvaliduntil)
- [isOnline](/interfaces/OracleAPI.md#isonline)
- [setBitcoinFees](/interfaces/OracleAPI.md#setbitcoinfees)
- [setExchangeRate](/interfaces/OracleAPI.md#setexchangerate)
- [waitForExchangeRateUpdate](/interfaces/OracleAPI.md#waitforexchangerateupdate)
- [waitForFeeEstimateUpdate](/interfaces/OracleAPI.md#waitforfeeestimateupdate)

## Methods

### <a id="convertcollateraltowrapped" name="convertcollateraltowrapped"></a> convertCollateralToWrapped

▸ **convertCollateralToWrapped**<`C`\>(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> | The amount of collateral tokens to convert |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Converted value

#### Defined in

[src/parachain/oracle.ts:82](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L82)

___

### <a id="convertwrappedtocurrency" name="convertwrappedtocurrency"></a> convertWrappedToCurrency

▸ **convertWrappedToCurrency**<`C`\>(`amount`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | The amount of wrapped tokens to convert |
| `currency` | `Currency`<`C`\> | A `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Converted value

#### Defined in

[src/parachain/oracle.ts:74](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L74)

___

### <a id="getbitcoinfees" name="getbitcoinfees"></a> getBitcoinFees

▸ **getBitcoinFees**(): `Promise`<`Big`\>

Obtains the current fees for BTC transactions, in satoshi/byte.

#### Returns

`Promise`<`Big`\>

Big value for the current inclusion fees.

#### Defined in

[src/parachain/oracle.ts:44](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L44)

___

### <a id="getexchangerate" name="getexchangerate"></a> getExchangeRate

▸ **getExchangeRate**<`C`\>(`collateralCurrency`, `wrappedCurrency?`): `Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> | - |
| `wrappedCurrency?` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> | The wrapped currency to use in the returned exchange rate type, defaults to `Bitcoin` |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

The exchange rate between Bitcoin and the provided collateral currency

#### Defined in

[src/parachain/oracle.ts:36](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L36)

___

### <a id="getonlinetimeout" name="getonlinetimeout"></a> getOnlineTimeout

▸ **getOnlineTimeout**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The period of time (in milliseconds) after an oracle's last submission
during which it is considered online

#### Defined in

[src/parachain/oracle.ts:89](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L89)

___

### <a id="getrawvaluesupdated" name="getrawvaluesupdated"></a> getRawValuesUpdated

▸ **getRawValuesUpdated**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `InterbtcPrimitivesOracleKey` | A key defining an exchange rate or a BTC network fee estimate |

#### Returns

`Promise`<`boolean`\>

Whether the oracle entr for the given key has been updated

#### Defined in

[src/parachain/oracle.ts:94](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L94)

___

### <a id="getsourcesbyid" name="getsourcesbyid"></a> getSourcesById

▸ **getSourcesById**(): `Promise`<`Map`<`string`, `string`\>\>

#### Returns

`Promise`<`Map`<`string`, `string`\>\>

A map from the oracle's account id to its name

#### Defined in

[src/parachain/oracle.ts:52](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L52)

___

### <a id="getvaliduntil" name="getvaliduntil"></a> getValidUntil

▸ **getValidUntil**<`U`\>(`counterCurrency`): `Promise`<`Date`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `counterCurrency` | `Currency`<`U`\> |

#### Returns

`Promise`<`Date`\>

Last exchange rate time

#### Defined in

[src/parachain/oracle.ts:48](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L48)

___

### <a id="isonline" name="isonline"></a> isOnline

▸ **isOnline**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

Boolean value indicating whether the oracle is online

#### Defined in

[src/parachain/oracle.ts:56](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L56)

___

### <a id="setbitcoinfees" name="setbitcoinfees"></a> setBitcoinFees

▸ **setBitcoinFees**(`fees`): `Promise`<`void`\>

Send a transaction to set the current fee estimate for BTC transactions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fees` | `Big` | Estimated Satoshis per bytes to get a transaction included |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:68](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L68)

___

### <a id="setexchangerate" name="setexchangerate"></a> setExchangeRate

▸ **setExchangeRate**<`C`\>(`exchangeRate`): `Promise`<`void`\>

Send a transaction to set the exchange rate between Bitcoin and a collateral currency

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\> | The rate to set |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:61](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L61)

___

### <a id="waitforexchangerateupdate" name="waitforexchangerateupdate"></a> waitForExchangeRateUpdate

▸ **waitForExchangeRateUpdate**<`C`, `U`\>(`exchangeRate`): `Promise`<`void`\>

**`remark`** Awaits an oracle update to the exchange rate

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |
| `U` | extends `Object` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<`U`\>, `U`, `Currency`<`C`\>, `C`\> | The exchange rate whose counter currency to await an update for (with respect to BTC) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:105](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L105)

___

### <a id="waitforfeeestimateupdate" name="waitforfeeestimateupdate"></a> waitForFeeEstimateUpdate

▸ **waitForFeeEstimateUpdate**(`type?`): `Promise`<`void`\>

**`remark`** Awaits an oracle update to the BTC inclusion fee

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type?` | `FeeEstimationType` | The fee estimate type whose update is awaited |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/oracle.ts:99](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L99)
