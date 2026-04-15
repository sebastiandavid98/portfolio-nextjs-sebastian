import { createClient, SupabaseClient } from "@supabase/supabase-js";

// ── Lazy singleton — only created when env vars are present ──
let _client: SupabaseClient | null = null;

/**
 * Returns a Supabase client if env vars are configured, null otherwise.
 * Using a lazy singleton avoids creating the client at module load time,
 * which would crash the build if the env vars are not set.
 */
export function getSupabaseClient(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Not configured — return null so callers can use a fallback
  if (
    !url || url === "REEMPLAZAR_CON_MI_URL" ||
    !key || key === "REEMPLAZAR_CON_MI_KEY"
  ) {
    return null;
  }

  if (!_client) {
    _client = createClient(url, key);
  }

  return _client;
}

// Convenience re-export — will be null if env vars are not set.
// Always check for null before using: if (supabase) { ... }
export const supabase = getSupabaseClient();
