import Link from "next/link";
import { profile } from "@/data/portfolio";

const navigation = [
  { label: "Research", href: "/#research" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Creative", href: "/creative" },
  { label: "About", href: "/#about" },
  { label: "CV", href: "/#cv" },
];

export function SiteHeader() {
  return <header className="site-header"><div className="container header-inner">
    <Link className="wordmark" href="/" aria-label="Nguyen Ngoc Thanh, home">N<span>Thanh</span></Link>
    <nav className="site-nav" aria-label="Main navigation">
      {navigation.map((item) => item.label === "CV"
        ? <a key={item.label} href={profile.resumePdf ?? profile.resumeDocx} download aria-label={`Download résumé (${profile.resumePdf ? "PDF" : "Word document"})`}>{item.label}</a>
        : <Link key={item.label} href={item.href} scroll={item.href !== "/creative"}>{item.label}</Link>)}
    </nav>
  </div></header>;
}
