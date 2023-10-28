/*
  Warnings:

  - Added the required column `slug` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "InStock" INTEGER NOT NULL,
    "slug" TEXT NOT NULL
);
INSERT INTO "new_Products" ("InStock", "id", "imageUrl", "name", "price") SELECT "InStock", "id", "imageUrl", "name", "price" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
