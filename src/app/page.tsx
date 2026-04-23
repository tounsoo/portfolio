import Hero from "@/components/home/Hero";
import WorkGrid from "@/components/home/WorkGrid";
import AboutTeaser from "@/components/home/AboutTeaser";
import SkillsStrip from "@/components/home/SkillsStrip";
import { getCaseStudyList } from "@/lib/case-studies";

export default function HomePage() {
  const caseStudies = getCaseStudyList();
  return (
    <main>
      <Hero />
      <WorkGrid caseStudies={caseStudies} />
      <AboutTeaser />
      <SkillsStrip />
    </main>
  );
}
