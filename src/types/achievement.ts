export interface Achievement {
  id: number;

  title: string;
  organization: string;
  conference: string;
  year: string;

  description: string;

  certificateImage: string;
  paperLink?: string;
}