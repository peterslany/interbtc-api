[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DecodedRequest

# Interface: DecodedRequest

## Hierarchy

- `Struct`

  ↳ **`DecodedRequest`**

## Table of contents

### Properties

- [#private](/interfaces/DecodedRequest.md##private)
- [[toStringTag]](/interfaces/DecodedRequest.md#[tostringtag])
- [btc\_address](/interfaces/DecodedRequest.md#btc_address)
- [createdAtHash](/interfaces/DecodedRequest.md#createdathash)
- [initialU8aLength](/interfaces/DecodedRequest.md#initialu8alength)
- [size](/interfaces/DecodedRequest.md#size)

### Accessors

- [Type](/interfaces/DecodedRequest.md#type)
- [defKeys](/interfaces/DecodedRequest.md#defkeys)
- [encodedLength](/interfaces/DecodedRequest.md#encodedlength)
- [hash](/interfaces/DecodedRequest.md#hash)
- [isEmpty](/interfaces/DecodedRequest.md#isempty)
- [registry](/interfaces/DecodedRequest.md#registry)

### Methods

- [[iterator]](/interfaces/DecodedRequest.md#[iterator])
- [clear](/interfaces/DecodedRequest.md#clear)
- [delete](/interfaces/DecodedRequest.md#delete)
- [entries](/interfaces/DecodedRequest.md#entries)
- [eq](/interfaces/DecodedRequest.md#eq)
- [forEach](/interfaces/DecodedRequest.md#foreach)
- [get](/interfaces/DecodedRequest.md#get)
- [getAtIndex](/interfaces/DecodedRequest.md#getatindex)
- [getT](/interfaces/DecodedRequest.md#gett)
- [has](/interfaces/DecodedRequest.md#has)
- [keys](/interfaces/DecodedRequest.md#keys)
- [set](/interfaces/DecodedRequest.md#set)
- [toArray](/interfaces/DecodedRequest.md#toarray)
- [toHex](/interfaces/DecodedRequest.md#tohex)
- [toHuman](/interfaces/DecodedRequest.md#tohuman)
- [toJSON](/interfaces/DecodedRequest.md#tojson)
- [toRawType](/interfaces/DecodedRequest.md#torawtype)
- [toString](/interfaces/DecodedRequest.md#tostring)
- [toU8a](/interfaces/DecodedRequest.md#tou8a)
- [values](/interfaces/DecodedRequest.md#values)

## Properties

### <a id="#private" name="#private"></a> #private

• `Private` **#private**: `any`

#### Inherited from

Struct.#private

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:23

___

### <a id="[tostringtag]" name="[tostringtag]"></a> [toStringTag]

• `Readonly` **[toStringTag]**: `string`

#### Inherited from

Struct.\_\_@toStringTag@192

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:135

___

### <a id="btc_address" name="btc_address"></a> btc\_address

• `Readonly` **btc\_address**: `BitcoinAddress`

#### Defined in

[src/utils/encoding.ts:132](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/utils/encoding.ts#L132)

___

### <a id="createdathash" name="createdathash"></a> createdAtHash

• `Optional` **createdAtHash**: `IU8a`

#### Inherited from

Struct.createdAtHash

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:24

___

### <a id="initialu8alength" name="initialu8alength"></a> initialU8aLength

• `Optional` `Readonly` **initialU8aLength**: `number`

#### Inherited from

Struct.initialU8aLength

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:25

___

### <a id="size" name="size"></a> size

• `Readonly` **size**: `number`

#### Inherited from

Struct.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

## Accessors

### <a id="type" name="type"></a> Type

• `get` **Type**(): `E`

**`description`** Returns the Type description of the structure

#### Returns

`E`

#### Inherited from

Struct.Type

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:40

___

### <a id="defkeys" name="defkeys"></a> defKeys

• `get` **defKeys**(): `string`[]

**`description`** The available keys for this struct

#### Returns

`string`[]

#### Inherited from

Struct.defKeys

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:31

___

### <a id="encodedlength" name="encodedlength"></a> encodedLength

• `get` **encodedLength**(): `number`

**`description`** The length of the value when encoded as a Uint8Array

#### Returns

`number`

#### Inherited from

Struct.encodedLength

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:44

___

### <a id="hash" name="hash"></a> hash

• `get` **hash**(): `IU8a`

**`description`** returns a hash of the contents

#### Returns

`IU8a`

#### Inherited from

Struct.hash

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:48

___

### <a id="isempty" name="isempty"></a> isEmpty

• `get` **isEmpty**(): `boolean`

**`description`** Checks if the value is an empty value

#### Returns

`boolean`

#### Inherited from

Struct.isEmpty

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:36

___

### <a id="registry" name="registry"></a> registry

• `get` **registry**(): `Registry`

#### Returns

`Registry`

#### Inherited from

Struct.registry

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:49

## Methods

### <a id="[iterator]" name="[iterator]"></a> [iterator]

▸ **[iterator]**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Struct.\_\_@iterator@190

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:121

___

### <a id="clear" name="clear"></a> clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

Struct.clear

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

Struct.delete

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:23

___

### <a id="entries" name="entries"></a> entries

▸ **entries**(): `IterableIterator`<[`string`, `Codec`]\>

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`<[`string`, `Codec`]\>

#### Inherited from

Struct.entries

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

Struct.eq

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

Struct.forEach

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

Struct.get

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

Struct.getAtIndex

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

Struct.getT

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

Struct.has

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:26

___

### <a id="keys" name="keys"></a> keys

▸ **keys**(): `IterableIterator`<`string`\>

Returns an iterable of keys in the map

#### Returns

`IterableIterator`<`string`\>

#### Inherited from

Struct.keys

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

Struct.set

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:27

___

### <a id="toarray" name="toarray"></a> toArray

▸ **toArray**(): `Codec`[]

**`description`** Converts the Object to an standard JavaScript Array

#### Returns

`Codec`[]

#### Inherited from

Struct.toArray

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:66

___

### <a id="tohex" name="tohex"></a> toHex

▸ **toHex**(): \`0x${string}\`

**`description`** Returns a hex string representation of the value

#### Returns

\`0x${string}\`

#### Inherited from

Struct.toHex

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

Struct.toHuman

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:74

___

### <a id="tojson" name="tojson"></a> toJSON

▸ **toJSON**(): `Record`<`string`, `AnyJson`\>

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`Record`<`string`, `AnyJson`\>

#### Inherited from

Struct.toJSON

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:78

___

### <a id="torawtype" name="torawtype"></a> toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Struct.toRawType

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:82

___

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Struct.toString

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

Struct.toU8a

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:91

___

### <a id="values" name="values"></a> values

▸ **values**(): `IterableIterator`<`Codec`\>

Returns an iterable of values in the map

#### Returns

`IterableIterator`<`Codec`\>

#### Inherited from

Struct.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:136
