export interface OpenibanResponse {
  valid: boolean;
}

export interface CheckResults {
  /**
   * If a validateBankCode was set to true, this is the check result.
   */
  bankCode: boolean;
}
export interface BankData {
  bankCode: string;
  bic: string;
  city: string;
  name: string;
  zip: string;
}
export interface ValidationResult {
  /**
   * True when iban is considered as technically valid.
   */
  valid: boolean;
  /**
   * Messages returned by the openiban.com validation webservice.
   */
  messages: string[];
  /**
   * The original iban that this validation result refers to.
   */
  iban: string;
  /**
   * Contains details about the iban's issuing bank (if available).
   */
  bankData?: BankData;

  checkResults?: CheckResults;
}