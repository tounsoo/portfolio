import type { MDXComponents } from "mdx/types";
import MetricCallout from "@/components/work/MetricCallout";
import Annotation from "@/components/work/Annotation";
import TokenTable from "@/components/work/TokenTable";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    MetricCallout,
    Annotation,
    TokenTable,
    ...components,
  };
}
