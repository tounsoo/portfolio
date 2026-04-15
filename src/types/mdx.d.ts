import type { ComponentType } from "react";

declare module "*.mdx" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDXComponent: ComponentType<{
    components?: Record<string, ComponentType<any>>;
  }>;
  export default MDXComponent;
}
