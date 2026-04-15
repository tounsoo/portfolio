import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getMdxContent } from "@/lib/mdx";
import CaseStudyHeader from "@/components/work/CaseStudyHeader";
import ProseWrapper from "@/components/ui/ProseWrapper";
import MetricCallout from "@/components/work/MetricCallout";
import Annotation from "@/components/work/Annotation";
import TokenTable from "@/components/work/TokenTable";

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
    const { frontmatter } = await getMdxContent(slug);
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

  let data: Awaited<ReturnType<typeof getMdxContent>> | null = null;
  try {
    data = await getMdxContent(slug);
  } catch {
    notFound();
  }

  if (!data) notFound();

  const { frontmatter, Content } = data;

  return (
    <main>
      <CaseStudyHeader frontmatter={frontmatter} />
      <ProseWrapper>
        <Content
          components={{
            MetricCallout,
            Annotation,
            TokenTable,
          }}
        />
      </ProseWrapper>
    </main>
  );
}
