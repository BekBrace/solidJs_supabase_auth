// Importing render for template rendering, router for routing and redirecting pages, createClient 
// for creating a supabase client, and lastly supabaseprovider for client connection
import { render } from 'solid-js/web';
import { Router } from "@solidjs/router";
import { createClient } from '@supabase/supabase-js';
import { SupabaseProvider } from 'solid-supabase';

import './index.css'; // styling
import App from './App'; // main application rendered below
// this is a supabase client
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
// render function for the app wrapped in router tags, wrapped in supabaseprovider connecting 
// supabase client
render(() =>
     <SupabaseProvider client={supabase}>
        <Router>
            <App />
        </Router>
     </SupabaseProvider> 
, document.getElementById('root'));
