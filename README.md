# Mini CRM Dashboard

A simple website for tracking business enquiries (leads) and seeing how many become customers.

## Live link
https://mini-crm-dashboard-1-2upz-mu.vercel.app/

## What I built
- Dashboard overview: total leads, new leads, converted customers
- Add, edit and delete leads (name, email, phone, business name, status)
- Search by name or email, and filter by status (New, Contacted, Converted)
- Loading message, empty state, error messages and form validation
- Responsive design for mobile and desktop

## Tech stack
- Frontend: Next.js (React)
- Backend: Next.js API routes
- Database: Supabase (PostgreSQL)
- Hosting: Vercel

I chose this stack because one project covers the frontend and backend, Supabase gives a free hosted database, and Vercel deploys straight from GitHub.

## Current status
The interface is complete and live. The live site currently shows
"Failed to load leads" because the connection between the backend and the
Supabase database is not working yet. I believe the cause is how the
Supabase key is set in the Vercel environment variables.

## How to run it
1. Download the code and run: npm install
2. Add these environment variables:
   - NEXT_PUBLIC_SUPABASE_URL = your Supabase project URL
   - NEXT_PUBLIC_SUPABASE_ANON_KEY = your Supabase publishable key
3. Run: npm run dev
4. Open http://localhost:3000

## Database setup
1. Create a free project at supabase.com.
2. Open SQL Editor, paste the SQL below, and run it.

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  business_name text not null,
  status text not null default 'New'
    check (status in ('New', 'Contacted', 'Converted')),
  created_at timestamptz default now()
);

alter table leads enable row level security;
create policy "public read" on leads for select using (true);
create policy "public insert" on leads for insert with check (true);
create policy "public update" on leads for update using (true);
create policy "public delete" on leads for delete using (true);

Note: these open policies are fine for a demo, but a real app would
need login and stricter rules.

