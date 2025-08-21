export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  tags: string[];
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship' | 'Remote';
  postedAt: string; // e.g., "2025-08-20"
  logoUrl?: string;
};
