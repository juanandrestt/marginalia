-- CreateTable
CREATE TABLE "public"."Users" (
    "id" SERIAL NOT NULL,
    "username" TEXT,
    "name" TEXT,
    "email" TEXT,
    "password" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Books" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "author" TEXT,
    "publishing_year" TIMESTAMP(3),
    "genre" TEXT,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Reviews" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "rating" TEXT,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Lists" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Bookmarks" (
    "id" SERIAL NOT NULL,
    "listId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "Bookmarks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Readings" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "Readings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Reviews" ADD CONSTRAINT "Reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Reviews" ADD CONSTRAINT "Reviews_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Lists" ADD CONSTRAINT "Lists_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Bookmarks" ADD CONSTRAINT "Bookmarks_listId_fkey" FOREIGN KEY ("listId") REFERENCES "public"."Lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Bookmarks" ADD CONSTRAINT "Bookmarks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Readings" ADD CONSTRAINT "Readings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Readings" ADD CONSTRAINT "Readings_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "public"."Books"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
