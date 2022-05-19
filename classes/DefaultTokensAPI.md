[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultTokensAPI

# Class: DefaultTokensAPI

## Implements

- [`TokensAPI`](/interfaces/TokensAPI.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultTokensAPI.md#constructor)

### Methods

- [balance](/classes/DefaultTokensAPI.md#balance)
- [getAccountData](/classes/DefaultTokensAPI.md#getaccountdata)
- [setBalance](/classes/DefaultTokensAPI.md#setbalance)
- [subscribeToBalance](/classes/DefaultTokensAPI.md#subscribetobalance)
- [total](/classes/DefaultTokensAPI.md#total)
- [transfer](/classes/DefaultTokensAPI.md#transfer)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultTokensAPI**(`api`, `transactionAPI`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `transactionAPI` | [`TransactionAPI`](/interfaces/TransactionAPI.md) |

#### Defined in

[src/parachain/tokens.ts:56](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L56)

## Methods

### <a id="balance" name="balance"></a> balance

▸ **balance**<`U`\>(`currency`, `id`): `Promise`<[`ChainBalance`](/classes/ChainBalance.md)<`U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<[`ChainBalance`](/classes/ChainBalance.md)<`U`\>\>

The user's balance

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[balance](/interfaces/TokensAPI.md#balance)

#### Defined in

[src/parachain/tokens.ts:69](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L69)

___

### <a id="getaccountdata" name="getaccountdata"></a> getAccountData

▸ **getAccountData**<`U`\>(`currency`, `id`): `Promise`<`OrmlTokensAccountData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `id` | `AccountId` |

#### Returns

`Promise`<`OrmlTokensAccountData`\>

#### Defined in

[src/parachain/tokens.ts:64](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L64)

___

### <a id="setbalance" name="setbalance"></a> setBalance

▸ **setBalance**<`U`\>(`accountId`, `freeBalance`, `lockedBalance?`): `Promise`<`void`\>

**`remarks`** This extrinsic is only valid if submitted by a sudo account

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `accountId` | `AccountId` |
| `freeBalance` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |
| `lockedBalance?` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[setBalance](/interfaces/TokensAPI.md#setbalance)

#### Defined in

[src/parachain/tokens.ts:110](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L110)

___

### <a id="subscribetobalance" name="subscribetobalance"></a> subscribeToBalance

▸ **subscribeToBalance**<`U`\>(`currency`, `account`, `callback`): `Promise`<() => `void`\>

Subscribe to balance updates

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |
| `account` | `string` |
| `callback` | (`account`: `string`, `accountData`: [`ChainBalance`](/classes/ChainBalance.md)<`U`\>) => `void` |

#### Returns

`Promise`<() => `void`\>

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[subscribeToBalance](/interfaces/TokensAPI.md#subscribetobalance)

#### Defined in

[src/parachain/tokens.ts:74](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L74)

___

### <a id="total" name="total"></a> total

▸ **total**<`U`\>(`currency`): `Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `currency` | `Currency`<`U`\> |

#### Returns

`Promise`<`MonetaryAmount`<`Currency`<`U`\>, `U`\>\>

The total amount in the system

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[total](/interfaces/TokensAPI.md#total)

#### Defined in

[src/parachain/tokens.ts:58](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L58)

___

### <a id="transfer" name="transfer"></a> transfer

▸ **transfer**<`U`\>(`destination`, `amount`): `Promise`<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | extends { `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  } \| { `BTC`: ``8`` ; `Satoshi`: ``0``  } \| { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `string` |
| `amount` | `MonetaryAmount`<`Currency`<`U`\>, `U`\> |

#### Returns

`Promise`<`void`\>

#### Implementation of

[TokensAPI](/interfaces/TokensAPI.md).[transfer](/interfaces/TokensAPI.md#transfer)

#### Defined in

[src/parachain/tokens.ts:99](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/tokens.ts#L99)
