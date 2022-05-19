[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / SecurityStatusCode

# Interface: SecurityStatusCode

**`name`** SecurityStatusCode (61)

## Hierarchy

- `Enum`

  ↳ **`SecurityStatusCode`**

## Table of contents

### Properties

- [#private](/interfaces/SecurityStatusCode.md##private)
- [createdAtHash](/interfaces/SecurityStatusCode.md#createdathash)
- [initialU8aLength](/interfaces/SecurityStatusCode.md#initialu8alength)
- [isError](/interfaces/SecurityStatusCode.md#iserror)
- [isRunning](/interfaces/SecurityStatusCode.md#isrunning)
- [isShutdown](/interfaces/SecurityStatusCode.md#isshutdown)
- [registry](/interfaces/SecurityStatusCode.md#registry)
- [type](/interfaces/SecurityStatusCode.md#type)

### Accessors

- [defIndexes](/interfaces/SecurityStatusCode.md#defindexes)
- [defKeys](/interfaces/SecurityStatusCode.md#defkeys)
- [encodedLength](/interfaces/SecurityStatusCode.md#encodedlength)
- [hash](/interfaces/SecurityStatusCode.md#hash)
- [index](/interfaces/SecurityStatusCode.md#index)
- [inner](/interfaces/SecurityStatusCode.md#inner)
- [isBasic](/interfaces/SecurityStatusCode.md#isbasic)
- [isEmpty](/interfaces/SecurityStatusCode.md#isempty)
- [isNone](/interfaces/SecurityStatusCode.md#isnone)
- [isNull](/interfaces/SecurityStatusCode.md#isnull)
- [value](/interfaces/SecurityStatusCode.md#value)

### Methods

- [\_toRawStruct](/interfaces/SecurityStatusCode.md#_torawstruct)
- [eq](/interfaces/SecurityStatusCode.md#eq)
- [toHex](/interfaces/SecurityStatusCode.md#tohex)
- [toHuman](/interfaces/SecurityStatusCode.md#tohuman)
- [toJSON](/interfaces/SecurityStatusCode.md#tojson)
- [toNumber](/interfaces/SecurityStatusCode.md#tonumber)
- [toRawType](/interfaces/SecurityStatusCode.md#torawtype)
- [toString](/interfaces/SecurityStatusCode.md#tostring)
- [toU8a](/interfaces/SecurityStatusCode.md#tou8a)

## Properties

### <a id="#private" name="#private"></a> #private

• `Private` **#private**: `any`

#### Inherited from

Enum.#private

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:13

___

### <a id="createdathash" name="createdathash"></a> createdAtHash

• `Optional` **createdAtHash**: `IU8a`

#### Inherited from

Enum.createdAtHash

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:15

___

### <a id="initialu8alength" name="initialu8alength"></a> initialU8aLength

• `Optional` `Readonly` **initialU8aLength**: `number`

#### Inherited from

Enum.initialU8aLength

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:16

___

### <a id="iserror" name="iserror"></a> isError

• `Readonly` **isError**: `boolean`

#### Defined in

src/interfaces/types-lookup.ts:621

___

### <a id="isrunning" name="isrunning"></a> isRunning

• `Readonly` **isRunning**: `boolean`

#### Defined in

src/interfaces/types-lookup.ts:620

___

### <a id="isshutdown" name="isshutdown"></a> isShutdown

• `Readonly` **isShutdown**: `boolean`

#### Defined in

src/interfaces/types-lookup.ts:622

___

### <a id="registry" name="registry"></a> registry

• `Readonly` **registry**: `Registry`

#### Inherited from

Enum.registry

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:14

___

### <a id="type" name="type"></a> type

• `Readonly` **type**: ``"Running"`` \| ``"Error"`` \| ``"Shutdown"``

#### Overrides

Enum.type

#### Defined in

src/interfaces/types-lookup.ts:623

## Accessors

### <a id="defindexes" name="defindexes"></a> defIndexes

• `get` **defIndexes**(): `number`[]

**`description`** The available keys for this enum

#### Returns

`number`[]

#### Inherited from

Enum.defIndexes

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:55

___

### <a id="defkeys" name="defkeys"></a> defKeys

• `get` **defKeys**(): `string`[]

**`description`** The available keys for this enum

#### Returns

`string`[]

#### Inherited from

Enum.defKeys

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:59

___

### <a id="encodedlength" name="encodedlength"></a> encodedLength

• `get` **encodedLength**(): `number`

**`description`** The length of the value when encoded as a Uint8Array

#### Returns

`number`

#### Inherited from

Enum.encodedLength

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:22

___

### <a id="hash" name="hash"></a> hash

• `get` **hash**(): `IU8a`

**`description`** returns a hash of the contents

#### Returns

`IU8a`

#### Inherited from

Enum.hash

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:26

___

### <a id="index" name="index"></a> index

• `get` **index**(): `number`

**`description`** The index of the enum value

#### Returns

`number`

#### Inherited from

Enum.index

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:30

___

### <a id="inner" name="inner"></a> inner

• `get` **inner**(): `Codec`

**`description`** The value of the enum

#### Returns

`Codec`

#### Inherited from

Enum.inner

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:34

___

### <a id="isbasic" name="isbasic"></a> isBasic

• `get` **isBasic**(): `boolean`

**`description`** true if this is a basic enum (no values)

#### Returns

`boolean`

#### Inherited from

Enum.isBasic

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:38

___

### <a id="isempty" name="isempty"></a> isEmpty

• `get` **isEmpty**(): `boolean`

**`description`** Checks if the value is an empty value

#### Returns

`boolean`

#### Inherited from

Enum.isEmpty

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:42

___

### <a id="isnone" name="isnone"></a> isNone

• `get` **isNone**(): `boolean`

**`description`** Checks if the Enum points to a [[Null]] type

#### Returns

`boolean`

#### Inherited from

Enum.isNone

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:46

___

### <a id="isnull" name="isnull"></a> isNull

• `get` **isNull**(): `boolean`

**`description`** Checks if the Enum points to a [[Null]] type

**`deprecated`** use isNone

#### Returns

`boolean`

#### Inherited from

Enum.isNull

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:51

___

### <a id="value" name="value"></a> value

• `get` **value**(): `Codec`

**`description`** The value of the enum

#### Returns

`Codec`

#### Inherited from

Enum.value

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:67

## Methods

### <a id="_torawstruct" name="_torawstruct"></a> \_toRawStruct

▸ `Protected` **_toRawStruct**(): `string`[] \| `Record`<`string`, `string` \| `number`\>

**`description`** Returns a raw struct representation of the enum types

#### Returns

`string`[] \| `Record`<`string`, `string` \| `number`\>

#### Inherited from

Enum.\_toRawStruct

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:91

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

Enum.eq

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:71

___

### <a id="tohex" name="tohex"></a> toHex

▸ **toHex**(): \`0x${string}\`

**`description`** Returns a hex string representation of the value

#### Returns

\`0x${string}\`

#### Inherited from

Enum.toHex

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:75

___

### <a id="tohuman" name="tohuman"></a> toHuman

▸ **toHuman**(`isExtended?`): `AnyJson`

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExtended?` | `boolean` |

#### Returns

`AnyJson`

#### Inherited from

Enum.toHuman

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:79

___

### <a id="tojson" name="tojson"></a> toJSON

▸ **toJSON**(): `AnyJson`

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Returns

`AnyJson`

#### Inherited from

Enum.toJSON

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:83

___

### <a id="tonumber" name="tonumber"></a> toNumber

▸ **toNumber**(): `number`

**`description`** Returns the number representation for the value

#### Returns

`number`

#### Inherited from

Enum.toNumber

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:87

___

### <a id="torawtype" name="torawtype"></a> toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

Enum.toRawType

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:95

___

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(): `string`

**`description`** Returns the string representation of the value

#### Returns

`string`

#### Inherited from

Enum.toString

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:99

___

### <a id="tou8a" name="tou8a"></a> toU8a

▸ **toU8a**(`isBare?`): `Uint8Array`

**`description`** Encodes the value as a Uint8Array as per the SCALE specifications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `isBare?` | `boolean` | true when the value has none of the type-specific prefixes (internal) |

#### Returns

`Uint8Array`

#### Inherited from

Enum.toU8a

#### Defined in

node_modules/@polkadot/types-codec/base/Enum.d.ts:104
