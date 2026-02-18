import { getSupabaseServerClient } from '@/lib/supabase/server'

export interface AuthSessionResult {
  isAuthenticated: boolean
  userId?: string
  email?: string
  emailConfirmedAt?: string | null
}

export async function getSession(): Promise<AuthSessionResult> {
  try {
    const supabase = await getSupabaseServerClient()
    const { data, error } = await supabase.auth.getUser()

    if (error || !data.user) {
      return { isAuthenticated: false }
    }

    return {
      isAuthenticated: true,
      userId: data.user.id,
      email: data.user.email ?? undefined,
      emailConfirmedAt: data.user.email_confirmed_at ?? null,
    }
  } catch {
    return { isAuthenticated: false }
  }
}
