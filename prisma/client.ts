// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Declare a global variable for PrismaClient to ensure a single instance
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}

export default prisma;
