/*
  Warnings:

  - Added the required column `name` to the `Pet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pet` ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `profile` ADD COLUMN `instaProfile` VARCHAR(191) NULL;
