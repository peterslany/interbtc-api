[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DecodedRequestExt

# Interface: DecodedRequestExt

## Hierarchy

- `Omit`<[`DecodedRequest`](/interfaces/DecodedRequest.md), ``"btc_address"``\>

  ↳ **`DecodedRequestExt`**

## Table of contents

### Properties

- [Type](/interfaces/DecodedRequestExt.md#type)
- [[toStringTag]](/interfaces/DecodedRequestExt.md#[tostringtag])
- [btc\_address](/interfaces/DecodedRequestExt.md#btc_address)
- [createdAtHash](/interfaces/DecodedRequestExt.md#createdathash)
- [defKeys](/interfaces/DecodedRequestExt.md#defkeys)
- [encodedLength](/interfaces/DecodedRequestExt.md#encodedlength)
- [hash](/interfaces/DecodedRequestExt.md#hash)
- [initialU8aLength](/interfaces/DecodedRequestExt.md#initialu8alength)
- [isEmpty](/interfaces/DecodedRequestExt.md#isempty)
- [registry](/interfaces/DecodedRequestExt.md#registry)
- [size](/interfaces/DecodedRequestExt.md#size)

### Methods

- [[iterator]](/interfaces/DecodedRequestExt.md#[iterator])
- [clear](/interfaces/DecodedRequestExt.md#clear)
- [delete](/interfaces/DecodedRequestExt.md#delete)
- [entries](/interfaces/DecodedRequestExt.md#entries)
- [eq](/interfaces/DecodedRequestExt.md#eq)
- [forEach](/interfaces/DecodedRequestExt.md#foreach)
- [get](/interfaces/DecodedRequestExt.md#get)
- [getAtIndex](/interfaces/DecodedRequestExt.md#getatindex)
- [getT](/interfaces/DecodedRequestExt.md#gett)
- [has](/interfaces/DecodedRequestExt.md#has)
- [keys](/interfaces/DecodedRequestExt.md#keys)
- [set](/interfaces/DecodedRequestExt.md#set)
- [toArray](/interfaces/DecodedRequestExt.md#toarray)
- [toHex](/interfaces/DecodedRequestExt.md#tohex)
- [toHuman](/interfaces/DecodedRequestExt.md#tohuman)
- [toJSON](/interfaces/DecodedRequestExt.md#tojson)
- [toRawType](/interfaces/DecodedRequestExt.md#torawtype)
- [toString](/interfaces/DecodedRequestExt.md#tostring)
- [toU8a](/interfaces/DecodedRequestExt.md#tou8a)
- [values](/interfaces/DecodedRequestExt.md#values)

## Properties

### <a id="type" name="type"></a> Type

• **Type**: `Object`

#### Inherited from

Omit.Type

___

### <a id="[tostringtag]" name="[tostringtag]"></a> [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Omit.\_\_@toStringTag@192

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### <a id="btc_address" name="btc_address"></a> btc\_address

• **btc\_address**: `string`

#### Defined in

[src/utils/encoding.ts:137](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/encoding.ts#L137)

___

### <a id="createdathash" name="createdathash"></a> createdAtHash

• `Optional` **createdAtHash**: `IU8a`

#### Inherited from

Omit.createdAtHash

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:24

___

### <a id="defkeys" name="defkeys"></a> defKeys

• **defKeys**: `string`[]

#### Inherited from

Omit.defKeys

___

### <a id="encodedlength" name="encodedlength"></a> encodedLength

• **encodedLength**: `number`

#### Inherited from

Omit.encodedLength

___

### <a id="hash" name="hash"></a> hash

• **hash**: `IU8a`

#### Inherited from

Omit.hash

___

### <a id="initialu8alength" name="initialu8alength"></a> initialU8aLength

• `Optional` `Readonly` **initialU8aLength**: `number`

#### Inherited from

Omit.initialU8aLength

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:25

___

### <a id="isempty" name="isempty"></a> isEmpty

• **isEmpty**: `boolean`

#### Inherited from

Omit.isEmpty

___

### <a id="registry" name="registry"></a> registry

• **registry**: `Registry`

#### Inherited from

Omit.registry

___

### <a id="size" name="size"></a> size

• `Readonly` **size**: `number`

#### Inherited from

Omit.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Methods

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Omit.\_\_@iterator@190

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### <a id="clear" name="clear"></a> clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Omit.clear

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:22

___

### <a id="delete" name="delete"></a> delete

▸ **delete**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Omit.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### <a id="entries" name="entries"></a> entries

▸ **entries**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Omit.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:126

___

### <a id="eq" name="eq"></a> eq

▸ **eq**(`other?`): `boolean`

**`description`** Compares the value of the input to see if there is a match

#### Parameters

| Name | Type |
| :------ | :------ |
| `other?` | `unknown` |

#### Returns

`boolean`

#### Inherited from

Omit.eq

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:53

___

### <a id="foreach" name="foreach"></a> forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `Codec`, `key`: `string`, `map`: `Map`<`string`, `Codec`\>) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Inherited from

Omit.forEach

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:24

___

### <a id="get" name="get"></a> get

▸ **get**(`name`): `undefined` \| `Codec`

**`description`** Returns a specific names entry in the structure

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the entry to retrieve |

#### Returns

`undefined` \| `Codec`

#### Inherited from

Omit.get

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:58

___

### <a id="getatindex" name="getatindex"></a> getAtIndex

▸ **getAtIndex**(`index`): `Codec`

**`description`** Returns the values of a member at a specific index (Rather use get(name) for performance)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`Codec`

#### Inherited from

Omit.getAtIndex

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:62

___

### <a id="gett" name="gett"></a> getT

▸ **getT**<`T`\>(`key`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`T`

#### Inherited from

Omit.getT

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:32

___

### <a id="has" name="has"></a> has

▸ **has**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

Omit.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### <a id="keys" name="keys"></a> keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Omit.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:131

___

### <a id="set" name="set"></a> set

▸ **set**(`key`, `value`): [`DecodedRequest`](/interfaces/DecodedRequest.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Codec` |

#### Returns

[`DecodedRequest`](/interfaces/DecodedRequest.md)

#### Inherited from

Omit.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### <a id="toarray" name="toarray"></a> toArray

▸ **toArray**(): `Codec`[]

**`description`** Converts the Object to an standard JavaScript Array

#### Returns

`Codec`[]

#### Inherited from

Omit.toArray

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:66

___

### <a id="tohex" name="tohex"></a> toHex

▸ **toHex**(): \`0x${string}\`

**`description`** Returns a hex string representation of the value

#### Returns

\`0x${string}\`

#### Inherited from

Omit.toHex

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:70

___

### <a id="tohuman" name="tohuman"></a> toHuman

▸ **toHuman**(`isExtended?`): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExtended?` | `boolean` |

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Omit.toHuman

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:74

___

### <a id="tojson" name="tojson"></a> toJSON

▸ **toJSON**(): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Omit.toJSON

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:78

___

### <a id="torawtype" name="torawtype"></a> toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Omit.toRawType

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:82

___

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Omit.toString

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:86

___

### <a id="tou8a" name="tou8a"></a> toU8a

▸ **toU8a**(`isBare?`): `Uint8Array`

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBare?` | `BareOpts` | true when the value has none of the type-specific prefixes (internal) |

#### Returns

`Uint8Array`

#### Inherited from

Omit.toU8a

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:91

___

### <a id="values" name="values"></a> values

▸ **values**(): `IterableIterator`<`Codec`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`Codec`\>

#### Inherited from

Omit.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
