import { createClient } from "@supabase/supabase-js";

// The address and publishable key are safe to be public.
// Row Level Security in Supabase controls what they can do.
const url = "https://dkagwhsvnktrsfbtjqlv.supabase.co";
const key = "sb_publishable_UdtGOv5wW380oiTIdr2J2Q_a6D-BKcJ";

export const supabase = createClient(url, key);
