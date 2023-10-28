-- CreateTable
CREATE TABLE "UserGithub" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "login" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "githubid" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserGithub_githubid_key" ON "UserGithub"("githubid");
