import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ComponentType } from "react";
import type { CaseStudyFrontmatter } from "@/types/case-study";

const CONTENT_DIR = path.join(process.cwd(), "src/content/case-studies");

export function getAllSlugs(): string[] {
  const files = fs.readdirSync(CONTENT_DIR);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export async function getMdxContent(slug: string): Promise<{
  frontmatter: CaseStudyFrontmatter;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Content: ComponentType<{ components?: Record<string, ComponentType<any>> }>;
}> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  const frontmatter = data as CaseStudyFrontmatter;

  const mod = await import(`@/content/case-studies/${slug}.mdx`);
  const Content = mod.default;

  return { frontmatter, Content };
}
