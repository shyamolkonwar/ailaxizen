import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function submitEmail(email: string) {
  try {
    // First, sign up the user in Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password: Math.random().toString(36).slice(-8), // Generate a random password
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (authError) {
      throw authError;
    }

    // Then, insert into the custom waitlist table
    const { error: waitlistError } = await supabase
      .from('waitlist')
      .insert([
        {
          email,
          status: 'pending',
          source: 'website'
        }
      ]);

    if (waitlistError) {
      throw waitlistError;
    }

    return { error: null };
  } catch (error: any) {
    return { error: { message: error.message } };
  }
}