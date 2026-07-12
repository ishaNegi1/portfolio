export interface Skill {
  name: string;
  icon: React.ComponentType<{
    className?: string;
    size?: number | string;
  }>;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}