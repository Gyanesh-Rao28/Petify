/*
  Warnings:

  - You are about to drop the column `location` on the `profile` table. All the data in the column will be lost.
  - Added the required column `location` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pet` ADD COLUMN `location` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profile` DROP COLUMN `location`;
