import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import "./scale-map.css";
import "./story.css";
import "./photography.css";
import "./scale-photography.css";
import "./certificates.css";
import "./readability.css";

export const metadata: Metadata = {
  title: "Nguyen Ngoc Thanh | Student Researcher",
  description: "Nguyen Ngoc Thanh is a high school student researcher at Lawrence S. Ting School exploring biology and medical AI, with interests in teaching, community work, and theatre.",
  openGraph: {
    title: "Nguyen Ngoc Thanh | Student Researcher",
    description: "Biology and medical AI research, science education, community leadership, and theatre.",
    type: "website",
  },
};

export default function RootLayout({ children, story }: Readonly<{ children: React.ReactNode; story: React.ReactNode }>) {
  return <html lang="en"><body><div id="site-content">{children}</div>{story}</body></html>;
}
