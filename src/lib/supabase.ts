import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Cliente público (anon): lecturas públicas sujetas a RLS.
 * La clave anon es pública por diseño.
 */
export function createPublicClient(env: Env): SupabaseClient {
  const url = env.PUBLIC_SUPABASE_URL;
  const anonKey = env.PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    throw new Error(
      'Faltan variables de entorno públicas: PUBLIC_SUPABASE_URL y/o PUBLIC_SUPABASE_ANON_KEY.'
    );
  }
  return createClient(url, anonKey);
}

/**
 * Cliente de servidor (service_role): omite RLS. Usar SOLO en el servidor.
 */
export function createServerClient(env: Env): SupabaseClient {
  const url = env.PUBLIC_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    throw new Error(
      'Faltan variables de entorno de servidor: PUBLIC_SUPABASE_URL y/o SUPABASE_SERVICE_ROLE_KEY.'
    );
  }
  return createClient(url, serviceKey, {
    auth: { persistSession: false },
  });
}
