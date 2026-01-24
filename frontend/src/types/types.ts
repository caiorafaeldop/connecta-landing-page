export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatItem {
  val: string;
  lab: string;
}

export type ProjectType = 'Interno' | 'Extensao' | 'Empresa' | 'Pesquisa' | 'Outro';

export interface Project {
  id: string;
  title: string;
  status: string;
  type: ProjectType;
  coverUrl: string;
  description: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  type: string;
}

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}
