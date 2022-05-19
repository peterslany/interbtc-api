[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / Redeem

# Interface: Redeem

## Table of contents

### Properties

- [amountBTC](/interfaces/Redeem.md#amountbtc)
- [bridgeFee](/interfaces/Redeem.md#bridgefee)
- [btcBlockHeight](/interfaces/Redeem.md#btcblockheight)
- [btcTransferFee](/interfaces/Redeem.md#btctransferfee)
- [btcTxId](/interfaces/Redeem.md#btctxid)
- [collateralPremium](/interfaces/Redeem.md#collateralpremium)
- [confirmations](/interfaces/Redeem.md#confirmations)
- [creationBlock](/interfaces/Redeem.md#creationblock)
- [creationTimestamp](/interfaces/Redeem.md#creationtimestamp)
- [id](/interfaces/Redeem.md#id)
- [status](/interfaces/Redeem.md#status)
- [userBTCAddress](/interfaces/Redeem.md#userbtcaddress)
- [userParachainAddress](/interfaces/Redeem.md#userparachainaddress)
- [vaultId](/interfaces/Redeem.md#vaultid)

## Properties

### <a id="amountbtc" name="amountbtc"></a> amountBTC

• **amountBTC**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:49](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L49)

___

### <a id="bridgefee" name="bridgefee"></a> bridgeFee

• **bridgeFee**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:51](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L51)

___

### <a id="btcblockheight" name="btcblockheight"></a> btcBlockHeight

• `Optional` **btcBlockHeight**: `number`

#### Defined in

[src/types/requestTypes.ts:59](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L59)

___

### <a id="btctransferfee" name="btctransferfee"></a> btcTransferFee

• **btcTransferFee**: `MonetaryAmount`<`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>, { `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:52](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L52)

___

### <a id="btctxid" name="btctxid"></a> btcTxId

• `Optional` **btcTxId**: `string`

#### Defined in

[src/types/requestTypes.ts:57](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L57)

___

### <a id="collateralpremium" name="collateralpremium"></a> collateralPremium

• **collateralPremium**: `MonetaryAmount`<`Currency`<{ `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>, { `DOT`: ``10`` ; `Planck`: ``0``  } \| { `KSM`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/types/requestTypes.ts:50](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L50)

___

### <a id="confirmations" name="confirmations"></a> confirmations

• `Optional` **confirmations**: `number`

#### Defined in

[src/types/requestTypes.ts:58](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L58)

___

### <a id="creationblock" name="creationblock"></a> creationBlock

• **creationBlock**: `number`

#### Defined in

[src/types/requestTypes.ts:54](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L54)

___

### <a id="creationtimestamp" name="creationtimestamp"></a> creationTimestamp

• `Optional` **creationTimestamp**: `number`

#### Defined in

[src/types/requestTypes.ts:53](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L53)

___

### <a id="id" name="id"></a> id

• **id**: `string`

#### Defined in

[src/types/requestTypes.ts:47](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L47)

___

### <a id="status" name="status"></a> status

• **status**: [`RedeemStatus`](/enums/RedeemStatus.md)

#### Defined in

[src/types/requestTypes.ts:60](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L60)

___

### <a id="userbtcaddress" name="userbtcaddress"></a> userBTCAddress

• **userBTCAddress**: `string`

#### Defined in

[src/types/requestTypes.ts:56](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L56)

___

### <a id="userparachainaddress" name="userparachainaddress"></a> userParachainAddress

• **userParachainAddress**: `string`

#### Defined in

[src/types/requestTypes.ts:48](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L48)

___

### <a id="vaultid" name="vaultid"></a> vaultId

• **vaultId**: [`InterbtcPrimitivesVaultId`](/interfaces/InterbtcPrimitivesVaultId.md)

#### Defined in

[src/types/requestTypes.ts:55](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/types/requestTypes.ts#L55)
