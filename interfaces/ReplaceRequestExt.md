[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / ReplaceRequestExt

# Interface: ReplaceRequestExt

## Table of contents

### Properties

- [acceptTime](/interfaces/ReplaceRequestExt.md#accepttime)
- [amount](/interfaces/ReplaceRequestExt.md#amount)
- [btcAddress](/interfaces/ReplaceRequestExt.md#btcaddress)
- [btcHeight](/interfaces/ReplaceRequestExt.md#btcheight)
- [collateral](/interfaces/ReplaceRequestExt.md#collateral)
- [griefingCollateral](/interfaces/ReplaceRequestExt.md#griefingcollateral)
- [id](/interfaces/ReplaceRequestExt.md#id)
- [newVault](/interfaces/ReplaceRequestExt.md#newvault)
- [oldVault](/interfaces/ReplaceRequestExt.md#oldvault)
- [period](/interfaces/ReplaceRequestExt.md#period)
- [status](/interfaces/ReplaceRequestExt.md#status)

## Properties

### <a id="accepttime" name="accepttime"></a> acceptTime

• **acceptTime**: `number`

#### Defined in

[src/types/requestTypes.ts:93](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L93)

___

### <a id="amount" name="amount"></a> amount

• **amount**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:90](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L90)

___

### <a id="btcaddress" name="btcaddress"></a> btcAddress

• **btcAddress**: `string`

#### Defined in

[src/types/requestTypes.ts:87](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L87)

___

### <a id="btcheight" name="btcheight"></a> btcHeight

• **btcHeight**: `number`

#### Defined in

[src/types/requestTypes.ts:95](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L95)

___

### <a id="collateral" name="collateral"></a> collateral

• **collateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:92](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L92)

___

### <a id="griefingcollateral" name="griefingcollateral"></a> griefingCollateral

• **griefingCollateral**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:91](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L91)

___

### <a id="id" name="id"></a> id

• **id**: `string`

#### Defined in

[src/types/requestTypes.ts:86](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L86)

___

### <a id="newvault" name="newvault"></a> newVault

• **newVault**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/types/requestTypes.ts:88](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L88)

___

### <a id="oldvault" name="oldvault"></a> oldVault

• **oldVault**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/types/requestTypes.ts:89](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L89)

___

### <a id="period" name="period"></a> period

• **period**: `number`

#### Defined in

[src/types/requestTypes.ts:94](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L94)

___

### <a id="status" name="status"></a> status

• **status**: `InterbtcPrimitivesReplaceReplaceRequestStatus`

#### Defined in

[src/types/requestTypes.ts:96](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L96)
