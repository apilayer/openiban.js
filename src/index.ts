import { ValidationResult } from './types';
import { get } from 'openiban_http';

export interface OpenibanOptions {
  getBIC?: boolean;
  validateBankCode?: boolean;
}

const defaultOptions = {
  getBIC: true,
  validateBankCode: true
}

export function validate(iban: string, opts: OpenibanOptions = defaultOptions): Promise<ValidationResult> {
  const optionsString =
    `?getBIC=${opts.getBIC || 'false'}&validateBankCode=${opts.validateBankCode || 'false'}`;
  const url = '/validate/' + iban + optionsString;

  return get(url)
    .then((response) => {
      return response as ValidationResult;
    })
    .catch((err) => {
      return err;
    });
}

