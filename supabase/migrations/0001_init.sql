-- Initial database schema for access codes
CREATE TABLE access_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    code TEXT NOT NULL UNIQUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    first_used_at TIMESTAMPTZ,
    email TEXT,
    is_active BOOLEAN DEFAULT TRUE
);

-- Index for faster code lookups
CREATE INDEX idx_access_codes_code ON access_codes(code);
