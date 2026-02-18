import { getProfile } from '@/lib/auth/get-profile'
import { requireAuth } from '@/lib/auth/require-auth'

export interface AdminGuardResult {
  userId: string
  profileId: string
}

export async function requireAdmin(): Promise<AdminGuardResult> {
  const session = await requireAuth()
  const profile = await getProfile(session.userId)

  if (!profile) {
    throw new Error('PROFILE_NOT_FOUND')
  }

  if (profile.authProvider === 'GOOGLE') {
    throw new Error('ADMIN_GOOGLE_BLOCKED')
  }

  if (profile.role !== 'ADMIN') {
    throw new Error('ADMIN_ONLY')
  }

  if (profile.status !== 'ACTIVE') {
    throw new Error('ACCOUNT_DISABLED')
  }

  return { userId: session.userId, profileId: profile.id }
}
