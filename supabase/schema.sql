create extension if not exists "pgcrypto";

create table if not exists public.service_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  service_type text not null,
  urgency text not null default 'scheduled',
  requested_date date not null,
  requested_time time not null,
  location text,
  estimated_duration text,
  contact text not null,
  details text
);

create index if not exists service_requests_created_at_idx
  on public.service_requests (created_at desc);
