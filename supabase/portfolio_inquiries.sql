-- Run once in Supabase -> SQL Editor.
-- All browser reads/writes are denied; the Next.js server uses a server-only secret key.
create extension if not exists pgcrypto;

create table if not exists public.portfolio_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) between 2 and 100),
  email text not null check (char_length(email) between 5 and 254),
  project_type text not null check (project_type in (
    'Event Planning & Collaborations', 'Digital Marketing Strategy', 'Lead Generation',
    'Cold Calling & Outreach', 'Email Marketing', 'Social Content & Video',
    'SEO Articles & Writing', 'SEO Content & Writing', 'Video Editing & Reels',
    'Content Strategy', 'Event & Leadership Collaboration', 'Something Else'
  )),
  message text not null check (char_length(message) between 10 and 4000),
  ip_hash text not null check (char_length(ip_hash) = 64),
  notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sent', 'failed')),
  resend_message_id text
);

alter table public.portfolio_inquiries enable row level security;
-- No INSERT/SELECT/UPDATE/DELETE policies are defined for anonymous/authenticated clients.
revoke all on table public.portfolio_inquiries from anon, authenticated;
grant select, insert, update on table public.portfolio_inquiries to service_role;

create index if not exists portfolio_inquiries_ip_created_idx
  on public.portfolio_inquiries (ip_hash, created_at desc);
create index if not exists portfolio_inquiries_created_idx
  on public.portfolio_inquiries (created_at desc);
