[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / script

# Namespace: script

[bitcoin](/modules/bitcoin.md).script

## Table of contents

### Type aliases

- [OpCode](/modules/bitcoin.script.md#opcode)

### Variables

- [OPS](/modules/bitcoin.script.md#ops)
- [number](/modules/bitcoin.script.md#number)
- [signature](/modules/bitcoin.script.md#signature)

### Functions

- [compile](/modules/bitcoin.script.md#compile)
- [decompile](/modules/bitcoin.script.md#decompile)
- [fromASM](/modules/bitcoin.script.md#fromasm)
- [isCanonicalPubKey](/modules/bitcoin.script.md#iscanonicalpubkey)
- [isCanonicalScriptSignature](/modules/bitcoin.script.md#iscanonicalscriptsignature)
- [isDefinedHashType](/modules/bitcoin.script.md#isdefinedhashtype)
- [isPushOnly](/modules/bitcoin.script.md#ispushonly)
- [toASM](/modules/bitcoin.script.md#toasm)
- [toStack](/modules/bitcoin.script.md#tostack)

## Type aliases

### <a id="opcode" name="opcode"></a> OpCode

Ƭ **OpCode**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:4

## Variables

### <a id="ops" name="ops"></a> OPS

• `Const` **OPS**: `Object`

#### Index signature

▪ [index: `string`]: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:5

___

### <a id="number" name="number"></a> number

• `Const` **number**: typeof `scriptNumber`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:17

___

### <a id="signature" name="signature"></a> signature

• `Const` **signature**: typeof `scriptSignature`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:18

## Functions

### <a id="compile" name="compile"></a> compile

▸ **compile**(`chunks`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | `Buffer` \| [`Stack`](/modules/bitcoin.payments.md#stack) |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:9

___

### <a id="decompile" name="decompile"></a> decompile

▸ **decompile**(`buffer`): (`number` \| `Buffer`)[] \| ``null``

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` \| (`number` \| `Buffer`)[] |

#### Returns

(`number` \| `Buffer`)[] \| ``null``

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:10

___

### <a id="fromasm" name="fromasm"></a> fromASM

▸ **fromASM**(`asm`): `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `asm` | `string` |

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:12

___

### <a id="iscanonicalpubkey" name="iscanonicalpubkey"></a> isCanonicalPubKey

▸ **isCanonicalPubKey**(`buffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:14

___

### <a id="iscanonicalscriptsignature" name="iscanonicalscriptsignature"></a> isCanonicalScriptSignature

▸ **isCanonicalScriptSignature**(`buffer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:16

___

### <a id="isdefinedhashtype" name="isdefinedhashtype"></a> isDefinedHashType

▸ **isDefinedHashType**(`hashType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hashType` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:15

___

### <a id="ispushonly" name="ispushonly"></a> isPushOnly

▸ **isPushOnly**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`Stack`](/modules/bitcoin.payments.md#stack) |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:8

___

### <a id="toasm" name="toasm"></a> toASM

▸ **toASM**(`chunks`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | `Buffer` \| (`number` \| `Buffer`)[] |

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:11

___

### <a id="tostack" name="tostack"></a> toStack

▸ **toStack**(`chunks`): `Buffer`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | `Buffer` \| (`number` \| `Buffer`)[] |

#### Returns

`Buffer`[]

#### Defined in

node_modules/bitcoinjs-lib/types/script.d.ts:13
