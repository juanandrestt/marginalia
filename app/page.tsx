import Image from "next/image";
import { prisma } from "@/lib/prisma";
import type { Book } from "@/lib/types";

export default async function HomePage() {
	try {
		const books: Book[] = await prisma.books.findMany({
			orderBy: { id: "desc" },
			take: 60,
		});
		await prisma.$disconnect();

		return (
			<div className='min-h-screen bg-[#f8f8f8] p-8'>
				<main className='max-w-5xl mx-auto'>
					<h1 className='text-4xl font-bold mb-10 tracking-tight text-[#222]'>
						Marginalia
					</h1>
					{books.length === 0 ? (
						<div className='text-center py-12'>
							<p className='text-lg text-gray-600 mb-4'>No books found in your collection.</p>
							<p className='text-sm text-gray-500'>Visit <code>/api/seed</code> to populate your library with sample books.</p>
						</div>
					) : (
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
							{books.map((book) => (
								<div
									key={book.id}
									className='bg-white rounded-lg shadow-sm border border-[#e5e5e5] flex flex-col items-center p-6 transition-transform hover:-translate-y-1 hover:shadow-md'
									style={{ minHeight: 320 }}>
									<div className='w-32 h-48 bg-[#ececec] rounded mb-4 flex items-center justify-center overflow-hidden'>
										{book.cover_id ? (
											<Image
												src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`}
												alt={book.title || "No Cover"}
												width={128}
												height={192}
												className='object-cover w-full h-full rounded'
												unoptimized
											/>
										) : (
											<span className='text-xs text-gray-400'>No Cover</span>
										)}
									</div>
									<div className='flex-1 flex flex-col items-center justify-center'>
										<h2 className='text-lg font-semibold text-[#222] text-center mb-1 line-clamp-2'>
											{book.title || "Untitled"}
										</h2>
										<p className='text-sm text-[#666] mb-1 text-center'>
											{book.author || "Unknown Author"}
										</p>
										<p className='text-xs text-[#aaa] text-center'>
											{book.publishing_year
												? new Date(book.publishing_year).getFullYear()
												: ""}
										</p>
										<span className='mt-2 px-2 py-1 text-xs rounded bg-[#f3f3f3] text-[#888]'>
											{book.genre}
										</span>
									</div>
								</div>
							))}
						</div>
					)}
				</main>
			</div>
		);
	} catch (error) {
		console.error('Error in HomePage component:', error);
		return (
			<div className='min-h-screen bg-[#f8f8f8] p-8'>
				<main className='max-w-5xl mx-auto'>
					<h1 className='text-4xl font-bold mb-10 tracking-tight text-[#222]'>
						Marginalia - Error
					</h1>
					<p>Something went wrong: {error instanceof Error ? error.message : 'Unknown error'}</p>
				</main>
			</div>
		);
	}
}
