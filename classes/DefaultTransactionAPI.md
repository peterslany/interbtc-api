[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultTransactionAPI

# Class: DefaultTransactionAPI

## Table of contents

### Constructors

- [constructor](/classes/DefaultTransactionAPI.md#constructor)

### Properties

- [api](/classes/DefaultTransactionAPI.md#api)

### Methods

- [getAccount](/classes/DefaultTransactionAPI.md#getaccount)
- [sendLogged](/classes/DefaultTransactionAPI.md#sendlogged)
- [setAccount](/classes/DefaultTransactionAPI.md#setaccount)
- [doesArrayContainEvent](/classes/DefaultTransactionAPI.md#doesarraycontainevent)
- [isDispatchError](/classes/DefaultTransactionAPI.md#isdispatcherror)
- [printEvents](/classes/DefaultTransactionAPI.md#printevents)
- [sendLogged](/classes/DefaultTransactionAPI.md#sendlogged-1)
- [waitForEvent](/classes/DefaultTransactionAPI.md#waitforevent)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultTransactionAPI**(`api`, `account?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account?` | `AddressOrPair` |

#### Defined in

[src/parachain/transaction.ts:21](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L21)

## Properties

### <a id="api" name="api"></a> api

• **api**: `ApiPromise`

## Methods

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Defined in

[src/parachain/transaction.ts:27](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L27)

___

### <a id="sendlogged" name="sendlogged"></a> sendLogged

▸ **sendLogged**<`T`\>(`transaction`, `successEventType?`, `onlyInBlock?`): `Promise`<`ISubmittableResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\> |
| `successEventType?` | `AugmentedEvent`<`ApiTypes`, `T`\> |
| `onlyInBlock?` | `boolean` |

#### Returns

`Promise`<`ISubmittableResult`\>

#### Defined in

[src/parachain/transaction.ts:31](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L31)

___

### <a id="setaccount" name="setaccount"></a> setAccount

▸ **setAccount**(`account`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |

#### Returns

`void`

#### Defined in

[src/parachain/transaction.ts:23](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L23)

___

### <a id="doesarraycontainevent" name="doesarraycontainevent"></a> doesArrayContainEvent

▸ `Static` **doesArrayContainEvent**<`T`\>(`events`, `eventType`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `events` | `EventRecord`[] |
| `eventType` | `AugmentedEvent`<`ApiTypes`, `T`\> |

#### Returns

`boolean`

#### Defined in

[src/parachain/transaction.ts:169](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L169)

___

### <a id="isdispatcherror" name="isdispatcherror"></a> isDispatchError

▸ `Static` **isDispatchError**(`eventData`): eventData is DispatchError

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventData` | `unknown` |

#### Returns

eventData is DispatchError

#### Defined in

[src/parachain/transaction.ts:165](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L165)

___

### <a id="printevents" name="printevents"></a> printEvents

▸ `Static` **printEvents**(`api`, `events`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `events` | `EventRecord`[] |

#### Returns

`void`

#### Defined in

[src/parachain/transaction.ts:106](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L106)

___

### <a id="sendlogged-1" name="sendlogged-1"></a> sendLogged

▸ `Static` **sendLogged**<`T`\>(`api`, `account`, `transaction`, `successEventType?`, `onlyInBlock?`): `Promise`<`ISubmittableResult`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `account` | `AddressOrPair` |
| `transaction` | `SubmittableExtrinsic`<``"promise"``, `ISubmittableResult`\> |
| `successEventType?` | `AugmentedEvent`<`ApiTypes`, `T`\> |
| `onlyInBlock?` | `boolean` |

#### Returns

`Promise`<`ISubmittableResult`\>

#### Defined in

[src/parachain/transaction.ts:42](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L42)

___

### <a id="waitforevent" name="waitforevent"></a> waitForEvent

▸ `Static` **waitForEvent**<`T`\>(`api`, `event`, `timeoutMs`): `Promise`<`boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Codec`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `event` | `AugmentedEvent`<`ApiTypes`, `T`\> |
| `timeoutMs` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/parachain/transaction.ts:136](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L136)
