[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / TransactionAPI

# Interface: TransactionAPI

## Table of contents

### Methods

- [getAccount](/interfaces/TransactionAPI.md#getaccount)
- [sendLogged](/interfaces/TransactionAPI.md#sendlogged)
- [setAccount](/interfaces/TransactionAPI.md#setaccount)

## Methods

### <a id="getaccount" name="getaccount"></a> getAccount

▸ **getAccount**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Defined in

[src/parachain/transaction.ts:12](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L12)

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

[src/parachain/transaction.ts:13](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L13)

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

[src/parachain/transaction.ts:11](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/parachain/transaction.ts#L11)
