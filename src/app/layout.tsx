import type { Metadata } from "next";
import "./globals.css";
import "./home.css";
import "./project-pages.css";

export const metadata: Metadata = {
  title: "Nguyen Ngoc Thanh | Student Researcher",
  description: "Nguyen Ngoc Thanh is a student researcher at Lawrence S. Ting School exploring biology, medical AI, community science, and theatre.",
  openGraph: {
    title: "Nguyen Ngoc Thanh | Student Researcher",
    description: "Research in biology, medical AI, and community science.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
