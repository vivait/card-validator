# vivait-card-validator
A simple library built around https://github.com/medipass/react-payment-inputs that exposes its validation in more convienent APIs.

> :warning: This library is still in alpha stage development and isn't stable.

## Install
`yarn add https://github.com/vivait/card-validator`

## Usage

### predictPaymentNetworkForAccountNumber(primaryAccountNumber: string): CardType | UnknownCardType
Predict a card type and other relevant information based on its primary account number.

#### Result (CardType | UnknownCardType):
| Property | type | description |
| --- | ---|---|
|`recognised`| `boolean`| If the type of card was matched against the database. |
|`displayName`| `string`| A friendly name for the payment network. |
|`type`| `'visa' \| 'mastercard' \| 'amex' \| 'dinersclub'\| 'discover' \| 'jcb' \| 'unionpay' \| 'maestro' \| 'elo' \| 'hipercard' \| 'unknown'`| A computer name for the payment network. |
|`format`| RegExp| The format of the primary account number. |
|startPattern| RegExp| The format for the first digits to|
|gaps| number[]| Places in the primary account number where there are spaces to assist with copying from the card. |
|lengths| number[]| Valid lengths for the primary account number. |
|code.name| string| Name of the payment network's security number. |
|code.length| number[]| Valid lengths for the network's security number. |

### isValidCreditCard(primaryAccountNumber: string): boolean
Checks if the entire primay account number is valid, checks using the luhns algorithm and the length of the card number.
