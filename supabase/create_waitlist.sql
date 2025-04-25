/*
  # Initial Schema Setup for Waitlist System

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text) - tracks signup status
      - `source` (text) - tracks where the signup came from

  2. Security
    - Enable RLS on `waitlist` table
    - Add policies for:
      - Admins can read all entries
      - New signups can be created by anyone
      - No direct updates/deletes allowed through RLS
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending',
  source text DEFAULT 'website'
);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow new signups from anyone
CREATE POLICY "Enable signups for all users" ON waitlist
  FOR INSERT
  WITH CHECK (true);

-- Only allow admins to view waitlist entries
CREATE POLICY "Allow admins to view waitlist" ON waitlist
  FOR SELECT
  TO authenticated
  USING (auth.role() = 'admin');

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (email);

-- Create an index on created_at for chronological queries
CREATE INDEX IF NOT EXISTS waitlist_created_at_idx ON waitlist (created_at);