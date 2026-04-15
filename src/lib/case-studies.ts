import type { CaseStudy } from "@/types/case-study";

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "building-meridian",
    title: "Building Meridian",
    tagline: "A design system built from zero at a Series B fintech",
    tags: ["Foundations", "Tokens", "Component Library"],
    year: "2023",
    role: "Design Systems Lead",
    coverAccent: "var(--color-accent-blue)",
  },
  {
    slug: "scaling-forma",
    title: "Scaling Forma",
    tagline: "Governance & contribution models at scale",
    tags: ["Governance", "Process", "Multi-team"],
    year: "2024",
    role: "Design Systems Lead",
    coverAccent: "var(--color-accent-green)",
  },
  {
    slug: "token-migration-dusk",
    title: "Token Migration at Dusk",
    tagline: "Semantic tokens and multi-brand theming from a legacy codebase",
    tags: ["Tokens", "Migration", "Theming"],
    year: "2024",
    role: "Senior Design Systems Designer",
    coverAccent: "var(--color-accent-amber)",
  },
];

export function getCaseStudyList(): CaseStudy[] {
  return CASE_STUDIES;
}
