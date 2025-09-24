-- Fix RLS policies for contact_messages table
-- Drop existing policies to avoid conflicts
DROP POLICY IF EXISTS "Allow anon inserts" ON contact_messages;
DROP POLICY IF EXISTS "Allow anon updates" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticator inserts" ON contact_messages;
DROP POLICY IF EXISTS "Allow authenticator updates" ON contact_messages;

-- Create simple, permissive policies for public access
CREATE POLICY "Allow public inserts" ON contact_messages 
FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public updates" ON contact_messages 
FOR UPDATE USING (true) WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
