"use client";

import { useId, useState } from "react";
import { pageToStage, type ScriptLanguage } from "@/data/page-to-stage";

export function BilingualScriptExcerpt() {
  const [language, setLanguage] = useState<ScriptLanguage>("en");
  const id = useId();
  const { excerpt } = pageToStage;
  const languages: ScriptLanguage[] = ["en", "vi"];

  return <div className="stage-script-excerpt" aria-labelledby={`${id}-title`}>
    <header className="stage-script-header"><p className="stage-script-kicker">{excerpt.title}</p><h5 id={`${id}-title`}>{excerpt.scene}</h5></header>
    <div className="stage-script-languages" role="group" aria-label="Script excerpt language">
      {languages.map(value => <button type="button" key={value} lang={value} aria-pressed={language === value} aria-controls={`${id}-${value}`} onClick={() => setLanguage(value)}>{excerpt.versions[value].label}</button>)}
    </div>
    <div className="stage-script-language-notes" aria-live="polite" aria-atomic="true">{languages.map(value => <p className="stage-script-language-note" data-active={language === value} aria-hidden={language !== value} key={value}>{excerpt.versions[value].note}</p>)}</div>
    <div className="stage-script-reading">
      {languages.map(value => <div className="stage-script-version" data-active={language === value} id={`${id}-${value}`} lang={value} aria-hidden={language !== value} key={value}>
        {excerpt.versions[value].blocks.map((block, index) => block.kind === "dialogue" ? <blockquote className="stage-script-dialogue" key={index}><p>“{block.text}”</p></blockquote> : <p className={`stage-script-${block.kind}`} key={index}>{block.kind === "direction" || block.kind === "music" ? <em>{block.text}</em> : block.text}</p>)}
      </div>)}
    </div>
  </div>;
}
