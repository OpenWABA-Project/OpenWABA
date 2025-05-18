export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',   // Agency-level admin
  ADMIN = 'ADMIN',               // Company-level admin
  USER = 'USER',                 // Regular user
}

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  agencyId?: string;            // Only for SUPER_ADMIN
  companyId?: string;           // For ADMIN and USER
  phoneNumber?: string;
  avatarUrl?: string;
  isActive: boolean;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPermission {
  id: string;
  userId: string;
  canManageUsers: boolean;
  canManagePhoneNumbers: boolean;
  canSendMessages: boolean;
  canCreateTemplates: boolean;
  canViewReports: boolean;
  canConfigureWebhooks: boolean;
  canAccessSettings: boolean;
  createdAt: Date;
  updatedAt: Date;
}
