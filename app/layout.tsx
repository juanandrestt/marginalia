import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Aujournuit = localFont({
	src: "./fonts/Aujournuit-Regular.woff2",
	variable: "--font-aujournuit",
});

export const metadata: Metadata = {
	title: "Marginalia",
	description: "A modern web application",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${Aujournuit.variable} antialiased`}>{children}</body>
		</html>
	);
}
