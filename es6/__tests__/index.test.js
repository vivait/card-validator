import {isValidCreditCard, predictPaymentNetworkForAccountNumber, unknownCardType} from "../index";
import {DEFAULT_CARD_FORMAT} from "react-payment-inputs/lib/utils/cardTypes";

const range = (min, max) => new Array(...Array(max - min).keys()).map(num => num + min);

describe('card-validator', () => {
    describe('predictPaymentNetworkForAccountNumber()', () => {
        it.each(
            [
                '371449635398431',
                '378734493671000',
                '348734493671000',
            ]
        )('will support a whole American Express (%s)', (primaryAccountNumber) => {
            expect(predictPaymentNetworkForAccountNumber(primaryAccountNumber)).toEqual(
                {
                    recognised: true,
                    displayName: 'American Express',
                    type: 'amex',
                    format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
                    startPattern: /^3[47]/,
                    mask: 'nnnn nnnnnn nnnnn',
                    gaps: [4, 10],
                    lengths: [15],
                    code: {
                        name: 'CID',
                        length: [4],
                    },
                },
            );
        });

        it.each(
            [
                '4222222222222',
                '4012888888881881',
                '4111111111111111',
            ]
        )('will support a whole Visa (%s)', (primaryAccountNumber) => {
            expect(predictPaymentNetworkForAccountNumber(primaryAccountNumber)).toEqual(
                {
                    recognised: true,
                    displayName: 'Visa',
                    type: 'visa',
                    format: DEFAULT_CARD_FORMAT,
                    startPattern: /^4/,
                    gaps: [4, 8, 12],
                    lengths: [19, 18, 16],
                    mask: "nnnn nnnn nnnn nnnnnnn",
                    code: {
                        name: 'CVV',
                        length: [3],
                    },
                },
            );
        });

        it.each(
            [
                ...range(51, 55).map(num => num + '55555555554444'),
                ...range(23, 27).map(num => num + '55555555554444'),
            ]
        )('will support a whole MasterCard (%s)', (primaryAccountNumber) => {
            expect(predictPaymentNetworkForAccountNumber(primaryAccountNumber)).toEqual(
                {
                    recognised: true,
                    displayName: 'Mastercard',
                    type: 'mastercard',
                    format: DEFAULT_CARD_FORMAT,
                    startPattern: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
                    gaps: [4, 8, 12],
                    lengths: [16],
                    mask: 'nnnn nnnn nnnn nnnn',
                    code: {
                        name: 'CVC',
                        length: [3],
                    },
                }
            );
        });

        it.each(
            [
                '3522222222222',
                '35233',
            ],
        )('will support whole JCB (%s)', (primaryAccountNumber) => {
            expect(predictPaymentNetworkForAccountNumber(primaryAccountNumber)).toEqual(
                {
                    recognised: true,
                    displayName: 'JCB',
                    type: 'jcb',
                    format: DEFAULT_CARD_FORMAT,
                    startPattern: /^35/,
                    gaps: [4, 8, 12],
                    lengths: [
                        19,
                        18,
                        17,
                        16
                    ],
                    mask: 'nnnn nnnn nnnn nnnnnnn',
                    code: {
                        name: 'CVV',
                        length: [3],
                    },
                },
            );
        });

        it.each(
            [
                '6011111111111117',
                '6511000990139424',
                ...range(644, 649).map(num => num + '5555555554444'),
            ],
        )('will support Discover (%s)', (primaryAccountNumber) => {
            expect(predictPaymentNetworkForAccountNumber(primaryAccountNumber)).toEqual(
                {
                    recognised: true,
                    displayName: 'Discover',
                    type: 'discover',
                    format: DEFAULT_CARD_FORMAT,
                    startPattern: /^(6011|65|64[4-9]|622)/,
                    gaps: [4, 8, 12],
                    lengths: [
                        19,
                        16
                    ],
                    mask: "nnnn nnnn nnnn nnnnnnn",
                    code: {
                        name: 'CID',
                        length: [3],
                    },
                },
            );
        });

        it.each(
            [
                ...range(900, 999).map(num => num + '5555555554444'),
            ],
        )('will support Default does not support (%s)', (primaryAccountNumber) => {
            expect(predictPaymentNetworkForAccountNumber(primaryAccountNumber)).toEqual(unknownCardType);
        });


        it.each(
            [
                '501822222222',
                '502022222222',
                '503822222222',
                '630422222222',
                '670322222222',
                '670822222222',
                '675922222222',
            ]
        )('will support whole Maestro (%s)', (primaryAccountNumber) => {
            expect(predictPaymentNetworkForAccountNumber(primaryAccountNumber)).toEqual(
                {
                    recognised: true,
                    displayName: 'Maestro',
                    type: 'maestro',
                    format: DEFAULT_CARD_FORMAT,
                    startPattern: /^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,
                    gaps: [4, 8, 12],
                    lengths: [
                        19,
                        18,
                        17,
                        16,
                        15,
                        14,
                        13,
                        12
                    ],
                    'mask': "nnnn nnnn nnnn nnnnnnn",
                    code: {
                        name: 'CVC',
                        length: [
                            3,
                        ]
                    },
                },
            );
        });
    });

    describe('isValidCreditCard()', () => {
        it.each(
            [
                '4916837596086637',
                '4556 7620 2763 2459',
                '4929780257107780676',
                '6011 2275 5785 9413',
                '5461 9887 0095 6466',
                '6396739552733646'
            ]
        )("will return true for '%s'", (accountNumber) => {
            expect(isValidCreditCard(accountNumber)).toBeTruthy();
        });

        it.each(
            [
                '630422222222',
                '4556 7620 2763 2451',
                '6011 2273 5725 3413',
                '5461 9885 2095 6462',
                '6396719532733644'
            ]
        )("will return false for '%s' because its luhns validation fails", (accountNumber) => {
            expect(isValidCreditCard(accountNumber)).toBeFalsy();
        });

        it.each(
            [
                '49168375960866370000',
                '4556 7620 2763 24590000',
                '6011 2275 5785 941300',
                '5461 9887 0095 646600',
                '63967395527336460000'
            ]
        )("will return false for '%s' because it's too long", (accountNumber) => {
            expect(isValidCreditCard(accountNumber)).toBeFalsy();
        });

        it.each(
            [
                '49168375960',
                '6011 2275 57',
                '5461 9887 00',
            ]
        )("will return false for '%s' because it's too short", (accountNumber) => {
            expect(isValidCreditCard(accountNumber)).toBeFalsy();
        });
    });
});
