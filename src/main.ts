import {get} from 'openiban_http';

const baseUrl = 'https://openiban.com';

export interface ValidationResult {
  valid: boolean;
}

function validate(iban: string): Promise<ValidationResult> {
  return get(baseUrl + '/validate/' + iban)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return {valid: false};
    });
}

export default {
  validate: validate
}