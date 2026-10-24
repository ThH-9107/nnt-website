export type ScriptLanguage = "en" | "vi";
export type ScriptBlock = {
  kind: "direction" | "character" | "dialogue" | "music";
  text: string;
};

// Both versions were supplied by Thanh. English is an adaptation, not a literal
// translation. These are selected lines, not a reconstruction of the full script.
export const pageToStage = {
  label: "From page to stage",
  title: "1919 — A story inspired by the life of Cao Văn Lầu",
  readingCopyNote: "Personal identifiers and external reference links omitted.",
  synopsis: {
    title: "The Story Behind 1919",
    context: "The story as told in our student theatrical adaptation.",
    paragraphs: [
      "During a history lesson on Vietnamese cultural heritage, a student named Cát Tiên falls asleep and finds herself transported into the past. Invisible to those around her, she witnesses pivotal moments in the life of Cao Văn Lầu, the composer of Dạ cổ hoài lang.",
      "What begins as a glimpse into a joyful marriage gradually becomes a story of familial pressure, separation, and heartbreak. Through music and performance, Cát Tiên comes to understand the personal stories behind the cultural traditions she had previously known only from textbooks.",
      "Returning to the present, she discovers a newfound desire to help preserve and share Vietnam’s intangible cultural heritage.",
    ],
  },
  excerpt: {
    title: "1919 / Script excerpt",
    scene: "The separation scene",
    versions: {
      en: {
        label: "English",
        note: "English adaptation of the original Vietnamese script.",
        blocks: [
          { kind: "direction", text: "He turns to leave, glancing back one last time." },
          { kind: "direction", text: "He sits beside the đàn tranh, plucks a few notes, then rises to face the audience." },
          { kind: "character", text: "CAO VĂN LẦU (in anguish):" },
          { kind: "dialogue", text: "Why? Why would heaven let me meet the woman I love with all my heart, only to tear us apart?" },
          { kind: "direction", text: "His wife enters from stage left, gazing sorrowfully into the distance." },
          { kind: "music", text: "The melody of Dạ cổ hoài lang begins." },
        ] satisfies ScriptBlock[],
      },
      vi: {
        label: "Tiếng Việt",
        note: "Original Vietnamese, with minor punctuation and typo corrections for readability.",
        blocks: [
          { kind: "direction", text: "CVL quay đầu ra đi, giữa đường còn ngoảnh lại nhìn." },
          { kind: "direction", text: "CVL ngồi xuống bên chiếc đàn tranh, gảy vài nốt rồi lại đứng lên, hướng mặt về phía khán giả bên phải sân khấu." },
          { kind: "character", text: "CVL (đau khổ):" },
          { kind: "dialogue", text: "Tại sao? Tại sao? Hà cớ chi mà ông trời cho tôi gặp người con gái tôi hết lòng yêu thương để rồi đây chia lìa chúng tôi mỗi người một ngả" },
          { kind: "direction", text: "Người vợ đi vào từ bên trái sân khấu, vẻ mặt buồn rầu, nhìn xa xăm về hướng bên phải sân khấu." },
          { kind: "music", text: "(Hát Dạ cổ hoài lang — Cao Văn Lầu)" },
        ] satisfies ScriptBlock[],
      },
    },
  },
};
