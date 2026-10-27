type ProjectExternalLinkProps = {
  link: { href: string; label: string };
  className?: string;
};

export function ProjectExternalLink({ link, className = "" }: ProjectExternalLinkProps) {
  return <a className={`project-external-link ${className}`} href={link.href} target="_blank" rel="noopener noreferrer">
    <span>{link.label}</span><span aria-hidden="true">↗</span>
  </a>;
}
