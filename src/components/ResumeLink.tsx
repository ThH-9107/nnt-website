import type { ComponentProps } from "react";
import { profile } from "@/data/portfolio";

export function ResumeLink({ children, ...props }: Omit<ComponentProps<"a">, "href" | "target" | "rel" | "download">) {
  const href = profile.resumePdf ?? profile.resumeDocx;
  const external = /^https?:\/\//.test(href);
  return <a {...props} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} download={external ? undefined : true}>{children}</a>;
}
