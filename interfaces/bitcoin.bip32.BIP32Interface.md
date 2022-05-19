[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / [bip32](/modules/bitcoin.bip32.md) / BIP32Interface

# Interface: BIP32Interface

[bitcoin](/modules/bitcoin.md).[bip32](/modules/bitcoin.bip32.md).BIP32Interface

## Table of contents

### Properties

- [chainCode](/interfaces/bitcoin.bip32.BIP32Interface.md#chaincode)
- [depth](/interfaces/bitcoin.bip32.BIP32Interface.md#depth)
- [fingerprint](/interfaces/bitcoin.bip32.BIP32Interface.md#fingerprint)
- [identifier](/interfaces/bitcoin.bip32.BIP32Interface.md#identifier)
- [index](/interfaces/bitcoin.bip32.BIP32Interface.md#index)
- [lowR](/interfaces/bitcoin.bip32.BIP32Interface.md#lowr)
- [network](/interfaces/bitcoin.bip32.BIP32Interface.md#network)
- [parentFingerprint](/interfaces/bitcoin.bip32.BIP32Interface.md#parentfingerprint)
- [privateKey](/interfaces/bitcoin.bip32.BIP32Interface.md#privatekey)
- [publicKey](/interfaces/bitcoin.bip32.BIP32Interface.md#publickey)

### Methods

- [derive](/interfaces/bitcoin.bip32.BIP32Interface.md#derive)
- [deriveHardened](/interfaces/bitcoin.bip32.BIP32Interface.md#derivehardened)
- [derivePath](/interfaces/bitcoin.bip32.BIP32Interface.md#derivepath)
- [isNeutered](/interfaces/bitcoin.bip32.BIP32Interface.md#isneutered)
- [neutered](/interfaces/bitcoin.bip32.BIP32Interface.md#neutered)
- [sign](/interfaces/bitcoin.bip32.BIP32Interface.md#sign)
- [toBase58](/interfaces/bitcoin.bip32.BIP32Interface.md#tobase58)
- [toWIF](/interfaces/bitcoin.bip32.BIP32Interface.md#towif)
- [verify](/interfaces/bitcoin.bip32.BIP32Interface.md#verify)

## Properties

### <a id="chaincode" name="chaincode"></a> chainCode

• **chainCode**: `Buffer`

#### Defined in

node_modules/bip32/types/bip32.d.ts:14

___

### <a id="depth" name="depth"></a> depth

• **depth**: `number`

#### Defined in

node_modules/bip32/types/bip32.d.ts:17

___

### <a id="fingerprint" name="fingerprint"></a> fingerprint

• **fingerprint**: `Buffer`

#### Defined in

node_modules/bip32/types/bip32.d.ts:23

___

### <a id="identifier" name="identifier"></a> identifier

• **identifier**: `Buffer`

#### Defined in

node_modules/bip32/types/bip32.d.ts:22

___

### <a id="index" name="index"></a> index

• **index**: `number`

#### Defined in

node_modules/bip32/types/bip32.d.ts:18

___

### <a id="lowr" name="lowr"></a> lowR

• **lowR**: `boolean`

#### Defined in

node_modules/bip32/types/bip32.d.ts:16

___

### <a id="network" name="network"></a> network

• **network**: `Network`

#### Defined in

node_modules/bip32/types/bip32.d.ts:15

___

### <a id="parentfingerprint" name="parentfingerprint"></a> parentFingerprint

• **parentFingerprint**: `number`

#### Defined in

node_modules/bip32/types/bip32.d.ts:19

___

### <a id="privatekey" name="privatekey"></a> privateKey

• `Optional` **privateKey**: `Buffer`

#### Defined in

node_modules/bip32/types/bip32.d.ts:21

___

### <a id="publickey" name="publickey"></a> publicKey

• **publicKey**: `Buffer`

#### Defined in

node_modules/bip32/types/bip32.d.ts:20

## Methods

### <a id="derive" name="derive"></a> derive

▸ **derive**(`index`): [`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Defined in

node_modules/bip32/types/bip32.d.ts:28

___

### <a id="derivehardened" name="derivehardened"></a> deriveHardened

▸ **deriveHardened**(`index`): [`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Defined in

node_modules/bip32/types/bip32.d.ts:29

___

### <a id="derivepath" name="derivepath"></a> derivePath

▸ **derivePath**(`path`): [`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Defined in

node_modules/bip32/types/bip32.d.ts:30

___

### <a id="isneutered" name="isneutered"></a> isNeutered

▸ **isNeutered**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bip32/types/bip32.d.ts:24

___

### <a id="neutered" name="neutered"></a> neutered

▸ **neutered**(): [`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Returns

[`BIP32Interface`](/interfaces/bitcoin.bip32.BIP32Interface.md)

#### Defined in

node_modules/bip32/types/bip32.d.ts:25

___

### <a id="sign" name="sign"></a> sign

▸ **sign**(`hash`, `lowR?`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |
| `lowR?` | `boolean` |

#### Returns

`Buffer`

#### Defined in

node_modules/bip32/types/bip32.d.ts:31

___

### <a id="tobase58" name="tobase58"></a> toBase58

▸ **toBase58**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bip32/types/bip32.d.ts:26

___

### <a id="towif" name="towif"></a> toWIF

▸ **toWIF**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bip32/types/bip32.d.ts:27

___

### <a id="verify" name="verify"></a> verify

▸ **verify**(`hash`, `signature`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `Buffer` |
| `signature` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bip32/types/bip32.d.ts:32
