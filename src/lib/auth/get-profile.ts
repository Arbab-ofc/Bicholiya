import { getPrismaClient } from '@/lib/prisma'

export interface ProfileSummary {
  id: string
  userId: string
  email: string
  name: string | null
  avatarUrl: string | null
  role: string
  status: string
  authProvider: string
  emailVerified: boolean
}

export async function getProfile(userId: string): Promise<ProfileSummary | null> {
  try {
    const prisma = getPrismaClient()
    const profile = await prisma.profile.findUnique({
      where: { userId },
      select: {
        id: true,
        userId: true,
        email: true,
        name: true,
        avatarUrl: true,
        role: true,
        status: true,
        authProvider: true,
        emailVerified: true,
      },
    })

    if (!profile) return null

    return {
      id: profile.id,
      userId: profile.userId,
      email: profile.email,
      name: profile.name,
      avatarUrl: profile.avatarUrl,
      role: profile.role,
      status: profile.status,
      authProvider: profile.authProvider,
      emailVerified: profile.emailVerified,
    }
  } catch {
    return null
  }
}
