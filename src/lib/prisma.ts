import { PrismaClient } from '@prisma/client'

interface PrismaGlobal {
  prisma?: PrismaClient
}

const globalForPrisma = globalThis as unknown as PrismaGlobal

const prisma = globalForPrisma.prisma ?? new PrismaClient({ log: ['error'] })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

export function getPrismaClient(): PrismaClient {
  return prisma
}
