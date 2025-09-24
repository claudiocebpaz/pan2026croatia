-- Cleanup RLS policies for contact_messages table
-- Since RLS is disabled, remove any existing policies to keep the database clean

-- Drop any remaining policies (safe to run even if they don't exist)
DROP POLICY IF EXISTS "Allow public inserts" ON contact_messages;
DROP POLICY IF EXISTS "Allow public updates" ON contact_messages;
DROP POLICY IF EXISTS "Allow anon inserts" ON contact_messages;
DROP POLICY IF EXISTS "Allow anon updates" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticator inserts" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticator updates" ON contact_messages;

-- Ensure RLS remains disabled (redundant but explicit)
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;

-- Note: This cleanup ensures the database is clean while RLS is disabled
-- When ready to re-enable RLS, create appropriate policies first
