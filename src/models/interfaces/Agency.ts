export interface Agency {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  domains: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AgencySettings {
  id: string;
  agencyId: string;
  allowUserRegistration: boolean;
  defaultTemplateApproval: boolean;
  maxUsersPerCompany: number;
  maxPhoneNumbersPerCompany: number;
  customCSS?: string;
  customJS?: string;
  createdAt: Date;
  updatedAt: Date;
}
