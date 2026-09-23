async function keepSupabaseAlive() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables");
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/photo_records?select=id&limit=1`,
    {
      headers: {
        apikey: supabaseAnonKey,
        Authorization: `Bearer ${supabaseAnonKey}`,
      },
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Supabase keep-alive failed (${response.status}): ${detail}`);
  }

  console.log(`Supabase keep-alive succeeded at ${new Date().toISOString()}`);
}

export default keepSupabaseAlive;
