import Link from "next/link";
import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return <footer className="site-footer" id="contact"><div className="container">
    <div className="footer-main"><div><p className="eyebrow">Contact</p><h2>Let’s exchange ideas.</h2><p>Research questions, collaborations, or a conversation about science education are welcome.</p></div><a className="footer-email" href={`mailto:${profile.email}`}>{profile.email} ↗</a></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Nguyen Ngoc Thanh</span><span>{profile.location}</span><div><Link href="/">Home</Link><a href="#main">Back to top ↑</a>{profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>}{profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}</div></div>
  </div></footer>;
}
