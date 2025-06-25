-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "lastname" TEXT,
    "studentid" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "remarks" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);
