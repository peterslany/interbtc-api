[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / Psbt

# Class: Psbt

[bitcoin](/modules/bitcoin.md).Psbt

Psbt class can parse and generate a PSBT binary based off of the BIP174.
There are 6 roles that this class fulfills. (Explained in BIP174)

Creator: This can be done with `new Psbt()`
Updater: This can be done with `psbt.addInput(input)`, `psbt.addInputs(inputs)`,
  `psbt.addOutput(output)`, `psbt.addOutputs(outputs)` when you are looking to
  add new inputs and outputs to the PSBT, and `psbt.updateGlobal(itemObject)`,
  `psbt.updateInput(itemObject)`, `psbt.updateOutput(itemObject)`
  addInput requires hash: Buffer | string; and index: number; as attributes
  and can also include any attributes that are used in updateInput method.
  addOutput requires script: Buffer; and value: number; and likewise can include
  data for updateOutput.
  For a list of what attributes should be what types. Check the bip174 library.
  Also, check the integration tests for some examples of usage.
Signer: There are a few methods. signAllInputs and signAllInputsAsync, which will search all input
  information for your pubkey or pubkeyhash, and only sign inputs where it finds
  your info. Or you can explicitly sign a specific input with signInput and
  signInputAsync. For the async methods you can create a SignerAsync object
  and use something like a hardware wallet to sign with. (You must implement this)
Combiner: psbts can be combined easily with `psbt.combine(psbt2, psbt3, psbt4 ...)`
  the psbt calling combine will always have precedence when a conflict occurs.
  Combine checks if the internal bitcoin transaction is the same, so be sure that
  all sequences, version, locktime, etc. are the same before combining.
Input Finalizer: This role is fairly important. Not only does it need to construct
  the input scriptSigs and witnesses, but it SHOULD verify the signatures etc.
  Before running `psbt.finalizeAllInputs()` please run `psbt.validateSignaturesOfAllInputs()`
  Running any finalize method will delete any data in the input(s) that are no longer
  needed due to the finalized scripts containing the information.
Transaction Extractor: This role will perform some checks before returning a
  Transaction object. Such as fee rate not being larger than maximumFeeRate etc.

## Table of contents

### Constructors

- [constructor](/classes/bitcoin.Psbt.md#constructor)

### Properties

- [\_\_CACHE](/classes/bitcoin.Psbt.md#__cache)
- [data](/classes/bitcoin.Psbt.md#data)
- [inputCount](/classes/bitcoin.Psbt.md#inputcount)
- [locktime](/classes/bitcoin.Psbt.md#locktime)
- [opts](/classes/bitcoin.Psbt.md#opts)
- [txInputs](/classes/bitcoin.Psbt.md#txinputs)
- [txOutputs](/classes/bitcoin.Psbt.md#txoutputs)
- [version](/classes/bitcoin.Psbt.md#version)

### Methods

- [addInput](/classes/bitcoin.Psbt.md#addinput)
- [addInputs](/classes/bitcoin.Psbt.md#addinputs)
- [addOutput](/classes/bitcoin.Psbt.md#addoutput)
- [addOutputs](/classes/bitcoin.Psbt.md#addoutputs)
- [addUnknownKeyValToGlobal](/classes/bitcoin.Psbt.md#addunknownkeyvaltoglobal)
- [addUnknownKeyValToInput](/classes/bitcoin.Psbt.md#addunknownkeyvaltoinput)
- [addUnknownKeyValToOutput](/classes/bitcoin.Psbt.md#addunknownkeyvaltooutput)
- [clearFinalizedInput](/classes/bitcoin.Psbt.md#clearfinalizedinput)
- [clone](/classes/bitcoin.Psbt.md#clone)
- [combine](/classes/bitcoin.Psbt.md#combine)
- [extractTransaction](/classes/bitcoin.Psbt.md#extracttransaction)
- [finalizeAllInputs](/classes/bitcoin.Psbt.md#finalizeallinputs)
- [finalizeInput](/classes/bitcoin.Psbt.md#finalizeinput)
- [getFee](/classes/bitcoin.Psbt.md#getfee)
- [getFeeRate](/classes/bitcoin.Psbt.md#getfeerate)
- [getInputType](/classes/bitcoin.Psbt.md#getinputtype)
- [inputHasHDKey](/classes/bitcoin.Psbt.md#inputhashdkey)
- [inputHasPubkey](/classes/bitcoin.Psbt.md#inputhaspubkey)
- [outputHasHDKey](/classes/bitcoin.Psbt.md#outputhashdkey)
- [outputHasPubkey](/classes/bitcoin.Psbt.md#outputhaspubkey)
- [setInputSequence](/classes/bitcoin.Psbt.md#setinputsequence)
- [setLocktime](/classes/bitcoin.Psbt.md#setlocktime)
- [setMaximumFeeRate](/classes/bitcoin.Psbt.md#setmaximumfeerate)
- [setVersion](/classes/bitcoin.Psbt.md#setversion)
- [signAllInputs](/classes/bitcoin.Psbt.md#signallinputs)
- [signAllInputsAsync](/classes/bitcoin.Psbt.md#signallinputsasync)
- [signAllInputsHD](/classes/bitcoin.Psbt.md#signallinputshd)
- [signAllInputsHDAsync](/classes/bitcoin.Psbt.md#signallinputshdasync)
- [signInput](/classes/bitcoin.Psbt.md#signinput)
- [signInputAsync](/classes/bitcoin.Psbt.md#signinputasync)
- [signInputHD](/classes/bitcoin.Psbt.md#signinputhd)
- [signInputHDAsync](/classes/bitcoin.Psbt.md#signinputhdasync)
- [toBase64](/classes/bitcoin.Psbt.md#tobase64)
- [toBuffer](/classes/bitcoin.Psbt.md#tobuffer)
- [toHex](/classes/bitcoin.Psbt.md#tohex)
- [updateGlobal](/classes/bitcoin.Psbt.md#updateglobal)
- [updateInput](/classes/bitcoin.Psbt.md#updateinput)
- [updateOutput](/classes/bitcoin.Psbt.md#updateoutput)
- [validateSignaturesOfAllInputs](/classes/bitcoin.Psbt.md#validatesignaturesofallinputs)
- [validateSignaturesOfInput](/classes/bitcoin.Psbt.md#validatesignaturesofinput)
- [fromBase64](/classes/bitcoin.Psbt.md#frombase64)
- [fromBuffer](/classes/bitcoin.Psbt.md#frombuffer)
- [fromHex](/classes/bitcoin.Psbt.md#fromhex)

## Constructors

### <a id="constructor" name="constructor"></a> constructor

• **new Psbt**(`opts?`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `PsbtOptsOptional` |
| `data?` | `Psbt` |

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:51

## Properties

### <a id="__cache" name="__cache"></a> \_\_CACHE

• `Private` **\_\_CACHE**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:49

___

### <a id="data" name="data"></a> data

• `Readonly` **data**: `Psbt`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:45

___

### <a id="inputcount" name="inputcount"></a> inputCount

• `Readonly` **inputCount**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:52

___

### <a id="locktime" name="locktime"></a> locktime

• **locktime**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:54

___

### <a id="opts" name="opts"></a> opts

• `Private` **opts**: `any`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:50

___

### <a id="txinputs" name="txinputs"></a> txInputs

• `Readonly` **txInputs**: [`PsbtTxInput`](/interfaces/bitcoin.PsbtTxInput.md)[]

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:55

___

### <a id="txoutputs" name="txoutputs"></a> txOutputs

• `Readonly` **txOutputs**: [`PsbtTxOutput`](/interfaces/bitcoin.PsbtTxOutput.md)[]

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:56

___

### <a id="version" name="version"></a> version

• **version**: `number`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:53

## Methods

### <a id="addinput" name="addinput"></a> addInput

▸ **addInput**(`inputData`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputData` | `PsbtInputExtended` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:64

___

### <a id="addinputs" name="addinputs"></a> addInputs

▸ **addInputs**(`inputDatas`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputDatas` | `PsbtInputExtended`[] |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:63

___

### <a id="addoutput" name="addoutput"></a> addOutput

▸ **addOutput**(`outputData`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputData` | `PsbtOutputExtended` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:66

___

### <a id="addoutputs" name="addoutputs"></a> addOutputs

▸ **addOutputs**(`outputDatas`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputDatas` | `PsbtOutputExtended`[] |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:65

___

### <a id="addunknownkeyvaltoglobal" name="addunknownkeyvaltoglobal"></a> addUnknownKeyValToGlobal

▸ **addUnknownKeyValToGlobal**(`keyVal`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyVal` | `KeyValue` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:93

___

### <a id="addunknownkeyvaltoinput" name="addunknownkeyvaltoinput"></a> addUnknownKeyValToInput

▸ **addUnknownKeyValToInput**(`inputIndex`, `keyVal`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `keyVal` | `KeyValue` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:94

___

### <a id="addunknownkeyvaltooutput" name="addunknownkeyvaltooutput"></a> addUnknownKeyValToOutput

▸ **addUnknownKeyValToOutput**(`outputIndex`, `keyVal`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `keyVal` | `KeyValue` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:95

___

### <a id="clearfinalizedinput" name="clearfinalizedinput"></a> clearFinalizedInput

▸ **clearFinalizedInput**(`inputIndex`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:96

___

### <a id="clone" name="clone"></a> clone

▸ **clone**(): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:58

___

### <a id="combine" name="combine"></a> combine

▸ **combine**(...`those`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...those` | [`Psbt`](/classes/bitcoin.Psbt.md)[] |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:57

___

### <a id="extracttransaction" name="extracttransaction"></a> extractTransaction

▸ **extractTransaction**(`disableFeeCheck?`): [`Transaction`](/classes/bitcoin.Transaction.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `disableFeeCheck?` | `boolean` |

#### Returns

[`Transaction`](/classes/bitcoin.Transaction.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:67

___

### <a id="finalizeallinputs" name="finalizeallinputs"></a> finalizeAllInputs

▸ **finalizeAllInputs**(): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:70

___

### <a id="finalizeinput" name="finalizeinput"></a> finalizeInput

▸ **finalizeInput**(`inputIndex`, `finalScriptsFunc?`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `finalScriptsFunc?` | `FinalScriptsFunc` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:71

___

### <a id="getfee" name="getfee"></a> getFee

▸ **getFee**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:69

___

### <a id="getfeerate" name="getfeerate"></a> getFeeRate

▸ **getFeeRate**(): `number`

#### Returns

`number`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:68

___

### <a id="getinputtype" name="getinputtype"></a> getInputType

▸ **getInputType**(`inputIndex`): `AllScriptType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |

#### Returns

`AllScriptType`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:72

___

### <a id="inputhashdkey" name="inputhashdkey"></a> inputHasHDKey

▸ **inputHasHDKey**(`inputIndex`, `root`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `root` | `HDSigner` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:74

___

### <a id="inputhaspubkey" name="inputhaspubkey"></a> inputHasPubkey

▸ **inputHasPubkey**(`inputIndex`, `pubkey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `pubkey` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:73

___

### <a id="outputhashdkey" name="outputhashdkey"></a> outputHasHDKey

▸ **outputHasHDKey**(`outputIndex`, `root`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `root` | `HDSigner` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:76

___

### <a id="outputhaspubkey" name="outputhaspubkey"></a> outputHasPubkey

▸ **outputHasPubkey**(`outputIndex`, `pubkey`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `pubkey` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:75

___

### <a id="setinputsequence" name="setinputsequence"></a> setInputSequence

▸ **setInputSequence**(`inputIndex`, `sequence`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `sequence` | `number` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:62

___

### <a id="setlocktime" name="setlocktime"></a> setLocktime

▸ **setLocktime**(`locktime`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `locktime` | `number` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:61

___

### <a id="setmaximumfeerate" name="setmaximumfeerate"></a> setMaximumFeeRate

▸ **setMaximumFeeRate**(`satoshiPerByte`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `satoshiPerByte` | `number` |

#### Returns

`void`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:59

___

### <a id="setversion" name="setversion"></a> setVersion

▸ **setVersion**(`version`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `version` | `number` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:60

___

### <a id="signallinputs" name="signallinputs"></a> signAllInputs

▸ **signAllInputs**(`keyPair`, `sighashTypes?`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | [`Signer`](/interfaces/bitcoin.ECPair.Signer.md) |
| `sighashTypes?` | `number`[] |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:83

___

### <a id="signallinputsasync" name="signallinputsasync"></a> signAllInputsAsync

▸ **signAllInputsAsync**(`keyPair`, `sighashTypes?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | [`Signer`](/interfaces/bitcoin.ECPair.Signer.md) \| [`SignerAsync`](/interfaces/bitcoin.ECPair.SignerAsync.md) |
| `sighashTypes?` | `number`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:84

___

### <a id="signallinputshd" name="signallinputshd"></a> signAllInputsHD

▸ **signAllInputsHD**(`hdKeyPair`, `sighashTypes?`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hdKeyPair` | `HDSigner` |
| `sighashTypes?` | `number`[] |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:79

___

### <a id="signallinputshdasync" name="signallinputshdasync"></a> signAllInputsHDAsync

▸ **signAllInputsHDAsync**(`hdKeyPair`, `sighashTypes?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hdKeyPair` | `HDSigner` \| `HDSignerAsync` |
| `sighashTypes?` | `number`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:80

___

### <a id="signinput" name="signinput"></a> signInput

▸ **signInput**(`inputIndex`, `keyPair`, `sighashTypes?`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `keyPair` | [`Signer`](/interfaces/bitcoin.ECPair.Signer.md) |
| `sighashTypes?` | `number`[] |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:85

___

### <a id="signinputasync" name="signinputasync"></a> signInputAsync

▸ **signInputAsync**(`inputIndex`, `keyPair`, `sighashTypes?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `keyPair` | [`Signer`](/interfaces/bitcoin.ECPair.Signer.md) \| [`SignerAsync`](/interfaces/bitcoin.ECPair.SignerAsync.md) |
| `sighashTypes?` | `number`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:86

___

### <a id="signinputhd" name="signinputhd"></a> signInputHD

▸ **signInputHD**(`inputIndex`, `hdKeyPair`, `sighashTypes?`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `hdKeyPair` | `HDSigner` |
| `sighashTypes?` | `number`[] |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:81

___

### <a id="signinputhdasync" name="signinputhdasync"></a> signInputHDAsync

▸ **signInputHDAsync**(`inputIndex`, `hdKeyPair`, `sighashTypes?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `hdKeyPair` | `HDSigner` \| `HDSignerAsync` |
| `sighashTypes?` | `number`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:82

___

### <a id="tobase64" name="tobase64"></a> toBase64

▸ **toBase64**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:89

___

### <a id="tobuffer" name="tobuffer"></a> toBuffer

▸ **toBuffer**(): `Buffer`

#### Returns

`Buffer`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:87

___

### <a id="tohex" name="tohex"></a> toHex

▸ **toHex**(): `string`

#### Returns

`string`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:88

___

### <a id="updateglobal" name="updateglobal"></a> updateGlobal

▸ **updateGlobal**(`updateData`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `updateData` | `PsbtGlobalUpdate` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:90

___

### <a id="updateinput" name="updateinput"></a> updateInput

▸ **updateInput**(`inputIndex`, `updateData`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `updateData` | `PsbtInputUpdate` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:91

___

### <a id="updateoutput" name="updateoutput"></a> updateOutput

▸ **updateOutput**(`outputIndex`, `updateData`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputIndex` | `number` |
| `updateData` | `PsbtOutputUpdate` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:92

___

### <a id="validatesignaturesofallinputs" name="validatesignaturesofallinputs"></a> validateSignaturesOfAllInputs

▸ **validateSignaturesOfAllInputs**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:77

___

### <a id="validatesignaturesofinput" name="validatesignaturesofinput"></a> validateSignaturesOfInput

▸ **validateSignaturesOfInput**(`inputIndex`, `pubkey?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inputIndex` | `number` |
| `pubkey?` | `Buffer` |

#### Returns

`boolean`

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:78

___

### <a id="frombase64" name="frombase64"></a> fromBase64

▸ `Static` **fromBase64**(`data`, `opts?`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `opts?` | `PsbtOptsOptional` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:46

___

### <a id="frombuffer" name="frombuffer"></a> fromBuffer

▸ `Static` **fromBuffer**(`buffer`, `opts?`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffer` | `Buffer` |
| `opts?` | `PsbtOptsOptional` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:48

___

### <a id="fromhex" name="fromhex"></a> fromHex

▸ `Static` **fromHex**(`data`, `opts?`): [`Psbt`](/classes/bitcoin.Psbt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `opts?` | `PsbtOptsOptional` |

#### Returns

[`Psbt`](/classes/bitcoin.Psbt.md)

#### Defined in

node_modules/bitcoinjs-lib/types/psbt.d.ts:47
