import { getSession } from '@/lib/auth/get-session'

export interface RequiredAuthSession {
  userId: string
  email?: string
  emailConfirmedAt?: string | null
}

export async function requireAuth(): Promise<RequiredAuthSession> {
  const session = await getSession()

  if (!session.isAuthenticated || !session.userId) {
    throw new Error('UNAUTHORIZED')
  }

  return {
    userId: session.userId,
    email: session.email,
    emailConfirmedAt: session.emailConfirmedAt ?? null,
  }
}
