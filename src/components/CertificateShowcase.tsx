import { awardCertificates, learningCertificates } from "@/data/certificates";
import { CertificateArchive } from "./CertificateArchive";

export function CertificateShowcase() {
  return <section className="home-certificates" id="certificates" aria-labelledby="certificates-title"><div className="container">
    <header className="certificates-heading"><div><p className="eyebrow">Document archive / 2024–2026</p><h2 id="certificates-title">A record, in paper.</h2></div><p>Selected original certificates from school, science, creative work, and service. Browse the shelf, then open a document to read its full scan.</p></header>
    <CertificateArchive id="recognition-archive" label="Recognition & service" documents={awardCertificates} />
    <details className="certificate-learning"><summary>Laboratory & learning records <span>{learningCertificates.length} documents <span className="archive-expand" aria-hidden="true">+</span></span></summary><CertificateArchive id="learning-archive" label="Training & exchange" documents={learningCertificates} /></details>
  </div></section>;
}
