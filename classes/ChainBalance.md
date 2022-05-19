[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / ChainBalance

# Class: ChainBalance<U\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends [`CurrencyUnit`](/modules.md#currencyunit-1) |

## Table of contents

### Constructors

- [constructor](/classes/ChainBalance.md#constructor)

### Properties

- [currency](/classes/ChainBalance.md#currency)
- [free](/classes/ChainBalance.md#free)
- [reserved](/classes/ChainBalance.md#reserved)
- [transferable](/classes/ChainBalance.md#transferable)

### Methods

- [toString](/classes/ChainBalance.md#tostring)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new ChainBalance**<`U`\>(`currency`, `free?`, `transferable?`, `reserved?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `free?` | `BigSource` |
| `transferable?` | `BigSource` |
| `reserved?` | `BigSource` |

#### Defined in

[src/types/currency.ts:170](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/currency.ts#L170)

## Properties

### <a id="currency" name="currency"></a> currency

• **currency**: `Currency`<`U`\>

#### Defined in

[src/types/currency.ts:168](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/currency.ts#L168)

___

### <a id="free" name="free"></a> free

• **free**: `MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Defined in

[src/types/currency.ts:165](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/currency.ts#L165)

___

### <a id="reserved" name="reserved"></a> reserved

• **reserved**: `MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Defined in

[src/types/currency.ts:167](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/currency.ts#L167)

___

### <a id="transferable" name="transferable"></a> transferable

• **transferable**: `MonetaryAmount`<`Currency`<`U`\>, `U`\>

#### Defined in

[src/types/currency.ts:166](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/currency.ts#L166)

## Methods

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(`base?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `base?` | `U`[keyof `U`] |

#### Returns

`string`

#### Defined in

[src/types/currency.ts:181](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/currency.ts#L181)
