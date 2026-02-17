import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NUKEBUGS | Portfolio & Case Studies",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
