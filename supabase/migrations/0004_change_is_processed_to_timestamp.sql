-- Change is_processed boolean to processed_at timestamp
ALTER TABLE contact_messages 
DROP COLUMN IF EXISTS is_processed;

ALTER TABLE contact_messages 
ADD COLUMN processed_at TIMESTAMPTZ NULL;

-- Add index for better query performance on processed messages
CREATE INDEX IF NOT EXISTS idx_contact_messages_processed_at 
ON contact_messages(processed_at);
