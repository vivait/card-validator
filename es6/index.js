import {CARD_TYPES, DEFAULT_CARD_FORMAT} from "react-payment-inputs/lib/utils/cardTypes";
import {validateLuhn} from "react-payment-inputs/lib/utils/validator";

export const unknownCardType = {
    recognised: false,
    displayName: 'Unknown',
    type: 'unknown',
    format: DEFAULT_CARD_FORMAT,
    startPattern: /^$/,
    gaps: [4, 8, 12, 16],
    lengths: [15, 16, 17, 18, 19],
    code: {
        name: 'CVV',
        length: [3, 4],
    },
};

export function predictPaymentNetworkForAccountNumber(primaryAccountNumber) {
    const matching = CARD_TYPES.filter(({startPattern}) => startPattern.test(primaryAccountNumber)).values();
    const matchedArray = new Array(...matching);

    if (matchedArray.length === 1) {
        const {displayName, type, format, startPattern, gaps, lengths, code} = matchedArray[0];

        return {
            recognised: true,
            displayName,
            type,
            format,
            startPattern,
            gaps,
            lengths,
            code: {
                name: code.name,
                length: [code.length],
            },
        };
    }

    return unknownCardType;
}

export function isValidCreditCard(primaryAccountNumber) {
    const formatted = primaryAccountNumber.replace(/\s/g, '');

    const isLuhnValid = validateLuhn(formatted);
    const lengthValid = predictPaymentNetworkForAccountNumber(primaryAccountNumber).lengths.includes(formatted.length);

    return isLuhnValid && lengthValid;
}
