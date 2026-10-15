import Image from "next/image";
import type { CertificateDocument } from "@/data/certificates";

export function CertificateScan({ document, note }: { document: CertificateDocument; note?: string }) {
  const caption = note ?? document.note;
  return <figure className="certificate-scan">
    <figcaption className="certificate-scan-meta"><span>{document.issuer}</span><span>{document.period}</span></figcaption>
    <a className="certificate-scan-image" data-orientation={document.width < document.height ? "portrait" : "landscape"} href={document.pdf} target="_blank" rel="noopener noreferrer" aria-label={`Open original ${document.title} certificate PDF in a new tab`}>
      <Image src={document.thumbnail} alt={`${document.title} certificate issued to Nguyen Ngoc Thanh`} width={document.width} height={document.height} quality={90} sizes={document.width < document.height ? "(max-width: 620px) 85vw, 420px" : "(max-width: 900px) 85vw, 60vw"} />
    </a>
    {caption && <p className="certificate-scan-note">{caption}</p>}
    <a className="certificate-scan-open" href={document.pdf} target="_blank" rel="noopener noreferrer">Read original certificate <span aria-hidden="true">↗</span></a>
  </figure>;
}
