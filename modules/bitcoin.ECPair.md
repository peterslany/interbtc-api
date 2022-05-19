[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / ECPair

# Namespace: ECPair

[bitcoin](/modules/bitcoin.md).ECPair

## Table of contents

### Interfaces

- [ECPairInterface](/interfaces/bitcoin.ECPair.ECPairInterface.md)
- [Signer](/interfaces/bitcoin.ECPair.Signer.md)
- [SignerAsync](/interfaces/bitcoin.ECPair.SignerAsync.md)

### Functions

- [fromPrivateKey](/modules/bitcoin.ECPair.md#fromprivatekey)
- [fromPublicKey](/modules/bitcoin.ECPair.md#frompublickey)
- [fromWIF](/modules/bitcoin.ECPair.md#fromwif)
- [makeRandom](/modules/bitcoin.ECPair.md#makerandom)

## Functions

### <a id="fromprivatekey" name="fromprivatekey"></a> fromPrivateKey

▸ **fromPrivateKey**(`buffer`, `options?`): `ECPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `options?` | `ECPairOptions` |

#### Returns

`ECPair`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:40

___

### <a id="frompublickey" name="frompublickey"></a> fromPublicKey

▸ **fromPublicKey**(`buffer`, `options?`): `ECPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `options?` | `ECPairOptions` |

#### Returns

`ECPair`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:41

___

### <a id="fromwif" name="fromwif"></a> fromWIF

▸ **fromWIF**(`wifString`, `network?`): `ECPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `wifString` | `string` |
| `network?` | [`Network`](/interfaces/bitcoin.networks.Network.md) \| [`Network`](/interfaces/bitcoin.networks.Network.md)[] |

#### Returns

`ECPair`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:42

___

### <a id="makerandom" name="makerandom"></a> makeRandom

▸ **makeRandom**(`options?`): `ECPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `ECPairOptions` |

#### Returns

`ECPair`

#### Defined in

node_modules/bitcoinjs-lib/types/ecpair.d.ts:43
