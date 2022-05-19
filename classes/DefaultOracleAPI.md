[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultOracleAPI

# Class: DefaultOracleAPI

## Implements

- [`OracleAPI`](/interfaces/OracleAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultOracleAPI.md#constructor)

### Methods

- [convertCollateralToWrapped](/classes/DefaultOracleAPI.md#convertcollateraltowrapped)
- [convertWrappedToCurrency](/classes/DefaultOracleAPI.md#convertwrappedtocurrency)
- [getBitcoinFees](/classes/DefaultOracleAPI.md#getbitcoinfees)
- [getExchangeRate](/classes/DefaultOracleAPI.md#getexchangerate)
- [getOnlineTimeout](/classes/DefaultOracleAPI.md#getonlinetimeout)
- [getRawValuesUpdated](/classes/DefaultOracleAPI.md#getrawvaluesupdated)
- [getSourcesById](/classes/DefaultOracleAPI.md#getsourcesbyid)
- [getValidUntil](/classes/DefaultOracleAPI.md#getvaliduntil)
- [hasOracleError](/classes/DefaultOracleAPI.md#hasoracleerror)
- [isOnline](/classes/DefaultOracleAPI.md#isonline)
- [setBitcoinFees](/classes/DefaultOracleAPI.md#setbitcoinfees)
- [setExchangeRate](/classes/DefaultOracleAPI.md#setexchangerate)
- [waitForExchangeRateUpdate](/classes/DefaultOracleAPI.md#waitforexchangerateupdate)
- [waitForFeeEstimateUpdate](/classes/DefaultOracleAPI.md#waitforfeeestimateupdate)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultOracleAPI**(`api`, `wrappedCurrency`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `wrappedCurrency` | `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/oracle.ts:111](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L111)

## Methods

### <a id="convertcollateraltowrapped" name="convertcollateraltowrapped"></a> convertCollateralToWrapped

▸ **convertCollateralToWrapped**<`C`\>(`amount`): `Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>\>

Converted value

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[convertCollateralToWrapped](/interfaces/OracleAPI.md#convertcollateraltowrapped)

#### Defined in

[src/parachain/oracle.ts:144](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L144)

___

### <a id="convertwrappedtocurrency" name="convertwrappedtocurrency"></a> convertWrappedToCurrency

▸ **convertWrappedToCurrency**<`C`\>(`amount`, `currency`): `Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `amount` | `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\> |
| `currency` | `Currency`<`C`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`C`\>, `C`\>\>

Converted value

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[convertWrappedToCurrency](/interfaces/OracleAPI.md#convertwrappedtocurrency)

#### Defined in

[src/parachain/oracle.ts:136](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L136)

___

### <a id="getbitcoinfees" name="getbitcoinfees"></a> getBitcoinFees

▸ **getBitcoinFees**(): `Promise`<`Big`\>

Obtains the current fees for BTC transactions, in satoshi/byte.

#### Returns

`Promise`<`Big`\>

Big value for the current inclusion fees.

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getBitcoinFees](/interfaces/OracleAPI.md#getbitcoinfees)

#### Defined in

[src/parachain/oracle.ts:171](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L171)

___

### <a id="getexchangerate" name="getexchangerate"></a> getExchangeRate

▸ **getExchangeRate**<`C`\>(`collateralCurrency`): `Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `collateralCurrency` | `Currency`<`C`\> |

#### Returns

`Promise`<`ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\>\>

The exchange rate between Bitcoin and the provided collateral currency

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getExchangeRate](/interfaces/OracleAPI.md#getexchangerate)

#### Defined in

[src/parachain/oracle.ts:117](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L117)

___

### <a id="getonlinetimeout" name="getonlinetimeout"></a> getOnlineTimeout

▸ **getOnlineTimeout**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

The period of time (in milliseconds) after an oracle's last submission
during which it is considered online

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getOnlineTimeout](/interfaces/OracleAPI.md#getonlinetimeout)

#### Defined in

[src/parachain/oracle.ts:151](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L151)

___

### <a id="getrawvaluesupdated" name="getrawvaluesupdated"></a> getRawValuesUpdated

▸ **getRawValuesUpdated**(`key`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `InterbtcPrimitivesOracleKey` |

#### Returns

`Promise`<`boolean`\>

Whether the oracle entr for the given key has been updated

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getRawValuesUpdated](/interfaces/OracleAPI.md#getrawvaluesupdated)

#### Defined in

[src/parachain/oracle.ts:217](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L217)

___

### <a id="getsourcesbyid" name="getsourcesbyid"></a> getSourcesById

▸ **getSourcesById**(): `Promise`<`Map`<`string`, `string`\>\>

#### Returns

`Promise`<`Map`<`string`, `string`\>\>

A map from the oracle's account id to its name

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getSourcesById](/interfaces/OracleAPI.md#getsourcesbyid)

#### Defined in

[src/parachain/oracle.ts:199](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L199)

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

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[getValidUntil](/interfaces/OracleAPI.md#getvaliduntil)

#### Defined in

[src/parachain/oracle.ts:206](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L206)

___

### <a id="hasoracleerror" name="hasoracleerror"></a> hasOracleError

▸ `Private` **hasOracleError**(`errors`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | `SecurityErrorCode`[] |

#### Returns

`boolean`

#### Defined in

[src/parachain/oracle.ts:238](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L238)

___

### <a id="isonline" name="isonline"></a> isOnline

▸ **isOnline**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

Boolean value indicating whether the oracle is online

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[isOnline](/interfaces/OracleAPI.md#isonline)

#### Defined in

[src/parachain/oracle.ts:212](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L212)

___

### <a id="setbitcoinfees" name="setbitcoinfees"></a> setBitcoinFees

▸ **setBitcoinFees**(`fees`): `Promise`<`void`\>

Send a transaction to set the current fee estimate for BTC transactions

#### Parameters

| Name | Type |
| :------ | :------ |
| `fees` | `Big` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[setBitcoinFees](/interfaces/OracleAPI.md#setbitcoinfees)

#### Defined in

[src/parachain/oracle.ts:186](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L186)

___

### <a id="setexchangerate" name="setexchangerate"></a> setExchangeRate

▸ **setExchangeRate**<`C`\>(`exchangeRate`): `Promise`<`void`\>

Send a transaction to set the exchange rate between Bitcoin and a collateral currency

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }, `Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[setExchangeRate](/interfaces/OracleAPI.md#setexchangerate)

#### Defined in

[src/parachain/oracle.ts:156](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L156)

___

### <a id="waitforexchangerateupdate" name="waitforexchangerateupdate"></a> waitForExchangeRateUpdate

▸ **waitForExchangeRateUpdate**<`C`, `U`\>(`exchangeRate`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |
| `U` | extends `Object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchangeRate` | `ExchangeRate`<`Currency`<`U`\>, `U`, `Currency`<`C`\>, `C`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[waitForExchangeRateUpdate](/interfaces/OracleAPI.md#waitforexchangerateupdate)

#### Defined in

[src/parachain/oracle.ts:229](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L229)

___

### <a id="waitforfeeestimateupdate" name="waitforfeeestimateupdate"></a> waitForFeeEstimateUpdate

▸ **waitForFeeEstimateUpdate**(`type?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `type` | `FeeEstimationType` | `DEFAULT_INCLUSION_TIME` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[OracleAPI](/interfaces/OracleAPI.md).[waitForFeeEstimateUpdate](/interfaces/OracleAPI.md#waitforfeeestimateupdate)

#### Defined in

[src/parachain/oracle.ts:222](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/oracle.ts#L222)
