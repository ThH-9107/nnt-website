import { awardCertificates, learningCertificates, type CertificateDocument } from "@/data/certificates";
import { honors } from "@/data/portfolio";
import { CertificateScan } from "./CertificateScan";

function RecordRow({ title, detail, year, document, note, group }: { title: string; detail?: string; year: string; document?: CertificateDocument; note?: string; group: string }) {
  const label = <><span className="honor-copy"><strong>{title}</strong>{detail && <span className="honor-detail">{detail}</span>}</span><span className="honor-year">{year}</span></>;

  return <li>{document
    ? <details className="honor-entry" name={group}><summary>{label}<span className="honor-toggle" aria-hidden="true">+</span></summary><CertificateScan document={document} note={note} /></details>
    : <div className="honor-text-row">{label}<span className="honor-toggle-space" aria-hidden="true" /></div>}
  </li>;
}

export function CertificateShowcase() {
  const documents = new Map(awardCertificates.map(document => [document.id, document]));
  const selectedIds = new Set(honors.map(item => item.certificateId));
  const additionalDocuments = [...awardCertificates.filter(document => !selectedIds.has(document.id)), ...learningCertificates];

  return <section className="home-honors" id="honors" aria-labelledby="honors-title"><div className="container home-honors-grid" id="certificates">
    <header className="honors-heading"><p className="eyebrow">Selected honors / Original records</p><h2 id="honors-title">Markers along the way.</h2><p>Rows marked + unfold an original certificate. Open a scan to read the complete document.</p></header>
    <div className="honors-records">
      <ul className="honor-list">{honors.map(item => <RecordRow key={item.id} title={item.award} detail={item.detail} year={item.year} document={item.certificateId ? documents.get(item.certificateId) : undefined} note={item.certificateNote} group="selected-honors" />)}</ul>
      <details className="honors-more"><summary><span>More certificates <small>Creative work, service, academic standing & learning</small></span><span className="honors-more-count">{additionalDocuments.length} records <span className="honor-toggle" aria-hidden="true">+</span></span></summary>
        <ul className="honor-list honor-list-additional">{additionalDocuments.map(document => <RecordRow key={document.id} title={document.title} detail={document.detail} year={document.period} document={document} group="additional-certificates" />)}</ul>
      </details>
    </div>
  </div></section>;
}
