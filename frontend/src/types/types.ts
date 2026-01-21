export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

export interface StatItem {
  val: string;
  lab: string;
}

export interface Project {
  id: string;
  title: string;
  status: string;
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