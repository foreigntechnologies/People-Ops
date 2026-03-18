export interface JobPosition {
  id: string;
  title: string;
  description: string;
  workModel: string;
  location: string;
  techStack: string;
  area: string;
  companyId: string;
  createdAt: string;
}

export interface JobFilters {
  search?: string;
  workModel?: string;
  location?: string;
  techStack?: string;
  area?: string;
}
