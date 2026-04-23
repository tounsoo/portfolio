export interface CaseStudyFrontmatter {
  title: string;
  tagline: string;
  company: string;
  role: string;
  year: string;
  duration: string;
  tags: string[];
  coverAccent: string;
  status: "published" | "draft";
}

export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  year: string;
  role: string;
  coverAccent: string;
}
