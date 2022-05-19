[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / VaultRegistryVault

# Interface: VaultRegistryVault

**`name`** VaultRegistryVault (369)

## Hierarchy

- `Struct`

  ↳ **`VaultRegistryVault`**

## Table of contents

### Properties

- [#private](/interfaces/VaultRegistryVault.md##private)
- [[toStringTag]](/interfaces/VaultRegistryVault.md#[tostringtag])
- [activeReplaceCollateral](/interfaces/VaultRegistryVault.md#activereplacecollateral)
- [bannedUntil](/interfaces/VaultRegistryVault.md#banneduntil)
- [createdAtHash](/interfaces/VaultRegistryVault.md#createdathash)
- [id](/interfaces/VaultRegistryVault.md#id)
- [initialU8aLength](/interfaces/VaultRegistryVault.md#initialu8alength)
- [issuedTokens](/interfaces/VaultRegistryVault.md#issuedtokens)
- [liquidatedCollateral](/interfaces/VaultRegistryVault.md#liquidatedcollateral)
- [replaceCollateral](/interfaces/VaultRegistryVault.md#replacecollateral)
- [size](/interfaces/VaultRegistryVault.md#size)
- [status](/interfaces/VaultRegistryVault.md#status)
- [toBeIssuedTokens](/interfaces/VaultRegistryVault.md#tobeissuedtokens)
- [toBeRedeemedTokens](/interfaces/VaultRegistryVault.md#toberedeemedtokens)
- [toBeReplacedTokens](/interfaces/VaultRegistryVault.md#tobereplacedtokens)
- [wallet](/interfaces/VaultRegistryVault.md#wallet)

### Accessors

- [Type](/interfaces/VaultRegistryVault.md#type)
- [defKeys](/interfaces/VaultRegistryVault.md#defkeys)
- [encodedLength](/interfaces/VaultRegistryVault.md#encodedlength)
- [hash](/interfaces/VaultRegistryVault.md#hash)
- [isEmpty](/interfaces/VaultRegistryVault.md#isempty)
- [registry](/interfaces/VaultRegistryVault.md#registry)

### Methods

- [[iterator]](/interfaces/VaultRegistryVault.md#[iterator])
- [clear](/interfaces/VaultRegistryVault.md#clear)
- [delete](/interfaces/VaultRegistryVault.md#delete)
- [entries](/interfaces/VaultRegistryVault.md#entries)
- [eq](/interfaces/VaultRegistryVault.md#eq)
- [forEach](/interfaces/VaultRegistryVault.md#foreach)
- [get](/interfaces/VaultRegistryVault.md#get)
- [getAtIndex](/interfaces/VaultRegistryVault.md#getatindex)
- [getT](/interfaces/VaultRegistryVault.md#gett)
- [has](/interfaces/VaultRegistryVault.md#has)
- [keys](/interfaces/VaultRegistryVault.md#keys)
- [set](/interfaces/VaultRegistryVault.md#set)
- [toArray](/interfaces/VaultRegistryVault.md#toarray)
- [toHex](/interfaces/VaultRegistryVault.md#tohex)
- [toHuman](/interfaces/VaultRegistryVault.md#tohuman)
- [toJSON](/interfaces/VaultRegistryVault.md#tojson)
- [toRawType](/interfaces/VaultRegistryVault.md#torawtype)
- [toString](/interfaces/VaultRegistryVault.md#tostring)
- [toU8a](/interfaces/VaultRegistryVault.md#tou8a)
- [values](/interfaces/VaultRegistryVault.md#values)

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

### <a id="activereplacecollateral" name="activereplacecollateral"></a> activeReplaceCollateral

• `Readonly` **activeReplaceCollateral**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:3678

___

### <a id="banneduntil" name="banneduntil"></a> bannedUntil

• `Readonly` **bannedUntil**: `Option`<`u32`\>

#### Defined in

src/interfaces/types-lookup.ts:3672

___

### <a id="createdathash" name="createdathash"></a> createdAtHash

• `Optional` **createdAtHash**: `IU8a`

#### Inherited from

Struct.createdAtHash

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:24

___

### <a id="id" name="id"></a> id

• `Readonly` **id**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

src/interfaces/types-lookup.ts:3669

___

### <a id="initialu8alength" name="initialu8alength"></a> initialU8aLength

• `Optional` `Readonly` **initialU8aLength**: `number`

#### Inherited from

Struct.initialU8aLength

#### Defined in

node_modules/@polkadot/types-codec/native/Struct.d.ts:25

___

### <a id="issuedtokens" name="issuedtokens"></a> issuedTokens

• `Readonly` **issuedTokens**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:3674

___

### <a id="liquidatedcollateral" name="liquidatedcollateral"></a> liquidatedCollateral

• `Readonly` **liquidatedCollateral**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:3679

___

### <a id="replacecollateral" name="replacecollateral"></a> replaceCollateral

• `Readonly` **replaceCollateral**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:3677

___

### <a id="size" name="size"></a> size

• `Readonly` **size**: `number`

#### Inherited from

Struct.size

#### Defined in

node_modules/typescript/lib/lib.es2015.collection.d.ts:28

___

### <a id="status" name="status"></a> status

• `Readonly` **status**: `VaultRegistryVaultStatus`

#### Defined in

src/interfaces/types-lookup.ts:3671

___

### <a id="tobeissuedtokens" name="tobeissuedtokens"></a> toBeIssuedTokens

• `Readonly` **toBeIssuedTokens**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:3673

___

### <a id="toberedeemedtokens" name="toberedeemedtokens"></a> toBeRedeemedTokens

• `Readonly` **toBeRedeemedTokens**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:3675

___

### <a id="tobereplacedtokens" name="tobereplacedtokens"></a> toBeReplacedTokens

• `Readonly` **toBeReplacedTokens**: `u128`

#### Defined in

src/interfaces/types-lookup.ts:3676

___

### <a id="wallet" name="wallet"></a> wallet

• `Readonly` **wallet**: `VaultRegistryWallet`

#### Defined in

src/interfaces/types-lookup.ts:3670

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

▸ **set**(`key`, `value`): [`VaultRegistryVault`](/interfaces/VaultRegistryVault.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Codec` |

#### Returns

[`VaultRegistryVault`](/interfaces/VaultRegistryVault.md)

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
