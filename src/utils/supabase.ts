import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_KEY;

if (!supabaseUrl) {
    throw new Error('REACT_APP_SUPABASE_URL is not defined');
}

if (!supabaseKey) {
    throw new Error('REACT_APP_SUPABASE_KEY is not defined');
}

export const supabase = createClient(supabaseUrl, supabaseKey);