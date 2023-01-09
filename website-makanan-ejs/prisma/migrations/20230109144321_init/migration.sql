-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "FoodName" TEXT NOT NULL,
    "OrderCode" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "Images" TEXT NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);
