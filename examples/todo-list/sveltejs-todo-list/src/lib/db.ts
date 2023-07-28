import { createClient } from "@supabase/supabase-js";
import type { Database } from "./schema";

export const iechor = createClient<Database>(
  import.meta.env.VITE_IECHOR_URL,
  import.meta.env.VITE_IECHOR_ANON_KEY
);
