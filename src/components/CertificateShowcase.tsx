import Image from "next/image";
import { awardCertificates, learningCertificates, type CertificateDocument } from "@/data/certificates";

function CertificateCard({ document }: { document: CertificateDocument }) {
  return <li className="certificate-card"><a href={document.pdf} target="_blank" rel="noopener noreferrer">
    <div className="certificate-preview"><Image src={document.thumbnail} alt={`${document.title} certificate issued to Nguyen Ngoc Thanh`} fill quality={90} sizes="(max-width: 620px) 90vw, (max-width: 1000px) 45vw, 30vw" style={{ objectFit: "contain" }} /></div>
    <div className="certificate-copy"><span className="certificate-period">{document.period}</span><h3>{document.title}</h3><p>{document.detail}</p><span className="certificate-open">View certificate <span aria-hidden="true">↗</span></span></div>
  </a></li>;
}

export function CertificateShowcase() {
  return <section className="home-certificates" id="certificates" aria-labelledby="certificates-title"><div className="container">
    <header className="certificates-heading"><div><p className="eyebrow">Selected certificates</p><h2 id="certificates-title">The record behind the work.</h2></div><p>A selection of original certificates across science, academic work, creative collaboration, and service. Open a scan to read the full document.</p></header>
    <ul className="certificate-grid">{awardCertificates.map(document => <CertificateCard key={document.id} document={document} />)}</ul>
    <details className="certificate-learning"><summary>Laboratory & learning certificates <span>{learningCertificates.length} documents <span aria-hidden="true">+</span></span></summary><ul className="certificate-grid">{learningCertificates.map(document => <CertificateCard key={document.id} document={document} />)}</ul></details>
  </div></section>;
}
