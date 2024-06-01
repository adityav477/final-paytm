/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `P2PTransaction` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "P2PTransaction_receiverId_key";

-- DropIndex
DROP INDEX "P2PTransaction_senderId_key";

-- CreateIndex
CREATE UNIQUE INDEX "P2PTransaction_id_key" ON "P2PTransaction"("id");
