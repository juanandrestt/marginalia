import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { OpenLibraryResponse, ApiResponse } from "@/lib/types";

export async function POST(request: NextRequest) {
	try {
		const genres = [
			"fantasy",
			"science-fiction",
			"romance",
			"poetry",
			"philosophy",
		];

		for (const genre of genres) {
			const url = `https://openlibrary.org/subjects/${genre}.json?limit=50`;
			const response = await fetch(url);
			const data = await response.json();

			for (const work of data.works) {
				const title = work.title;
				const authors = work.authors || [];
				const author = authors.length > 0 ? authors[0].name : "Unknown Author";
				const publishingYear = work.first_publish_year
					? new Date(work.first_publish_year, 0, 1)
					: null;

				await prisma.books.create({
					data: {
						title,
						author,
						publishing_year: publishingYear,
						genre,
						cover_id: work.cover_id || null,
					},
				});
			}
		}

		return NextResponse.json(
			{ message: "Database seeded successfully" },
			{ status: 200 }
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Error seeding database", error: error instanceof Error ? error.message : String(error) },
			{ status: 500 }
		);
	} finally {
		await prisma.$disconnect();
	}
}
