import { BookOpenText } from "lucide-react";

export default async function HomePage() {
	return (
		<main className='flex items-center justify-center h-screen gap-2'>
			<h1
				className='font-bold text-2xl'
				style={{ fontFamily: "var(--font-aujournuit)" }}>
				Under construction
			</h1>
			<BookOpenText />
		</main>
	);
}
