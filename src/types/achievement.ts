export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  description: string;
  icon: React.ComponentType<{
    className?: string;
    size?: number | string;
  }>;
}
