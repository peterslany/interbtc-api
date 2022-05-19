[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / TokensAPI

# Interface: TokensAPI

## Implemented by

- [`DefaultTokensAPI`](/classes/DefaultTokensAPI.md)

## Table of contents

### Methods

- [balance](/interfaces/TokensAPI.md#balance)
- [setBalance](/interfaces/TokensAPI.md#setbalance)
- [subscribeToBalance](/interfaces/TokensAPI.md#subscribetobalance)
- [total](/interfaces/TokensAPI.md#total)
- [transfer](/interfaces/TokensAPI.md#transfer)

## Methods

### <a id="balance" name="balance"></a> balance

▸ **balance**<`U`\>(`currency`, `id`): `Promise`<[`ChainBalance`](/classes/ChainBalance.md)<`U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`U`\> | The currency specification, a `Monetary.js` object |
| `id` | `AccountId` | The AccountId of a user |

#### Returns

`Promise`<[`ChainBalance`](/classes/ChainBalance.md)<`U`\>\>

The user's balance

#### Defined in

[src/parachain/tokens.ts:24](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L24)

___

### <a id="setbalance" name="setbalance"></a> setBalance

▸ **setBalance**<`U`\>(`accountId`, `freeBalance`, `lockedBalance?`): `Promise`<`void`\>

**`remarks`** This extrinsic is only valid if submitted by a sudo account

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `accountId` | `AccountId` | Account whose balance to set |
| `freeBalance` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | Free balance to set, as a Monetary.js object |
| `lockedBalance?` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | Locked balance to set, as a Monetary.js object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/tokens.ts:48](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L48)

___

### <a id="subscribetobalance" name="subscribetobalance"></a> subscribeToBalance

▸ **subscribeToBalance**<`U`\>(`currency`, `account`, `callback`): `Promise`<() => `void`\>

Subscribe to balance updates

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`U`\> | The currency specification, a `Monetary.js` object |
| `account` | `string` | AccountId string |
| `callback` | (`account`: `string`, `balance`: [`ChainBalance`](/classes/ChainBalance.md)<`U`\>) => `void` | Function to be called whenever the balance of an account is updated. Its parameters are (accountIdString, freeBalance) |

#### Returns

`Promise`<() => `void`\>

#### Defined in

[src/parachain/tokens.ts:37](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L37)

___

### <a id="total" name="total"></a> total

▸ **total**<`U`\>(`currency`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `currency` | `Currency`<`U`\> | The currency specification, a `Monetary.js` object |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The total amount in the system

#### Defined in

[src/parachain/tokens.ts:18](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L18)

___

### <a id="transfer" name="transfer"></a> transfer

▸ **transfer**<`U`\>(`destination`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `destination` | `string` | The address of a user |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> | The amount to transfer, as a `Monetary.js` object |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/parachain/tokens.ts:29](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L29)
