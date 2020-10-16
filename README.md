# card-validator

## Install
`yarn add https://github.com/vivait/card-validator`

## Usage

### predictPaymentNetworkForAccountNumber(primaryAccountNumber: string): CardType | UnknownCardType
Predict a card type and other relevant information based on its primary account number.

#### Result:
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
