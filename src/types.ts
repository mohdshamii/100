/**
 * TypeScript Type Definitions for 100 — AI/ML Curated Library
 */

export type TrackType = 'all' | 'books' | 'papers' | 'datasets' | 'projects' | 'tools' | 'courses' | 'glossary' | 'interview';

export interface BookItem {
  title: string;
  author: string;
  url: string;
  category?: string;
}

export interface PaperItem {
  title: string;
  authors: string;
  year?: string;
  url: string;
  category?: string;
}

export interface DatasetItem {
  name: string;
  url: string;
  category?: string;
}

export interface ProjectItem {
  title: string;
  category?: string;
}

export interface ToolItem {
  name: string;
  url: string;
  category?: string;
}

export interface CourseItem {
  title: string;
  url: string;
  category?: string;
}

export interface BlogItem {
  name: string;
  url: string;
  category?: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
  category?: string;
}

export interface InterviewItem {
  number: number;
  question: string;
  answer: string;
  category?: string;
}

export interface ResourceCategory {
  n: number;
  name: string;
  count: number;
  anchor: string;
  track: TrackType;
  trackLabel: string;
  base: string;
  examples: string[];
  items?: Array<any>;
}

export interface RoadmapStep {
  when: string;
  what: string;
}

export interface AppState {
  theme: 'dark' | 'light';
  searchQuery: string;
  activeTrack: TrackType;
  expandedCategories: Set<string>;
}

