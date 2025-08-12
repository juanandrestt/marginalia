import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Marginalia",
	description:
		"A personal digital sanctuary for book lovers. Track your reading progress, capture meaningful quotes, write reflections, and build your personal literary library. Discover patterns in your reading habits and preserve your thoughts on the books that shape you.",
	keywords: [
		"reading tracker",
		"book journal",
		"literary reflection",
		"reading progress",
		"book quotes",
		"personal library",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased`}>{children}</body>
		</html>
	);
}
