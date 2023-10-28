/*
  Warnings:

  - You are about to drop the column `role` on the `UserGithub` table. All the data in the column will be lost.
  - Added the required column `roleUserGithub` to the `UserGithub` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserGithub" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "roleUserGithub" TEXT NOT NULL,
    "githubid" INTEGER NOT NULL
);
INSERT INTO "new_UserGithub" ("githubid", "id", "imageUrl", "login", "name") SELECT "githubid", "id", "imageUrl", "login", "name" FROM "UserGithub";
DROP TABLE "UserGithub";
ALTER TABLE "new_UserGithub" RENAME TO "UserGithub";
CREATE UNIQUE INDEX "UserGithub_githubid_key" ON "UserGithub"("githubid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
