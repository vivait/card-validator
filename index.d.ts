declare module 'vivait-card-validator' {
    type Type =
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'dinersclub'
        | 'discover'
        | 'jcb'
        | 'unionpay'
        | 'maestro'
        | 'elo'
        | 'hipercard'
        | 'unknown';

    interface CardType {
        recognised: true;
        displayName: string;
        type: Type;
        format: RegExp;
        startPattern: RegExp;
        gaps: number[];
        lengths: number[];
        code: {
            name: string;
            length: number[];
        };
    }

    interface UnknownCardType {
        recognised: false;
        displayName: 'Unknown';
        type: 'unknown';
        format: RegExp;
        startPattern: RegExp;
        gaps: [4, 8, 12, 16];
        lengths: [15, 16, 17, 18, 19];
        code: {
            name: 'CVV';
            length: [3, 4];
        };
    }

    export const unknownCardType: UnknownCardType;

    export function predictPaymentNetworkForAccountNumber(primaryAccountNumber: string): CardType | UnknownCardType;
    export function isValidCreditCard(primaryAccountNumber: string): boolean;
}
