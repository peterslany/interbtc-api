[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / DefaultInterBtcApi

# Class: DefaultInterBtcApi

## Implements

- [`InterBtcApi`](/interfaces/InterBtcApi.md)

## Table of contents

### Constructors

- [constructor](/classes/DefaultInterBtcApi.md#constructor)

### Properties

- [api](/classes/DefaultInterBtcApi.md#api)
- [btcRelay](/classes/DefaultInterBtcApi.md#btcrelay)
- [electrsAPI](/classes/DefaultInterBtcApi.md#electrsapi)
- [escrow](/classes/DefaultInterBtcApi.md#escrow)
- [faucet](/classes/DefaultInterBtcApi.md#faucet)
- [fee](/classes/DefaultInterBtcApi.md#fee)
- [issue](/classes/DefaultInterBtcApi.md#issue)
- [nomination](/classes/DefaultInterBtcApi.md#nomination)
- [oracle](/classes/DefaultInterBtcApi.md#oracle)
- [redeem](/classes/DefaultInterBtcApi.md#redeem)
- [refund](/classes/DefaultInterBtcApi.md#refund)
- [replace](/classes/DefaultInterBtcApi.md#replace)
- [rewards](/classes/DefaultInterBtcApi.md#rewards)
- [system](/classes/DefaultInterBtcApi.md#system)
- [tokens](/classes/DefaultInterBtcApi.md#tokens)
- [transactionAPI](/classes/DefaultInterBtcApi.md#transactionapi)
- [vaults](/classes/DefaultInterBtcApi.md#vaults)

### Accessors

- [account](/classes/DefaultInterBtcApi.md#account)

### Methods

- [getGovernanceCurrency](/classes/DefaultInterBtcApi.md#getgovernancecurrency)
- [getWrappedCurrency](/classes/DefaultInterBtcApi.md#getwrappedcurrency)
- [setAccount](/classes/DefaultInterBtcApi.md#setaccount)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new DefaultInterBtcApi**(`api`, `bitcoinNetwork?`, `_account?`, `esploraNetwork?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `api` | `ApiPromise` | `undefined` |
| `bitcoinNetwork` | [`BitcoinNetwork`](/modules.md#bitcoinnetwork) | `"mainnet"` |
| `_account?` | `AddressOrPair` | `undefined` |
| `esploraNetwork?` | `string` | `undefined` |

#### Defined in

[src/interbtc-api.ts:85](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L85)

## Properties

### <a id="api" name="api"></a> api

• `Readonly` **api**: `ApiPromise`

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[api](/interfaces/InterBtcApi.md#api)

___

### <a id="btcrelay" name="btcrelay"></a> btcRelay

• `Readonly` **btcRelay**: [`BTCRelayAPI`](/interfaces/BTCRelayAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[btcRelay](/interfaces/InterBtcApi.md#btcrelay)

#### Defined in

[src/interbtc-api.ts:75](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L75)

___

### <a id="electrsapi" name="electrsapi"></a> electrsAPI

• `Readonly` **electrsAPI**: [`ElectrsAPI`](/interfaces/ElectrsAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[electrsAPI](/interfaces/InterBtcApi.md#electrsapi)

#### Defined in

[src/interbtc-api.ts:74](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L74)

___

### <a id="escrow" name="escrow"></a> escrow

• `Readonly` **escrow**: [`EscrowAPI`](/interfaces/EscrowAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[escrow](/interfaces/InterBtcApi.md#escrow)

#### Defined in

[src/interbtc-api.ts:82](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L82)

___

### <a id="faucet" name="faucet"></a> faucet

• `Readonly` **faucet**: [`FaucetClient`](/classes/FaucetClient.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[faucet](/interfaces/InterBtcApi.md#faucet)

#### Defined in

[src/interbtc-api.ts:72](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L72)

___

### <a id="fee" name="fee"></a> fee

• `Readonly` **fee**: [`FeeAPI`](/interfaces/FeeAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[fee](/interfaces/InterBtcApi.md#fee)

#### Defined in

[src/interbtc-api.ts:79](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L79)

___

### <a id="issue" name="issue"></a> issue

• `Readonly` **issue**: [`IssueAPI`](/interfaces/IssueAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[issue](/interfaces/InterBtcApi.md#issue)

#### Defined in

[src/interbtc-api.ts:69](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L69)

___

### <a id="nomination" name="nomination"></a> nomination

• `Readonly` **nomination**: [`NominationAPI`](/interfaces/NominationAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[nomination](/interfaces/InterBtcApi.md#nomination)

#### Defined in

[src/interbtc-api.ts:80](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L80)

___

### <a id="oracle" name="oracle"></a> oracle

• `Readonly` **oracle**: [`OracleAPI`](/interfaces/OracleAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[oracle](/interfaces/InterBtcApi.md#oracle)

#### Defined in

[src/interbtc-api.ts:73](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L73)

___

### <a id="redeem" name="redeem"></a> redeem

• `Readonly` **redeem**: [`RedeemAPI`](/interfaces/RedeemAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[redeem](/interfaces/InterBtcApi.md#redeem)

#### Defined in

[src/interbtc-api.ts:70](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L70)

___

### <a id="refund" name="refund"></a> refund

• `Readonly` **refund**: [`RefundAPI`](/interfaces/RefundAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[refund](/interfaces/InterBtcApi.md#refund)

#### Defined in

[src/interbtc-api.ts:71](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L71)

___

### <a id="replace" name="replace"></a> replace

• `Readonly` **replace**: [`ReplaceAPI`](/interfaces/ReplaceAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[replace](/interfaces/InterBtcApi.md#replace)

#### Defined in

[src/interbtc-api.ts:78](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L78)

___

### <a id="rewards" name="rewards"></a> rewards

• `Readonly` **rewards**: [`RewardsAPI`](/interfaces/RewardsAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[rewards](/interfaces/InterBtcApi.md#rewards)

#### Defined in

[src/interbtc-api.ts:81](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L81)

___

### <a id="system" name="system"></a> system

• `Readonly` **system**: [`SystemAPI`](/interfaces/SystemAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[system](/interfaces/InterBtcApi.md#system)

#### Defined in

[src/interbtc-api.ts:77](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L77)

___

### <a id="tokens" name="tokens"></a> tokens

• `Readonly` **tokens**: [`TokensAPI`](/interfaces/TokensAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[tokens](/interfaces/InterBtcApi.md#tokens)

#### Defined in

[src/interbtc-api.ts:76](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L76)

___

### <a id="transactionapi" name="transactionapi"></a> transactionAPI

• `Private` **transactionAPI**: [`TransactionAPI`](/interfaces/TransactionAPI.md)

#### Defined in

[src/interbtc-api.ts:83](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L83)

___

### <a id="vaults" name="vaults"></a> vaults

• `Readonly` **vaults**: [`VaultsAPI`](/interfaces/VaultsAPI.md)

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[vaults](/interfaces/InterBtcApi.md#vaults)

#### Defined in

[src/interbtc-api.ts:68](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L68)

## Accessors

### <a id="account" name="account"></a> account

• `get` **account**(): `undefined` \| `AddressOrPair`

#### Returns

`undefined` \| `AddressOrPair`

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[account](/interfaces/InterBtcApi.md#account)

#### Defined in

[src/interbtc-api.ts:168](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L168)

## Methods

### <a id="getgovernancecurrency" name="getgovernancecurrency"></a> getGovernanceCurrency

▸ **getGovernanceCurrency**(): `Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>

#### Returns

`Currency`<{ `INTR`: ``10`` ; `Planck`: ``0``  } \| { `KINT`: ``12`` ; `Planck`: ``0``  }\>

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[getGovernanceCurrency](/interfaces/InterBtcApi.md#getgovernancecurrency)

#### Defined in

[src/interbtc-api.ts:172](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L172)

___

### <a id="getwrappedcurrency" name="getwrappedcurrency"></a> getWrappedCurrency

▸ **getWrappedCurrency**(): `Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Returns

`Currency`<{ `BTC`: ``8`` ; `Satoshi`: ``0``  }\>

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[getWrappedCurrency](/interfaces/InterBtcApi.md#getwrappedcurrency)

#### Defined in

[src/interbtc-api.ts:177](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L177)

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

#### Implementation of

[InterBtcApi](/interfaces/InterBtcApi.md).[setAccount](/interfaces/InterBtcApi.md#setaccount)

#### Defined in

[src/interbtc-api.ts:158](https://github.com/interlay/interbtc-api/blob/3ad80e9/src/interbtc-api.ts#L158)
