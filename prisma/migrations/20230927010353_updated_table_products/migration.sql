/*
  Warnings:

  - You are about to drop the column `name` on the `Products` table. All the data in the column will be lost.
  - You are about to alter the column `InStock` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `price` on the `Products` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `product` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "product" TEXT NOT NULL,
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
