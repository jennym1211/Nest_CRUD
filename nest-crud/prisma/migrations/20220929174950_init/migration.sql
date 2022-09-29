-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "body" JSON,
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),
    "user_uuid" UUID NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "state" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "abbreviation" TEXT,
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),

    CONSTRAINT "state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "user_uuid" UUID,
    "first_name" TEXT,
    "last_name" TEXT,
    "address_one" TEXT,
    "address_two" TEXT,
    "city" TEXT,
    "zipcode" INTEGER,
    "created_at" TIMESTAMP(6),
    "updated_at" TIMESTAMP(6),
    "state_id" INTEGER NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_uuid_key" ON "user"("user_uuid");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "user"("user_uuid") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_state_id_fkey" FOREIGN KEY ("state_id") REFERENCES "state"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
