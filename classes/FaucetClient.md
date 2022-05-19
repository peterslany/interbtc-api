[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / FaucetClient

# Class: FaucetClient

## Hierarchy

- `JsonRpcClient`<`void`\>

  ↳ **`FaucetClient`**

## Table of contents

### Constructors

- [constructor](/classes/FaucetClient.md#constructor)

### Properties

- [constr](/classes/FaucetClient.md#constr)
- [registry](/classes/FaucetClient.md#registry)
- [url](/classes/FaucetClient.md#url)

### Methods

- [fundAccount](/classes/FaucetClient.md#fundaccount)
- [post](/classes/FaucetClient.md#post)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new FaucetClient**(`api`, `url`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `api` | `ApiPromise` |
| `url` | `string` |

#### Overrides

JsonRpcClient&lt;void\&gt;.constructor

#### Defined in

[src/clients/faucet.ts:21](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/clients/faucet.ts#L21)

## Properties

### <a id="constr" name="constr"></a> constr

• **constr**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `FundAccountJsonRpcRequest` | `CodecClass`<[`FundAccountJsonRpcRequest`](/interfaces/FundAccountJsonRpcRequest.md)\> |

#### Defined in

[src/clients/faucet.ts:17](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/clients/faucet.ts#L17)

___

### <a id="registry" name="registry"></a> registry

• **registry**: `TypeRegistry`

#### Defined in

[src/clients/faucet.ts:15](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/clients/faucet.ts#L15)

___

### <a id="url" name="url"></a> url

• **url**: `string`

#### Inherited from

JsonRpcClient.url

#### Defined in

[src/clients/client.ts:27](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/clients/client.ts#L27)

## Methods

### <a id="fundaccount" name="fundaccount"></a> fundAccount

▸ **fundAccount**(`account`, `currencyIdLiteral`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AccountId` |
| `currencyIdLiteral` | [`CollateralIdLiteral`](/modules.md#collateralidliteral) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/clients/faucet.ts:31](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/clients/faucet.ts#L31)

___

### <a id="post" name="post"></a> post

▸ **post**(`method`, `params?`): `Promise`<`JsonRpcResponse`<`void`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |
| `params?` | `RequestParams` |

#### Returns

`Promise`<`JsonRpcResponse`<`void`\>\>

#### Inherited from

JsonRpcClient.post

#### Defined in

[src/clients/client.ts:33](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/clients/client.ts#L33)
