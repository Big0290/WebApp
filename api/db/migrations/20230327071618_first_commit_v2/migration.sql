-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profilesId" TEXT,
    "friendsId" TEXT,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profiles" (
    "id" TEXT NOT NULL,
    "story" TEXT,
    "birthday" TIMESTAMP(3),

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Albums" (
    "id" TEXT NOT NULL,
    "creation" TIMESTAMP(3),
    "update" TIMESTAMP(3),
    "profilesId" TEXT,

    CONSTRAINT "Albums_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "uploadOn" TIMESTAMP(3) NOT NULL,
    "Url" TEXT,
    "albumsId" TEXT,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chats" (
    "id" TEXT NOT NULL,
    "creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updadeOn" TIMESTAMP(3),
    "chatRoomId" TEXT NOT NULL,
    "photosId" TEXT,

    CONSTRAINT "Chats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatRoom" (
    "id" TEXT NOT NULL,
    "chatRoomName" TEXT NOT NULL,
    "lastActivity" TIMESTAMP(3) NOT NULL,
    "creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ChatRoom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChatMessages" (
    "id" TEXT NOT NULL,
    "creation" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "chatRoomId" TEXT,
    "chatsId" TEXT,

    CONSTRAINT "ChatMessages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Files" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "foldersId" TEXT,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Folders" (
    "id" TEXT NOT NULL,
    "folderName" TEXT NOT NULL,
    "pathUrl" TEXT NOT NULL,
    "creation" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "usersId" TEXT NOT NULL,

    CONSTRAINT "Folders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articles" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "creation" TIMESTAMP(3) NOT NULL,
    "updateOn" TIMESTAMP(3),
    "body" TEXT,
    "usersId" TEXT NOT NULL,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tags" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Friends" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Friends_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArticlesToTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_userName_key" ON "Users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_id_key" ON "Profiles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Albums_id_key" ON "Albums"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Photos_id_key" ON "Photos"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Chats_id_key" ON "Chats"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChatRoom_id_key" ON "ChatRoom"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ChatRoom_chatRoomName_key" ON "ChatRoom"("chatRoomName");

-- CreateIndex
CREATE UNIQUE INDEX "ChatMessages_id_key" ON "ChatMessages"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Files_id_key" ON "Files"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Folders_id_key" ON "Folders"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Folders_usersId_key" ON "Folders"("usersId");

-- CreateIndex
CREATE UNIQUE INDEX "Articles_id_key" ON "Articles"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Tags_id_key" ON "Tags"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Friends_id_key" ON "Friends"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_ArticlesToTags_AB_unique" ON "_ArticlesToTags"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticlesToTags_B_index" ON "_ArticlesToTags"("B");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_profilesId_fkey" FOREIGN KEY ("profilesId") REFERENCES "Profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_friendsId_fkey" FOREIGN KEY ("friendsId") REFERENCES "Friends"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Albums" ADD CONSTRAINT "Albums_profilesId_fkey" FOREIGN KEY ("profilesId") REFERENCES "Profiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_albumsId_fkey" FOREIGN KEY ("albumsId") REFERENCES "Albums"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chats" ADD CONSTRAINT "Chats_photosId_fkey" FOREIGN KEY ("photosId") REFERENCES "Photos"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessages" ADD CONSTRAINT "ChatMessages_chatsId_fkey" FOREIGN KEY ("chatsId") REFERENCES "Chats"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessages" ADD CONSTRAINT "ChatMessages_chatRoomId_fkey" FOREIGN KEY ("chatRoomId") REFERENCES "ChatRoom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_foldersId_fkey" FOREIGN KEY ("foldersId") REFERENCES "Folders"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folders" ADD CONSTRAINT "Folders_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Articles" ADD CONSTRAINT "Articles_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticlesToTags" ADD CONSTRAINT "_ArticlesToTags_A_fkey" FOREIGN KEY ("A") REFERENCES "Articles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticlesToTags" ADD CONSTRAINT "_ArticlesToTags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;
