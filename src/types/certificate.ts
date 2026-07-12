export interface Certificate {
  id: number;

  title: string;

  issuer: string;

  issueDate: string;

  credentialId?: string;

  image: string;

  credentialUrl?: string;
}