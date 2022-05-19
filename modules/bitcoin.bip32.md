[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / bip32

# Namespace: bip32

[bitcoin](/modules/bitcoin.md).bip32

## Table of contents

### Interfaces

- [BIP32Interface](/interfaces/bitcoin.bip32.BIP32Interface.md)

### Functions

- [fromBase58](/modules/bitcoin.bip32.md#frombase58)
- [fromPrivateKey](/modules/bitcoin.bip32.md#fromprivatekey)
- [fromPublicKey](/modules/bitcoin.bip32.md#frompublickey)
- [fromSeed](/modules/bitcoin.bip32.md#fromseed)

## Functions

### <a id="frombase58" name="frombase58"></a> fromBase58

▸ **fromBase58**(`inString`, `network?`): [`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inString` | `string` |
| `network?` | `Network` |

#### Returns

[`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Defined in

node_modules/bip32/types/bip32.d.ts:34

___

### <a id="fromprivatekey" name="fromprivatekey"></a> fromPrivateKey

▸ **fromPrivateKey**(`privateKey`, `chainCode`, `network?`): [`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `Buffer` |
| `chainCode` | `Buffer` |
| `network?` | `Network` |

#### Returns

[`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Defined in

node_modules/bip32/types/bip32.d.ts:35

___

### <a id="frompublickey" name="frompublickey"></a> fromPublicKey

▸ **fromPublicKey**(`publicKey`, `chainCode`, `network?`): [`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `Buffer` |
| `chainCode` | `Buffer` |
| `network?` | `Network` |

#### Returns

[`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Defined in

node_modules/bip32/types/bip32.d.ts:36

___

### <a id="fromseed" name="fromseed"></a> fromSeed

▸ **fromSeed**(`seed`, `network?`): [`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `Buffer` |
| `network?` | `Network` |

#### Returns

[`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Defined in

node_modules/bip32/types/bip32.d.ts:37
