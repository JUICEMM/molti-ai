/*
  Warnings:

  - You are about to drop the `Example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Example`;

-- CreateTable
CREATE TABLE `Keyword` (
    `id` VARCHAR(191) NOT NULL,
    `keyword` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `searchAveragePerDay` VARCHAR(191) NOT NULL,
    `searchAveragePerMonthGrowthRate` VARCHAR(191) NOT NULL,
    `ppc` VARCHAR(191) NOT NULL,
    `productAveragePrice` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
