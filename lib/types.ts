export interface Book {
  id: number
  title?: string | null
  author?: string | null
  publishing_year?: Date | null
  genre?: string | null
  cover_id?: number | null
}

export interface User {
  id: number
  username?: string | null
  name?: string | null
  email?: string | null
}

export interface Review {
  id: number
  content?: string | null
  rating?: string | null
  userId: number
  bookId: number
  user: User
  book: Book
}

export interface List {
  id: number
  name?: string | null
  userId: number
  user: User
  bookmarks: Bookmark[]
}

export interface Bookmark {
  id: number
  listId: number
  bookId: number
  list: List
  book: Book
}

export interface Reading {
  id: number
  userId: number
  bookId: number
  user: User
  book: Book
}

export interface ApiResponse<T = any> {
  message: string
  data?: T
  error?: string
}

export interface OpenLibraryWork {
  title: string
  authors?: Array<{ name: string }>
  first_publish_year?: number
  cover_id?: number
}

export interface OpenLibraryResponse {
  works: OpenLibraryWork[]
}
