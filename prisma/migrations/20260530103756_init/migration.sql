-- CreateTable
CREATE TABLE "offices" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "fullAddress" TEXT NOT NULL,
    "phones" TEXT[],
    "email" TEXT NOT NULL DEFAULT 'pacientdantist@yandex.ru',
    "workingHours" JSONB NOT NULL,
    "mapCoordinates" JSONB,
    "yandexMapUrl" TEXT,
    "gis2Url" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "offices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctors" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "specializations" TEXT[],
    "photoUrl" TEXT,
    "isHeadDoctor" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "educations" JSONB NOT NULL,
    "accreditations" JSONB NOT NULL,
    "advancedTrainings" JSONB,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor_offices" (
    "doctorId" TEXT NOT NULL,
    "officeId" TEXT NOT NULL,

    CONSTRAINT "doctor_offices_pkey" PRIMARY KEY ("doctorId","officeId")
);

-- CreateIndex
CREATE UNIQUE INDEX "offices_slug_key" ON "offices"("slug");

-- AddForeignKey
ALTER TABLE "doctor_offices" ADD CONSTRAINT "doctor_offices_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "doctors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doctor_offices" ADD CONSTRAINT "doctor_offices_officeId_fkey" FOREIGN KEY ("officeId") REFERENCES "offices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
