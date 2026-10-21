import Link from "next/link";
import { profile } from "@/data/portfolio";
import { ResumeLink } from "./ResumeLink";

const navigation = [
  { label: "Contact", href: "/#contact" },
  { label: "Portfolio", href: "/#inquiry-map" },
  { label: "CV", href: "/#cv" },
];

export function SiteHeader() {
  return <header className="site-header"><div className="container header-inner">
    <Link className="wordmark" href="/" aria-label="Nguyen Ngoc Thanh, home">N<span>Thanh</span></Link>
    <nav className="site-nav" aria-label="Main navigation">
      {navigation.map((item) => item.label === "CV"
        ? <ResumeLink key={item.label} aria-label={`View résumé (${profile.resumePdf ? "PDF" : "Word document"}) in a new tab`}>{item.label}</ResumeLink>
        : <Link key={item.label} href={item.href}>{item.label}</Link>)}
    </nav>
  </div></header>;
}
