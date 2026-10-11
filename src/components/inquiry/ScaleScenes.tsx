const imageTiles = Array.from({ length: 84 }, (_, index) => ({
  x: 68 + (index % 12) * 57,
  y: 35 + Math.floor(index / 12) * 57,
  marked: [29, 30, 41, 42, 43, 54].includes(index),
}));

const learnerPositions = [245, 345, 445, 545, 645];

const communityNodes = [
  [145, 160], [235, 110], [292, 205], [180, 275],
  [405, 102], [478, 180], [390, 285], [552, 305],
  [652, 125], [742, 190], [690, 300], [790, 315],
];

const communityEdges = [
  [0, 1], [0, 2], [0, 3], [1, 4], [2, 3], [2, 5],
  [4, 5], [4, 8], [5, 6], [5, 7], [6, 7], [7, 9],
  [7, 10], [8, 9], [9, 10], [9, 11], [10, 11],
];

export function ScaleScenes() {
  return <svg className="scale-scenes" viewBox="0 0 900 460" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
    <defs>
      <linearGradient id="scale-specimen-fill" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#dce9dd" />
        <stop offset="1" stopColor="#edf3e9" />
      </linearGradient>
    </defs>

    <g className="scale-scene" data-scene="see">
      <rect className="scene-frame" x="49" y="18" width="754" height="417" />
      {imageTiles.map((tile, index) => <rect key={index} className={tile.marked ? "scene-tile scene-tile-marked" : "scene-tile"} x={tile.x} y={tile.y} width="49" height="49" />)}
      <rect className="scene-focus" x="281" y="137" width="281" height="224" />
      <path className="scene-ink" d="M293 124h33m-33 0v33M550 124h-33m33 0v33M293 372h33m-33 0v-33M550 372h-33m33 0v-33" />
      <path className="scene-contour" d="M370 219c9-42 64-62 102-31 31 25 40 82 16 117-24 34-79 39-113 13-31-24-28-68-5-99Z" />
      <path className="scene-contour scene-contour-soft" d="M391 225c13-23 45-32 69-16 26 18 29 62 13 86-15 22-54 27-76 9-22-19-20-55-6-79Z" />
      <circle className="scene-point" cx="430" cy="256" r="5" />
    </g>

    <g className="scale-scene" data-scene="test">
      <path className="scene-field-line" d="M-30 350C155 300 256 349 440 325s303-115 485-72M-30 386c195-48 304-1 493-30s278-107 462-57M-30 421c202-45 302 4 497-23s286-83 458-52" />
      <path className="scene-organism" d="M158 317C200 218 214 112 349 67c73-24 135-1 164 49 43 73-6 156-77 197-83 48-181 45-278 4Z" />
      <path className="scene-ink" d="M163 316C266 273 373 203 489 105M258 207c-10 32-12 62-9 90m91-133c-3 37 8 67 24 88m39-115c3 25 14 41 28 51" />
      <circle className="scene-dish" cx="643" cy="267" r="130" />
      <circle className="scene-dish-inner" cx="643" cy="267" r="112" />
      <path className="scene-contour" d="M598 225c20-19 54-16 68 7 13 23 5 53-17 65-22 13-48 2-59-20-9-20-6-37 8-52Z" />
      <circle className="scene-point" cx="632" cy="256" r="7" />
      <path className="scene-ink scene-transfer" d="M474 193C523 184 546 194 568 214" />
    </g>

    <g className="scale-scene" data-scene="share">
      <path className="scene-room-line" d="M70 79h760M70 365h760M116 79v286M784 79v286" />
      <rect className="scene-bench" x="188" y="234" width="512" height="90" rx="8" />
      <path className="scene-ink" d="M222 256h439M250 284h32m81 0h32m81 0h32m81 0h32" />
      {learnerPositions.map((x, index) => <g key={x}>
        <circle className="scene-person" cx={x} cy={144 + (index % 2) * 14} r="23" />
        <path className="scene-person-body" d={`M${x - 37} ${217 + (index % 2) * 14}c3-34 19-46 37-46s34 12 37 46`} />
        <path className="scene-link" d={`M${x} ${219 + (index % 2) * 14}v26`} />
      </g>)}
      <rect className="scene-tool" x="415" y="254" width="60" height="42" rx="2" />
      <path className="scene-ink" d="M428 264h34m-34 9h34m-34 9h22" />
      <circle className="scene-point" cx="445" cy="319" r="6" />
    </g>

    <g className="scale-scene" data-scene="serve">
      <path className="scene-terrain" d="M41 84c142-52 264-32 361 3 118 42 200 23 389-37M23 360c160-42 258-9 357 36 120 55 268 20 489-46" />
      <path className="scene-terrain scene-terrain-soft" d="M6 194c152-62 236-45 358-6 130 42 268-13 525-71M0 292c167-36 246-12 356 22 131 40 260-5 544-67" />
      {communityEdges.map(([from, to], index) => <line className="scene-community-link" key={index} x1={communityNodes[from][0]} y1={communityNodes[from][1]} x2={communityNodes[to][0]} y2={communityNodes[to][1]} />)}
      {communityNodes.map(([x, y], index) => <g key={index}>
        <circle className="scene-community-halo" cx={x} cy={y} r={index === 5 || index === 9 ? 39 : 24} />
        <circle className="scene-community-point" cx={x} cy={y} r={index === 5 || index === 9 ? 11 : 7} />
      </g>)}
    </g>

    <g className="scale-scene" data-scene="express">
      <path className="scene-audience-arc" d="M33 442c56-176 198-285 417-285s361 109 417 285M98 442c47-143 163-227 352-227s305 84 352 227M167 442c35-106 134-171 283-171s248 65 283 171M243 442c25-72 91-113 207-113s182 41 207 113" />
      <path className="scene-stage" d="M323 54h254l44 101H279Z" />
      <path className="scene-ink" d="M338 68h224M306 142h288" />
      <circle className="scene-stage-point" cx="450" cy="100" r="14" />
      {[0, 1, 2, 3, 4].map((row) => <g key={row}>
        {Array.from({ length: 7 + row * 2 }, (_, col) => {
          const count = 7 + row * 2;
          return <circle className="scene-audience-point" key={col} cx={450 + (col - (count - 1) / 2) * (47 - row * 2)} cy={211 + row * 48} r={3 + row * .45} />;
        })}
      </g>)}
    </g>
  </svg>;
}
