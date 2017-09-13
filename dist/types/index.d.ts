import { ValidationResult } from './types';
export interface OpenibanOptions {
    getBIC?: boolean;
    validateBankCode?: boolean;
}
export declare function validate(iban: string, opts?: OpenibanOptions): Promise<ValidationResult>;
