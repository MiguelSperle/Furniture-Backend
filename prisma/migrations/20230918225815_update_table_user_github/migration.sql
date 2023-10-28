/*
  Warnings:

  - You are about to drop the column `roleUserGithub` on the `UserGithub` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserGithub" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "githubid" INTEGER NOT NULL
);
INSERT INTO "new_UserGithub" ("githubid", "id", "imageUrl", "login", "name") SELECT "githubid", "id", "imageUrl", "login", "name" FROM "UserGithub";
DROP TABLE "UserGithub";
ALTER TABLE "new_UserGithub" RENAME TO "UserGithub";
CREATE UNIQUE INDEX "UserGithub_githubid_key" ON "UserGithub"("githubid");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
