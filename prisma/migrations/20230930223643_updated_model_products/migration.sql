/*
  Warnings:

  - You are about to drop the column `kind` on the `Products` table. All the data in the column will be lost.
  - Added the required column `product` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "InStock" INTEGER NOT NULL
);
INSERT INTO "new_Products" ("InStock", "id", "imageUrl", "name", "price") SELECT "InStock", "id", "imageUrl", "name", "price" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
