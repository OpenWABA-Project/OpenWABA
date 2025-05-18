export interface Company {
  id: string;
  agencyId: string;
  name: string;
  slug: string;
  logoUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zipCode?: string;
  website?: string;
  email?: string;
  phone?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompanySettings {
  id: string;
  companyId: string;
  whitelabelEnabled: boolean;
  maxUsers: number;
  maxPhoneNumbers: number;
  webhookUrl?: string;
  webhookSecret?: string;
  customDomain?: string;
  customCSS?: string;
  customJS?: string;
  createdAt: Date;
  updatedAt: Date;
}
