import { createClient } from "@supabase/supabase-js";

// Finds the Supabase address and key in Vercel, whatever their exact names
const find = (word, end) =>
  Object.entries(process.env).find(
    ([k]) => k.includes(word) && k.endsWith(end)
  )?.[1];

const url = find("SUPABASE", "URL");
const key = find("SUPABASE", "KEY");

export const supabase = createClient(url, key);
