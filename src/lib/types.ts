// You could probably make some of these types not optional, depending on your
// eligibility requirements.
export interface AccountSessionInfo {
  identity: {
    name?: { first_name: string; last_name: string };
    address?: {
      street?: string | null;
      street2?: string | null;
      city?: string | null;
      region?: string | null;
      postal_code?: string | null;
      country?: string | null;
    };
    date_of_birth?: string;
    email?: string;
    phone_number: string;
    ssn_last_4?: string;
  } | null;
  bankName: string;
  accountObjects: Array<{
    acctName: string;
    balance: number | null;
    acctType: string;
    acctSubtype: string | null;
    acctMask: string | null;
  }>;
}
