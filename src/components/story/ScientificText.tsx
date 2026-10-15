// Keep source copy as plain text while consistently typesetting species names.
export function ScientificText({ text }: { text: string }) {
  return <>{text.split(/(Phytophthora palmivora|Bacillus subtilis|Hygrophila polysperma|Agrobacterium tumefaciens|P\. palmivora|B\. subtilis|H\. polysperma|A\. tumefaciens)/g).map((part, index) => index % 2 ? <em key={index}>{part}</em> : part)}</>;
}
