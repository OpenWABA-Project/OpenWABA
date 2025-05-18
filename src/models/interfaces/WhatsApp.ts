export enum WhatsAppAccountStatus {
  PENDING = 'PENDING',
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  SUSPENDED = 'SUSPENDED',
}

export interface WhatsAppAccount {
  id: string;
  companyId: string;
  name: string;
  businessId: string;
  wabaBizId: string;
  wabaBizName: string;
  accessToken: string;
  refreshToken?: string;
  tokenExpiresAt: Date;
  status: WhatsAppAccountStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface PhoneNumber {
  id: string;
  whatsAppAccountId: string;
  companyId: string;
  phoneNumber: string;
  displayName: string;
  verified: boolean;
  qualityRating?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum MessageStatus {
  QUEUED = 'QUEUED',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  READ = 'READ',
  FAILED = 'FAILED',
}

export enum MessageType {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
  DOCUMENT = 'DOCUMENT',
  AUDIO = 'AUDIO',
  LOCATION = 'LOCATION',
  TEMPLATE = 'TEMPLATE',
  CONTACT = 'CONTACT',
}

export interface Message {
  id: string;
  phoneNumberId: string;
  companyId: string;
  recipientPhone: string;
  messageType: MessageType;
  content: string;
  mediaUrl?: string;
  templateName?: string;
  templateParams?: Record<string, string>;
  status: MessageStatus;
  whatsAppMessageId?: string;
  sentByUserId?: string;
  sentAt?: Date;
  deliveredAt?: Date;
  readAt?: Date;
  failureReason?: string;
  createdAt: Date;
  updatedAt: Date;
}
