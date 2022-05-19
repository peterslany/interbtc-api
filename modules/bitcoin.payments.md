[@interlay/interbtc-api](/README.md) / [Exports](/modules.md) / [bitcoin](/modules/bitcoin.md) / payments

# Namespace: payments

[bitcoin](/modules/bitcoin.md).payments

## Table of contents

### Interfaces

- [Payment](/interfaces/bitcoin.payments.Payment.md)
- [PaymentOpts](/interfaces/bitcoin.payments.PaymentOpts.md)

### Type aliases

- [PaymentCreator](/modules/bitcoin.payments.md#paymentcreator)
- [PaymentFunction](/modules/bitcoin.payments.md#paymentfunction)
- [Stack](/modules/bitcoin.payments.md#stack)
- [StackElement](/modules/bitcoin.payments.md#stackelement)
- [StackFunction](/modules/bitcoin.payments.md#stackfunction)

### Functions

- [embed](/modules/bitcoin.payments.md#embed)
- [p2ms](/modules/bitcoin.payments.md#p2ms)
- [p2pk](/modules/bitcoin.payments.md#p2pk)
- [p2pkh](/modules/bitcoin.payments.md#p2pkh)
- [p2sh](/modules/bitcoin.payments.md#p2sh)
- [p2wpkh](/modules/bitcoin.payments.md#p2wpkh)
- [p2wsh](/modules/bitcoin.payments.md#p2wsh)

## Type aliases

### <a id="paymentcreator" name="paymentcreator"></a> PaymentCreator

Ƭ **PaymentCreator**: (`a`: [`Payment`](/interfaces/bitcoin.payments.Payment.md), `opts?`: [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md)) => [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Type declaration

▸ (`a`, `opts?`): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Payment`](/interfaces/bitcoin.payments.Payment.md) |
| `opts?` | [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md) |

##### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/index.d.ts:26

___

### <a id="paymentfunction" name="paymentfunction"></a> PaymentFunction

Ƭ **PaymentFunction**: () => [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Type declaration

▸ (): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

##### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/index.d.ts:27

___

### <a id="stack" name="stack"></a> Stack

Ƭ **Stack**: [`StackElement`](/modules/bitcoin.payments.md#stackelement)[]

#### Defined in

node_modules/bitcoinjs-lib/types/payments/index.d.ts:33

___

### <a id="stackelement" name="stackelement"></a> StackElement

Ƭ **StackElement**: `Buffer` \| `number`

#### Defined in

node_modules/bitcoinjs-lib/types/payments/index.d.ts:32

___

### <a id="stackfunction" name="stackfunction"></a> StackFunction

Ƭ **StackFunction**: () => [`Stack`](/modules/bitcoin.payments.md#stack)

#### Type declaration

▸ (): [`Stack`](/modules/bitcoin.payments.md#stack)

##### Returns

[`Stack`](/modules/bitcoin.payments.md#stack)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/index.d.ts:34

## Functions

### <a id="embed" name="embed"></a> embed

▸ **embed**(`a`, `opts?`): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Payment`](/interfaces/bitcoin.payments.Payment.md) |
| `opts?` | [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md) |

#### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/embed.d.ts:2

___

### <a id="p2ms" name="p2ms"></a> p2ms

▸ **p2ms**(`a`, `opts?`): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Payment`](/interfaces/bitcoin.payments.Payment.md) |
| `opts?` | [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md) |

#### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/p2ms.d.ts:2

___

### <a id="p2pk" name="p2pk"></a> p2pk

▸ **p2pk**(`a`, `opts?`): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Payment`](/interfaces/bitcoin.payments.Payment.md) |
| `opts?` | [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md) |

#### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/p2pk.d.ts:2

___

### <a id="p2pkh" name="p2pkh"></a> p2pkh

▸ **p2pkh**(`a`, `opts?`): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Payment`](/interfaces/bitcoin.payments.Payment.md) |
| `opts?` | [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md) |

#### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/p2pkh.d.ts:2

___

### <a id="p2sh" name="p2sh"></a> p2sh

▸ **p2sh**(`a`, `opts?`): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Payment`](/interfaces/bitcoin.payments.Payment.md) |
| `opts?` | [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md) |

#### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/p2sh.d.ts:2

___

### <a id="p2wpkh" name="p2wpkh"></a> p2wpkh

▸ **p2wpkh**(`a`, `opts?`): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Payment`](/interfaces/bitcoin.payments.Payment.md) |
| `opts?` | [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md) |

#### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/p2wpkh.d.ts:2

___

### <a id="p2wsh" name="p2wsh"></a> p2wsh

▸ **p2wsh**(`a`, `opts?`): [`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Payment`](/interfaces/bitcoin.payments.Payment.md) |
| `opts?` | [`PaymentOpts`](/interfaces/bitcoin.payments.PaymentOpts.md) |

#### Returns

[`Payment`](/interfaces/bitcoin.payments.Payment.md)

#### Defined in

node_modules/bitcoinjs-lib/types/payments/p2wsh.d.ts:2
