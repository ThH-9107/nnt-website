"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CreativeRecording as Recording } from "@/data/creative-productions";

export function CreativeRecording({ recording, productionId }: { recording: Recording; productionId: string }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const playerRef = useRef<HTMLMediaElement | null>(null);
  const captionId = `creative-${productionId}-${recording.id}-caption`;
  const playerId = `creative-${productionId}-${recording.id}-player`;

  useEffect(() => {
    if (loaded && !failed) playerRef.current?.focus({ preventScroll: true });
  }, [loaded, failed]);

  return <figure className={`creative-recording creative-recording-${recording.kind}`}>
    <div className="creative-recording-heading"><span className="story-kicker">{recording.kind === "video" ? "Rehearsal recording" : "Voice recording"}</span><h4>{recording.title}</h4></div>
    <div id={playerId}>
      {!loaded && (recording.kind === "video" ? <div className="creative-recording-poster">
        <Image src={recording.poster} alt="" width={recording.width} height={recording.height} sizes="(max-width: 900px) 90vw, 50vw" />
        <button type="button" className="creative-recording-load creative-recording-load-video" onClick={() => setLoaded(true)} aria-controls={playerId} aria-describedby={captionId} aria-label={`Load video: ${recording.title}`}><span aria-hidden="true">▷</span> Load video</button>
      </div> : <button type="button" className="creative-recording-load" onClick={() => setLoaded(true)} aria-controls={playerId} aria-describedby={captionId} aria-label={`Load audio: ${recording.title}`}><span aria-hidden="true">▷</span> Load audio</button>)}
      {loaded && !failed && (recording.kind === "video" ? <video
      ref={element => { playerRef.current = element; }}
      src={recording.src}
      poster={recording.poster}
      width={recording.width}
      height={recording.height}
      controls
      preload="none"
      playsInline
      aria-label={recording.title}
      aria-describedby={captionId}
      onError={() => setFailed(true)}
      crossOrigin={recording.tracks?.length ? "anonymous" : undefined}
    >
      {recording.tracks?.map(track => <track key={`${track.srcLang}-${track.kind}`} {...track} />)}
      Your browser cannot play this recording. <a href={recording.src}>Open the recording.</a>
    </video> : <audio ref={element => { playerRef.current = element; }} src={recording.src} controls preload="none" aria-label={recording.title} aria-describedby={captionId} onError={() => setFailed(true)}>Your browser cannot play this recording. <a href={recording.src}>Open the recording.</a></audio>)}
      {failed && <p className="creative-recording-fallback" role="status">This recording could not be loaded. You can try opening the file using the link below.</p>}
    </div>
    <figcaption id={captionId}>{recording.caption}<span className="creative-recording-language">Original audio · {recording.languageLabel}</span><span className="creative-recording-links"><a href={recording.src} target="_blank" rel="noopener noreferrer">Open recording <span aria-hidden="true">↗</span></a>{recording.transcript && <a href={recording.transcript.href} target="_blank" rel="noopener noreferrer">{recording.transcript.label} <span aria-hidden="true">↗</span></a>}</span></figcaption>
  </figure>;
}
