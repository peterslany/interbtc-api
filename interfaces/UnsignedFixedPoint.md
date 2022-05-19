[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / UnsignedFixedPoint

# Interface: UnsignedFixedPoint

**`name`** UnsignedFixedPoint

## Hierarchy

- `FixedU128`

  ↳ **`UnsignedFixedPoint`**

## Table of contents

### Properties

- [#private](/interfaces/UnsignedFixedPoint.md##private)
- [createdAtHash](/interfaces/UnsignedFixedPoint.md#createdathash)
- [encodedLength](/interfaces/UnsignedFixedPoint.md#encodedlength)
- [registry](/interfaces/UnsignedFixedPoint.md#registry)

### Accessors

- [hash](/interfaces/UnsignedFixedPoint.md#hash)
- [isEmpty](/interfaces/UnsignedFixedPoint.md#isempty)
- [isUnsigned](/interfaces/UnsignedFixedPoint.md#isunsigned)

### Methods

- [abs](/interfaces/UnsignedFixedPoint.md#abs)
- [add](/interfaces/UnsignedFixedPoint.md#add)
- [addn](/interfaces/UnsignedFixedPoint.md#addn)
- [and](/interfaces/UnsignedFixedPoint.md#and)
- [andln](/interfaces/UnsignedFixedPoint.md#andln)
- [bincn](/interfaces/UnsignedFixedPoint.md#bincn)
- [bitLength](/interfaces/UnsignedFixedPoint.md#bitlength)
- [byteLength](/interfaces/UnsignedFixedPoint.md#bytelength)
- [clone](/interfaces/UnsignedFixedPoint.md#clone)
- [cmp](/interfaces/UnsignedFixedPoint.md#cmp)
- [cmpn](/interfaces/UnsignedFixedPoint.md#cmpn)
- [div](/interfaces/UnsignedFixedPoint.md#div)
- [divRound](/interfaces/UnsignedFixedPoint.md#divround)
- [divn](/interfaces/UnsignedFixedPoint.md#divn)
- [egcd](/interfaces/UnsignedFixedPoint.md#egcd)
- [eq](/interfaces/UnsignedFixedPoint.md#eq)
- [eqn](/interfaces/UnsignedFixedPoint.md#eqn)
- [fromTwos](/interfaces/UnsignedFixedPoint.md#fromtwos)
- [gcd](/interfaces/UnsignedFixedPoint.md#gcd)
- [gt](/interfaces/UnsignedFixedPoint.md#gt)
- [gte](/interfaces/UnsignedFixedPoint.md#gte)
- [gten](/interfaces/UnsignedFixedPoint.md#gten)
- [gtn](/interfaces/UnsignedFixedPoint.md#gtn)
- [iabs](/interfaces/UnsignedFixedPoint.md#iabs)
- [iadd](/interfaces/UnsignedFixedPoint.md#iadd)
- [iaddn](/interfaces/UnsignedFixedPoint.md#iaddn)
- [iand](/interfaces/UnsignedFixedPoint.md#iand)
- [idivn](/interfaces/UnsignedFixedPoint.md#idivn)
- [imaskn](/interfaces/UnsignedFixedPoint.md#imaskn)
- [imul](/interfaces/UnsignedFixedPoint.md#imul)
- [imuln](/interfaces/UnsignedFixedPoint.md#imuln)
- [ineg](/interfaces/UnsignedFixedPoint.md#ineg)
- [inotn](/interfaces/UnsignedFixedPoint.md#inotn)
- [invm](/interfaces/UnsignedFixedPoint.md#invm)
- [ior](/interfaces/UnsignedFixedPoint.md#ior)
- [isEven](/interfaces/UnsignedFixedPoint.md#iseven)
- [isMax](/interfaces/UnsignedFixedPoint.md#ismax)
- [isNeg](/interfaces/UnsignedFixedPoint.md#isneg)
- [isOdd](/interfaces/UnsignedFixedPoint.md#isodd)
- [isZero](/interfaces/UnsignedFixedPoint.md#iszero)
- [ishln](/interfaces/UnsignedFixedPoint.md#ishln)
- [ishrn](/interfaces/UnsignedFixedPoint.md#ishrn)
- [isqr](/interfaces/UnsignedFixedPoint.md#isqr)
- [isub](/interfaces/UnsignedFixedPoint.md#isub)
- [isubn](/interfaces/UnsignedFixedPoint.md#isubn)
- [iuand](/interfaces/UnsignedFixedPoint.md#iuand)
- [iuor](/interfaces/UnsignedFixedPoint.md#iuor)
- [iushln](/interfaces/UnsignedFixedPoint.md#iushln)
- [iushrn](/interfaces/UnsignedFixedPoint.md#iushrn)
- [iuxor](/interfaces/UnsignedFixedPoint.md#iuxor)
- [ixor](/interfaces/UnsignedFixedPoint.md#ixor)
- [lt](/interfaces/UnsignedFixedPoint.md#lt)
- [lte](/interfaces/UnsignedFixedPoint.md#lte)
- [lten](/interfaces/UnsignedFixedPoint.md#lten)
- [ltn](/interfaces/UnsignedFixedPoint.md#ltn)
- [maskn](/interfaces/UnsignedFixedPoint.md#maskn)
- [mod](/interfaces/UnsignedFixedPoint.md#mod)
- [modn](/interfaces/UnsignedFixedPoint.md#modn)
- [modrn](/interfaces/UnsignedFixedPoint.md#modrn)
- [mul](/interfaces/UnsignedFixedPoint.md#mul)
- [muln](/interfaces/UnsignedFixedPoint.md#muln)
- [neg](/interfaces/UnsignedFixedPoint.md#neg)
- [notn](/interfaces/UnsignedFixedPoint.md#notn)
- [or](/interfaces/UnsignedFixedPoint.md#or)
- [pow](/interfaces/UnsignedFixedPoint.md#pow)
- [setn](/interfaces/UnsignedFixedPoint.md#setn)
- [shln](/interfaces/UnsignedFixedPoint.md#shln)
- [shrn](/interfaces/UnsignedFixedPoint.md#shrn)
- [sqr](/interfaces/UnsignedFixedPoint.md#sqr)
- [sub](/interfaces/UnsignedFixedPoint.md#sub)
- [subn](/interfaces/UnsignedFixedPoint.md#subn)
- [testn](/interfaces/UnsignedFixedPoint.md#testn)
- [toArray](/interfaces/UnsignedFixedPoint.md#toarray)
- [toArrayLike](/interfaces/UnsignedFixedPoint.md#toarraylike)
- [toBigInt](/interfaces/UnsignedFixedPoint.md#tobigint)
- [toBn](/interfaces/UnsignedFixedPoint.md#tobn)
- [toBuffer](/interfaces/UnsignedFixedPoint.md#tobuffer)
- [toHex](/interfaces/UnsignedFixedPoint.md#tohex)
- [toHuman](/interfaces/UnsignedFixedPoint.md#tohuman)
- [toJSON](/interfaces/UnsignedFixedPoint.md#tojson)
- [toNumber](/interfaces/UnsignedFixedPoint.md#tonumber)
- [toRawType](/interfaces/UnsignedFixedPoint.md#torawtype)
- [toRed](/interfaces/UnsignedFixedPoint.md#tored)
- [toString](/interfaces/UnsignedFixedPoint.md#tostring)
- [toTwos](/interfaces/UnsignedFixedPoint.md#totwos)
- [toU8a](/interfaces/UnsignedFixedPoint.md#tou8a)
- [uand](/interfaces/UnsignedFixedPoint.md#uand)
- [ucmp](/interfaces/UnsignedFixedPoint.md#ucmp)
- [umod](/interfaces/UnsignedFixedPoint.md#umod)
- [uor](/interfaces/UnsignedFixedPoint.md#uor)
- [ushln](/interfaces/UnsignedFixedPoint.md#ushln)
- [ushrn](/interfaces/UnsignedFixedPoint.md#ushrn)
- [uxor](/interfaces/UnsignedFixedPoint.md#uxor)
- [xor](/interfaces/UnsignedFixedPoint.md#xor)
- [zeroBits](/interfaces/UnsignedFixedPoint.md#zerobits)

## Properties

### <a id="#private" name="#private"></a> #private

• `Private` **#private**: `any`

#### Inherited from

FixedU128.#private

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:12

___

### <a id="createdathash" name="createdathash"></a> createdAtHash

• `Optional` **createdAtHash**: `IU8a`

#### Inherited from

FixedU128.createdAtHash

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:14

___

### <a id="encodedlength" name="encodedlength"></a> encodedLength

• `Readonly` **encodedLength**: `number`

#### Inherited from

FixedU128.encodedLength

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:15

___

### <a id="registry" name="registry"></a> registry

• `Readonly` **registry**: `Registry`

#### Inherited from

FixedU128.registry

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:13

## Accessors

### <a id="hash" name="hash"></a> hash

• `get` **hash**(): `IU8a`

**`description`** returns a hash of the contents

#### Returns

`IU8a`

#### Inherited from

FixedU128.hash

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:20

___

### <a id="isempty" name="isempty"></a> isEmpty

• `get` **isEmpty**(): `boolean`

**`description`** Checks if the value is a zero value (align elsewhere)

#### Returns

`boolean`

#### Inherited from

FixedU128.isEmpty

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:24

___

### <a id="isunsigned" name="isunsigned"></a> isUnsigned

• `get` **isUnsigned**(): `boolean`

**`description`** Checks if the value is an unsigned type

#### Returns

`boolean`

#### Inherited from

FixedU128.isUnsigned

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:28

## Methods

### <a id="abs" name="abs"></a> abs

▸ **abs**(): `BN`

**`description`** absolute value

#### Returns

`BN`

#### Inherited from

FixedU128.abs

#### Defined in

node_modules/@types/bn.js/index.d.ts:235

___

### <a id="add" name="add"></a> add

▸ **add**(`b`): `BN`

**`description`** addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.add

#### Defined in

node_modules/@types/bn.js/index.d.ts:245

___

### <a id="addn" name="addn"></a> addn

▸ **addn**(`b`): `BN`

**`description`** addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.addn

#### Defined in

node_modules/@types/bn.js/index.d.ts:255

___

### <a id="and" name="and"></a> and

▸ **and**(`b`): `BN`

**`description`** and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.and

#### Defined in

node_modules/@types/bn.js/index.d.ts:381

___

### <a id="andln" name="andln"></a> andln

▸ **andln**(`b`): `BN`

**`description`** and (NOTE: `andln` is going to be replaced with `andn` in future)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.andln

#### Defined in

node_modules/@types/bn.js/index.d.ts:401

___

### <a id="bincn" name="bincn"></a> bincn

▸ **bincn**(`b`): `BN`

**`description`** add `1 << b` to the number

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.bincn

#### Defined in

node_modules/@types/bn.js/index.d.ts:485

___

### <a id="bitlength" name="bitlength"></a> bitLength

▸ **bitLength**(): `number`

**`description`** Returns the number of bits in the value

#### Returns

`number`

#### Inherited from

FixedU128.bitLength

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:32

___

### <a id="bytelength" name="bytelength"></a> byteLength

▸ **byteLength**(): `number`

**`description`** return number of bytes occupied

#### Returns

`number`

#### Inherited from

FixedU128.byteLength

#### Defined in

node_modules/@types/bn.js/index.d.ts:125

___

### <a id="clone" name="clone"></a> clone

▸ **clone**(): `BN`

**`description`** clone number

#### Returns

`BN`

#### Inherited from

FixedU128.clone

#### Defined in

node_modules/@types/bn.js/index.d.ts:70

___

### <a id="cmp" name="cmp"></a> cmp

▸ **cmp**(`b`): ``0`` \| ``1`` \| ``-1``

**`description`** compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Inherited from

FixedU128.cmp

#### Defined in

node_modules/@types/bn.js/index.d.ts:150

___

### <a id="cmpn" name="cmpn"></a> cmpn

▸ **cmpn**(`b`): ``0`` \| ``1`` \| ``-1``

**`description`** compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Inherited from

FixedU128.cmpn

#### Defined in

node_modules/@types/bn.js/index.d.ts:160

___

### <a id="div" name="div"></a> div

▸ **div**(`b`): `BN`

**`description`** divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.div

#### Defined in

node_modules/@types/bn.js/index.d.ts:320

___

### <a id="divround" name="divround"></a> divRound

▸ **divRound**(`b`): `BN`

**`description`** rounded division

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.divRound

#### Defined in

node_modules/@types/bn.js/index.d.ts:356

___

### <a id="divn" name="divn"></a> divn

▸ **divn**(`b`): `BN`

**`description`** divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.divn

#### Defined in

node_modules/@types/bn.js/index.d.ts:325

___

### <a id="egcd" name="egcd"></a> egcd

▸ **egcd**(`b`): `Object`

**`description`** Extended GCD results `({ a: ..., b: ..., gcd: ... })`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `a` | `BN` |
| `b` | `BN` |
| `gcd` | `BN` |

#### Inherited from

FixedU128.egcd

#### Defined in

node_modules/@types/bn.js/index.d.ts:505

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

FixedU128.eq

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:36

___

### <a id="eqn" name="eqn"></a> eqn

▸ **eqn**(`b`): `boolean`

**`description`** a equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.eqn

#### Defined in

node_modules/@types/bn.js/index.d.ts:210

___

### <a id="fromtwos" name="fromtwos"></a> fromTwos

▸ **fromTwos**(`width`): `BN`

**`description`** convert from two's complement representation, where width is the bit width

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.fromTwos

#### Defined in

node_modules/@types/bn.js/index.d.ts:220

___

### <a id="gcd" name="gcd"></a> gcd

▸ **gcd**(`b`): `BN`

**`description`** GCD

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.gcd

#### Defined in

node_modules/@types/bn.js/index.d.ts:500

___

### <a id="gt" name="gt"></a> gt

▸ **gt**(`b`): `boolean`

**`description`** a greater than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`boolean`

#### Inherited from

FixedU128.gt

#### Defined in

node_modules/@types/bn.js/index.d.ts:185

___

### <a id="gte" name="gte"></a> gte

▸ **gte**(`b`): `boolean`

**`description`** a greater than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`boolean`

#### Inherited from

FixedU128.gte

#### Defined in

node_modules/@types/bn.js/index.d.ts:195

___

### <a id="gten" name="gten"></a> gten

▸ **gten**(`b`): `boolean`

**`description`** a greater than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.gten

#### Defined in

node_modules/@types/bn.js/index.d.ts:200

___

### <a id="gtn" name="gtn"></a> gtn

▸ **gtn**(`b`): `boolean`

**`description`** a greater than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.gtn

#### Defined in

node_modules/@types/bn.js/index.d.ts:190

___

### <a id="iabs" name="iabs"></a> iabs

▸ **iabs**(): `BN`

**`description`** absolute value

#### Returns

`BN`

#### Inherited from

FixedU128.iabs

#### Defined in

node_modules/@types/bn.js/index.d.ts:240

___

### <a id="iadd" name="iadd"></a> iadd

▸ **iadd**(`b`): `BN`

**`description`** addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iadd

#### Defined in

node_modules/@types/bn.js/index.d.ts:250

___

### <a id="iaddn" name="iaddn"></a> iaddn

▸ **iaddn**(`b`): `BN`

**`description`** addition

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.iaddn

#### Defined in

node_modules/@types/bn.js/index.d.ts:260

___

### <a id="iand" name="iand"></a> iand

▸ **iand**(`b`): `BN`

**`description`** and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iand

#### Defined in

node_modules/@types/bn.js/index.d.ts:386

___

### <a id="idivn" name="idivn"></a> idivn

▸ **idivn**(`b`): `BN`

**`description`** divide

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.idivn

#### Defined in

node_modules/@types/bn.js/index.d.ts:330

___

### <a id="imaskn" name="imaskn"></a> imaskn

▸ **imaskn**(`b`): `BN`

**`description`** clear bits with indexes higher or equal to `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.imaskn

#### Defined in

node_modules/@types/bn.js/index.d.ts:481

___

### <a id="imul" name="imul"></a> imul

▸ **imul**(`b`): `BN`

**`description`** multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.imul

#### Defined in

node_modules/@types/bn.js/index.d.ts:290

___

### <a id="imuln" name="imuln"></a> imuln

▸ **imuln**(`b`): `BN`

**`description`** multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.imuln

#### Defined in

node_modules/@types/bn.js/index.d.ts:300

___

### <a id="ineg" name="ineg"></a> ineg

▸ **ineg**(): `BN`

**`description`** negate sign

#### Returns

`BN`

#### Inherited from

FixedU128.ineg

#### Defined in

node_modules/@types/bn.js/index.d.ts:230

___

### <a id="inotn" name="inotn"></a> inotn

▸ **inotn**(`w`): `BN`

**`description`** not (for the width specified by `w`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.inotn

#### Defined in

node_modules/@types/bn.js/index.d.ts:495

___

### <a id="invm" name="invm"></a> invm

▸ **invm**(`b`): `BN`

**`description`** inverse `a` modulo `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.invm

#### Defined in

node_modules/@types/bn.js/index.d.ts:510

___

### <a id="ior" name="ior"></a> ior

▸ **ior**(`b`): `BN`

**`description`** or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.ior

#### Defined in

node_modules/@types/bn.js/index.d.ts:366

___

### <a id="iseven" name="iseven"></a> isEven

▸ **isEven**(): `boolean`

**`description`** check if value is even

#### Returns

`boolean`

#### Inherited from

FixedU128.isEven

#### Defined in

node_modules/@types/bn.js/index.d.ts:135

___

### <a id="ismax" name="ismax"></a> isMax

▸ **isMax**(): `boolean`

**`description`** True if this value is the max of the type

#### Returns

`boolean`

#### Inherited from

FixedU128.isMax

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:40

___

### <a id="isneg" name="isneg"></a> isNeg

▸ **isNeg**(): `boolean`

**`description`** true if the number is negative

#### Returns

`boolean`

#### Inherited from

FixedU128.isNeg

#### Defined in

node_modules/@types/bn.js/index.d.ts:130

___

### <a id="isodd" name="isodd"></a> isOdd

▸ **isOdd**(): `boolean`

**`description`** check if value is odd

#### Returns

`boolean`

#### Inherited from

FixedU128.isOdd

#### Defined in

node_modules/@types/bn.js/index.d.ts:140

___

### <a id="iszero" name="iszero"></a> isZero

▸ **isZero**(): `boolean`

**`description`** check if value is zero

#### Returns

`boolean`

#### Inherited from

FixedU128.isZero

#### Defined in

node_modules/@types/bn.js/index.d.ts:145

___

### <a id="ishln" name="ishln"></a> ishln

▸ **ishln**(`b`): `BN`

**`description`** shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.ishln

#### Defined in

node_modules/@types/bn.js/index.d.ts:436

___

### <a id="ishrn" name="ishrn"></a> ishrn

▸ **ishrn**(`b`): `BN`

**`description`** shift right (unimplemented https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086)

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.ishrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:456

___

### <a id="isqr" name="isqr"></a> isqr

▸ **isqr**(): `BN`

**`description`** square

#### Returns

`BN`

#### Inherited from

FixedU128.isqr

#### Defined in

node_modules/@types/bn.js/index.d.ts:310

___

### <a id="isub" name="isub"></a> isub

▸ **isub**(`b`): `BN`

**`description`** subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.isub

#### Defined in

node_modules/@types/bn.js/index.d.ts:270

___

### <a id="isubn" name="isubn"></a> isubn

▸ **isubn**(`b`): `BN`

**`description`** subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.isubn

#### Defined in

node_modules/@types/bn.js/index.d.ts:280

___

### <a id="iuand" name="iuand"></a> iuand

▸ **iuand**(`b`): `BN`

**`description`** and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iuand

#### Defined in

node_modules/@types/bn.js/index.d.ts:396

___

### <a id="iuor" name="iuor"></a> iuor

▸ **iuor**(`b`): `BN`

**`description`** or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iuor

#### Defined in

node_modules/@types/bn.js/index.d.ts:376

___

### <a id="iushln" name="iushln"></a> iushln

▸ **iushln**(`b`): `BN`

**`description`** shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.iushln

#### Defined in

node_modules/@types/bn.js/index.d.ts:446

___

### <a id="iushrn" name="iushrn"></a> iushrn

▸ **iushrn**(`b`): `BN`

**`description`** shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.iushrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:466

___

### <a id="iuxor" name="iuxor"></a> iuxor

▸ **iuxor**(`b`): `BN`

**`description`** xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.iuxor

#### Defined in

node_modules/@types/bn.js/index.d.ts:421

___

### <a id="ixor" name="ixor"></a> ixor

▸ **ixor**(`b`): `BN`

**`description`** xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.ixor

#### Defined in

node_modules/@types/bn.js/index.d.ts:411

___

### <a id="lt" name="lt"></a> lt

▸ **lt**(`b`): `boolean`

**`description`** a less than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`boolean`

#### Inherited from

FixedU128.lt

#### Defined in

node_modules/@types/bn.js/index.d.ts:165

___

### <a id="lte" name="lte"></a> lte

▸ **lte**(`b`): `boolean`

**`description`** a less than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`boolean`

#### Inherited from

FixedU128.lte

#### Defined in

node_modules/@types/bn.js/index.d.ts:175

___

### <a id="lten" name="lten"></a> lten

▸ **lten**(`b`): `boolean`

**`description`** a less than or equals b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.lten

#### Defined in

node_modules/@types/bn.js/index.d.ts:180

___

### <a id="ltn" name="ltn"></a> ltn

▸ **ltn**(`b`): `boolean`

**`description`** a less than b

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.ltn

#### Defined in

node_modules/@types/bn.js/index.d.ts:170

___

### <a id="maskn" name="maskn"></a> maskn

▸ **maskn**(`b`): `BN`

**`description`** clear bits with indexes higher or equal to `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.maskn

#### Defined in

node_modules/@types/bn.js/index.d.ts:476

___

### <a id="mod" name="mod"></a> mod

▸ **mod**(`b`): `BN`

**`description`** reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.mod

#### Defined in

node_modules/@types/bn.js/index.d.ts:335

___

### <a id="modn" name="modn"></a> modn

▸ **modn**(`b`): `number`

**`deprecated`**

**`description`** reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`number`

#### Inherited from

FixedU128.modn

#### Defined in

node_modules/@types/bn.js/index.d.ts:346

___

### <a id="modrn" name="modrn"></a> modrn

▸ **modrn**(`b`): `number`

**`description`** reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`number`

#### Inherited from

FixedU128.modrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:351

___

### <a id="mul" name="mul"></a> mul

▸ **mul**(`b`): `BN`

**`description`** multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.mul

#### Defined in

node_modules/@types/bn.js/index.d.ts:285

___

### <a id="muln" name="muln"></a> muln

▸ **muln**(`b`): `BN`

**`description`** multiply

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.muln

#### Defined in

node_modules/@types/bn.js/index.d.ts:295

___

### <a id="neg" name="neg"></a> neg

▸ **neg**(): `BN`

**`description`** negate sign

#### Returns

`BN`

#### Inherited from

FixedU128.neg

#### Defined in

node_modules/@types/bn.js/index.d.ts:225

___

### <a id="notn" name="notn"></a> notn

▸ **notn**(`w`): `BN`

**`description`** not (for the width specified by `w`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `w` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.notn

#### Defined in

node_modules/@types/bn.js/index.d.ts:490

___

### <a id="or" name="or"></a> or

▸ **or**(`b`): `BN`

**`description`** or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.or

#### Defined in

node_modules/@types/bn.js/index.d.ts:361

___

### <a id="pow" name="pow"></a> pow

▸ **pow**(`b`): `BN`

**`description`** raise `a` to the power of `b`

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.pow

#### Defined in

node_modules/@types/bn.js/index.d.ts:315

___

### <a id="setn" name="setn"></a> setn

▸ **setn**(`b`): `BN`

**`description`** set specified bit to 1

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.setn

#### Defined in

node_modules/@types/bn.js/index.d.ts:426

___

### <a id="shln" name="shln"></a> shln

▸ **shln**(`b`): `BN`

**`description`** shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.shln

#### Defined in

node_modules/@types/bn.js/index.d.ts:431

___

### <a id="shrn" name="shrn"></a> shrn

▸ **shrn**(`b`): `BN`

**`description`** shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.shrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:451

___

### <a id="sqr" name="sqr"></a> sqr

▸ **sqr**(): `BN`

**`description`** square

#### Returns

`BN`

#### Inherited from

FixedU128.sqr

#### Defined in

node_modules/@types/bn.js/index.d.ts:305

___

### <a id="sub" name="sub"></a> sub

▸ **sub**(`b`): `BN`

**`description`** subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.sub

#### Defined in

node_modules/@types/bn.js/index.d.ts:265

___

### <a id="subn" name="subn"></a> subn

▸ **subn**(`b`): `BN`

**`description`** subtraction

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.subn

#### Defined in

node_modules/@types/bn.js/index.d.ts:275

___

### <a id="testn" name="testn"></a> testn

▸ **testn**(`b`): `boolean`

**`description`** test if specified bit is set

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`boolean`

#### Inherited from

FixedU128.testn

#### Defined in

node_modules/@types/bn.js/index.d.ts:471

___

### <a id="toarray" name="toarray"></a> toArray

▸ **toArray**(`endian?`, `length?`): `number`[]

**`description`** convert to byte Array, and optionally zero pad to length, throwing if already exceeding

#### Parameters

| Name | Type |
| :------ | :------ |
| `endian?` | `Endianness` |
| `length?` | `number` |

#### Returns

`number`[]

#### Inherited from

FixedU128.toArray

#### Defined in

node_modules/@types/bn.js/index.d.ts:90

___

### <a id="toarraylike" name="toarraylike"></a> toArrayLike

▸ **toArrayLike**(`ArrayType`, `endian?`, `length?`): `Buffer`

**`description`** convert to an instance of `type`, which must behave like an Array

#### Parameters

| Name | Type |
| :------ | :------ |
| `ArrayType` | typeof `Buffer` |
| `endian?` | `Endianness` |
| `length?` | `number` |

#### Returns

`Buffer`

#### Inherited from

FixedU128.toArrayLike

#### Defined in

node_modules/@types/bn.js/index.d.ts:95

▸ **toArrayLike**(`ArrayType`, `endian?`, `length?`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `ArrayType` | `any`[] |
| `endian?` | `Endianness` |
| `length?` | `number` |

#### Returns

`any`[]

#### Inherited from

FixedU128.toArrayLike

#### Defined in

node_modules/@types/bn.js/index.d.ts:101

___

### <a id="tobigint" name="tobigint"></a> toBigInt

▸ **toBigInt**(): `bigint`

**`description`** Returns a BigInt representation of the number

#### Returns

`bigint`

#### Inherited from

FixedU128.toBigInt

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:44

___

### <a id="tobn" name="tobn"></a> toBn

▸ **toBn**(): `BN`

**`description`** Returns the BN representation of the number. (Compatibility)

#### Returns

`BN`

#### Inherited from

FixedU128.toBn

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:48

___

### <a id="tobuffer" name="tobuffer"></a> toBuffer

▸ **toBuffer**(`endian?`, `length?`): `Buffer`

**`description`** convert to Node.js Buffer (if available). For compatibility with browserify and similar tools, use this instead: a.toArrayLike(Buffer, endian, length)

#### Parameters

| Name | Type |
| :------ | :------ |
| `endian?` | `Endianness` |
| `length?` | `number` |

#### Returns

`Buffer`

#### Inherited from

FixedU128.toBuffer

#### Defined in

node_modules/@types/bn.js/index.d.ts:110

___

### <a id="tohex" name="tohex"></a> toHex

▸ **toHex**(`isLe?`): \`0x${string}\`

**`description`** Returns a hex string representation of the value

#### Parameters

| Name | Type |
| :------ | :------ |
| `isLe?` | `boolean` |

#### Returns

\`0x${string}\`

#### Inherited from

FixedU128.toHex

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:52

___

### <a id="tohuman" name="tohuman"></a> toHuman

▸ **toHuman**(`isExpanded?`): `string`

**`description`** Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information

#### Parameters

| Name | Type |
| :------ | :------ |
| `isExpanded?` | `boolean` |

#### Returns

`string`

#### Inherited from

FixedU128.toHuman

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:56

___

### <a id="tojson" name="tojson"></a> toJSON

▸ **toJSON**(`onlyHex?`): `any`

**`description`** Converts the Object to JSON, typically used for RPC transfers

#### Parameters

| Name | Type |
| :------ | :------ |
| `onlyHex?` | `boolean` |

#### Returns

`any`

#### Inherited from

FixedU128.toJSON

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:60

___

### <a id="tonumber" name="tonumber"></a> toNumber

▸ **toNumber**(): `number`

**`description`** convert to Javascript Number (limited to 53 bits)

#### Returns

`number`

#### Inherited from

FixedU128.toNumber

#### Defined in

node_modules/@types/bn.js/index.d.ts:80

___

### <a id="torawtype" name="torawtype"></a> toRawType

▸ **toRawType**(): `string`

**`description`** Returns the base runtime type name for this instance

#### Returns

`string`

#### Inherited from

FixedU128.toRawType

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:64

___

### <a id="tored" name="tored"></a> toRed

▸ **toRed**(`reductionContext`): `RedBN`

**`description`** Convert number to red

#### Parameters

| Name | Type |
| :------ | :------ |
| `reductionContext` | `ReductionContext` |

#### Returns

`RedBN`

#### Inherited from

FixedU128.toRed

#### Defined in

node_modules/@types/bn.js/index.d.ts:515

___

### <a id="tostring" name="tostring"></a> toString

▸ **toString**(`base?`): `string`

**`description`** Returns the string representation of the value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `base?` | `number` | The base to use for the conversion |

#### Returns

`string`

#### Inherited from

FixedU128.toString

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:69

___

### <a id="totwos" name="totwos"></a> toTwos

▸ **toTwos**(`width`): `BN`

**`description`** convert to two's complement representation, where width is bit width

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.toTwos

#### Defined in

node_modules/@types/bn.js/index.d.ts:215

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

FixedU128.toU8a

#### Defined in

node_modules/@polkadot/types-codec/abstract/AbstractInt.d.ts:74

___

### <a id="uand" name="uand"></a> uand

▸ **uand**(`b`): `BN`

**`description`** and

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.uand

#### Defined in

node_modules/@types/bn.js/index.d.ts:391

___

### <a id="ucmp" name="ucmp"></a> ucmp

▸ **ucmp**(`b`): ``0`` \| ``1`` \| ``-1``

**`description`** compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Inherited from

FixedU128.ucmp

#### Defined in

node_modules/@types/bn.js/index.d.ts:155

___

### <a id="umod" name="umod"></a> umod

▸ **umod**(`b`): `BN`

**`description`** reduct

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.umod

#### Defined in

node_modules/@types/bn.js/index.d.ts:340

___

### <a id="uor" name="uor"></a> uor

▸ **uor**(`b`): `BN`

**`description`** or

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.uor

#### Defined in

node_modules/@types/bn.js/index.d.ts:371

___

### <a id="ushln" name="ushln"></a> ushln

▸ **ushln**(`b`): `BN`

**`description`** shift left

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.ushln

#### Defined in

node_modules/@types/bn.js/index.d.ts:441

___

### <a id="ushrn" name="ushrn"></a> ushrn

▸ **ushrn**(`b`): `BN`

**`description`** shift right

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `number` |

#### Returns

`BN`

#### Inherited from

FixedU128.ushrn

#### Defined in

node_modules/@types/bn.js/index.d.ts:461

___

### <a id="uxor" name="uxor"></a> uxor

▸ **uxor**(`b`): `BN`

**`description`** xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.uxor

#### Defined in

node_modules/@types/bn.js/index.d.ts:416

___

### <a id="xor" name="xor"></a> xor

▸ **xor**(`b`): `BN`

**`description`** xor

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `BN` |

#### Returns

`BN`

#### Inherited from

FixedU128.xor

#### Defined in

node_modules/@types/bn.js/index.d.ts:406

___

### <a id="zerobits" name="zerobits"></a> zeroBits

▸ **zeroBits**(): `number`

**`description`** return number of less-significant consequent zero bits (example: 1010000 has 4 zero bits)

#### Returns

`number`

#### Inherited from

FixedU128.zeroBits

#### Defined in

node_modules/@types/bn.js/index.d.ts:120
