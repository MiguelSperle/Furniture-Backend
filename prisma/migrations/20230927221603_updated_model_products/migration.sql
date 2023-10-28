/*
  Warnings:

  - You are about to drop the column `kindProduct` on the `Products` table. All the data in the column will be lost.
  - Added the required column `kind` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "kind" TEXT NOT NULL,
    "flavor" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "InStock" INTEGER NOT NULL
);
INSERT INTO "new_Products" ("InStock", "flavor", "id", "imageUrl", "price") SELECT "InStock", "flavor", "id", "imageUrl", "price" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE UNIQUE INDEX "Products_flavor_key" ON "Products"("flavor");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
