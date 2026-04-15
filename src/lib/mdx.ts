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

export function getFrontmatter(slug: string): CaseStudyFrontmatter {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return data as CaseStudyFrontmatter;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MDXModule = { default: ComponentType<any> };

const mdxModuleLoaders: Record<string, () => Promise<MDXModule>> = {
  "building-meridian": () =>
    import("@/content/case-studies/building-meridian.mdx"),
  "scaling-forma": () =>
    import("@/content/case-studies/scaling-forma.mdx"),
  "token-migration-dusk": () =>
    import("@/content/case-studies/token-migration-dusk.mdx"),
};

export async function getMdxContent(slug: string): Promise<{
  frontmatter: CaseStudyFrontmatter;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Content: ComponentType<any>;
}> {
  const loader = mdxModuleLoaders[slug];
  if (!loader) throw new Error(`ENOENT: no MDX file for slug "${slug}"`);

  const [{ default: Content }] = await Promise.all([loader()]);
  const frontmatter = getFrontmatter(slug);

  return { frontmatter, Content };
}
