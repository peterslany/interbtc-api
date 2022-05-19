[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / InterBtcApi

# Interface: InterBtcApi

## Implemented by

- [`DefaultInterBtcApi`](/classes/DefaultInterBtcApi.md)

## Table of contents

### Properties

- [account](/interfaces/InterBtcApi.md#account)
- [api](/interfaces/InterBtcApi.md#api)
- [btcRelay](/interfaces/InterBtcApi.md#btcrelay)
- [electrsAPI](/interfaces/InterBtcApi.md#electrsapi)
- [escrow](/interfaces/InterBtcApi.md#escrow)
- [faucet](/interfaces/InterBtcApi.md#faucet)
- [fee](/interfaces/InterBtcApi.md#fee)
- [issue](/interfaces/InterBtcApi.md#issue)
- [nomination](/interfaces/InterBtcApi.md#nomination)
- [oracle](/interfaces/InterBtcApi.md#oracle)
- [redeem](/interfaces/InterBtcApi.md#redeem)
- [refund](/interfaces/InterBtcApi.md#refund)
- [replace](/interfaces/InterBtcApi.md#replace)
- [rewards](/interfaces/InterBtcApi.md#rewards)
- [system](/interfaces/InterBtcApi.md#system)
- [tokens](/interfaces/InterBtcApi.md#tokens)
- [vaults](/interfaces/InterBtcApi.md#vaults)

### Methods

- [getGovernanceCurrency](/interfaces/InterBtcApi.md#getgovernancecurrency)
- [getWrappedCurrency](/interfaces/InterBtcApi.md#getwrappedcurrency)
- [setAccount](/interfaces/InterBtcApi.md#setaccount)

## Properties

### <a id="account" name="account"></a> account

• `Readonly` **account**: `undefined` \| `AddressOrPair`

#### Defined in

[src/interbtc-api.ts:59](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L59)

___

### <a id="api" name="api"></a> api

• `Readonly` **api**: `ApiPromise`

#### Defined in

[src/interbtc-api.ts:42](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L42)

___

### <a id="btcrelay" name="btcrelay"></a> btcRelay

• `Readonly` **btcRelay**: [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md)

#### Defined in

[src/interbtc-api.ts:50](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L50)

___

### <a id="electrsapi" name="electrsapi"></a> electrsAPI

• `Readonly` **electrsAPI**: [`ElectrsAPI`](/interfaces/ElectrsAPI.md)

#### Defined in

[src/interbtc-api.ts:49](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L49)

___

### <a id="escrow" name="escrow"></a> escrow

• `Readonly` **escrow**: [`EscrowAPI`](/interfaces/EscrowAPI.md)

#### Defined in

[src/interbtc-api.ts:57](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L57)

___

### <a id="faucet" name="faucet"></a> faucet

• `Readonly` **faucet**: [`FaucetClient`](/classes/FaucetClient.md)

#### Defined in

[src/interbtc-api.ts:47](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L47)

___

### <a id="fee" name="fee"></a> fee

• `Readonly` **fee**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Defined in

[src/interbtc-api.ts:54](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L54)

___

### <a id="issue" name="issue"></a> issue

• `Readonly` **issue**: [`IssueAPI`](/interfaces/IssueAPI.md)

#### Defined in

[src/interbtc-api.ts:44](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L44)

___

### <a id="nomination" name="nomination"></a> nomination

• `Readonly` **nomination**: [`NominationAPI`](/interfaces/NominationAPI.md)

#### Defined in

[src/interbtc-api.ts:55](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L55)

___

### <a id="oracle" name="oracle"></a> oracle

• `Readonly` **oracle**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Defined in

[src/interbtc-api.ts:48](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L48)

___

### <a id="redeem" name="redeem"></a> redeem

• `Readonly` **redeem**: [`RedeemAPI`](/interfaces/RedeemAPI.md)

#### Defined in

[src/interbtc-api.ts:45](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L45)

___

### <a id="refund" name="refund"></a> refund

• `Readonly` **refund**: [`RefundAPI`](/interfaces/RefundAPI.md)

#### Defined in

[src/interbtc-api.ts:46](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L46)

___

### <a id="replace" name="replace"></a> replace

• `Readonly` **replace**: [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

#### Defined in

[src/interbtc-api.ts:53](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L53)

___

### <a id="rewards" name="rewards"></a> rewards

• `Readonly` **rewards**: [`RewardsAPI`](/interfaces/RewardsAPI.md)

#### Defined in

[src/interbtc-api.ts:56](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L56)

___

### <a id="system" name="system"></a> system

• `Readonly` **system**: [`SystemAPI`](/interfaces/SystemAPI.md)

#### Defined in

[src/interbtc-api.ts:52](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L52)

___

### <a id="tokens" name="tokens"></a> tokens

• `Readonly` **tokens**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Defined in

[src/interbtc-api.ts:51](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L51)

___

### <a id="vaults" name="vaults"></a> vaults

• `Readonly` **vaults**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Defined in

[src/interbtc-api.ts:43](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L43)

## Methods

### <a id="getgovernancecurrency" name="getgovernancecurrency"></a> getGovernanceCurrency

▸ **getGovernanceCurrency**(): `Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>

#### Returns

`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>

#### Defined in

[src/interbtc-api.ts:60](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L60)

___

### <a id="getwrappedcurrency" name="getwrappedcurrency"></a> getWrappedCurrency

▸ **getWrappedCurrency**(): `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Returns

`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Defined in

[src/interbtc-api.ts:61](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L61)

___

### <a id="setaccount" name="setaccount"></a> setAccount

▸ **setAccount**(`account`, `signer?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `AddressOrPair` |
| `signer?` | `Signer` |

#### Returns

`void`

#### Defined in

[src/interbtc-api.ts:58](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L58)
