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
        readonly recognised: true;
        readonly displayName: string;
        readonly type: Type;
        readonly format: RegExp;
        readonly startPattern: RegExp;
        /**
         * Formatted as: nnnn nnnn nnnn nnnn
         */
        readonly primaryAccountNumberMaskFormat: string;
        readonly gaps: number[];
        readonly lengths: number[];
        readonly code: {
            readonly name: string;
            readonly length: number[];
        };
    }

    interface UnknownCardType {
        readonly recognised: false;
        readonly displayName: 'Unknown';
        readonly type: 'unknown';
        readonly format: RegExp;
        readonly startPattern: RegExp;
        /**
         * Formatted as: nnnn nnnn nnnn nnnn
         */
        readonly primaryAccountNumberMaskFormat: string;
        readonly gaps: [4, 8, 12, 16];
        readonly lengths: [15, 16, 17, 18, 19];
        readonly code: {
            readonly name: 'CVV';
            readonly length: [3, 4];
        };
    }

    export const unknownCardType: UnknownCardType;

    export function predictPaymentNetworkForAccountNumber(primaryAccountNumber: string): CardType | UnknownCardType;
    export function isValidCreditCard(primaryAccountNumber: string): boolean;
}
