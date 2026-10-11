import Link from "next/link";

const navigation = [
  { label: "Research", href: "/#research" },
  { label: "Leadership", href: "/#leadership" },
  { label: "Creative", href: "/creative" },
  { label: "About", href: "/#about" },
  { label: "CV", href: "/#cv" },
];

export function SiteHeader() {
  return <header className="site-header"><div className="container header-inner">
    <Link className="wordmark" href="/" aria-label="Nguyen Ngoc Thanh, home">N<span>.</span>NT</Link>
    <nav className="site-nav" aria-label="Main navigation">
      {navigation.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
    </nav>
  </div></header>;
}
