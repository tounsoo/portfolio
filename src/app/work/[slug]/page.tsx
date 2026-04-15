import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getMdxContent, getFrontmatter } from "@/lib/mdx";
import CaseStudyHeader from "@/components/work/CaseStudyHeader";
import ProseWrapper from "@/components/ui/ProseWrapper";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const frontmatter = getFrontmatter(slug);
    return { title: frontmatter.title, description: frontmatter.tagline };
  } catch {
    return {};
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const { frontmatter, Content } = await getMdxContent(slug);
    return (
      <main>
        <CaseStudyHeader frontmatter={frontmatter} />
        <ProseWrapper>
          <Content />
        </ProseWrapper>
      </main>
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.includes("ENOENT")) notFound();
    throw err;
  }
}
