import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mcbvhljovhrxnmawqgow.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jYnZobGpvdmhyeG5tYXdxZ293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5MTQzNTQsImV4cCI6MjA2OTQ5MDM1NH0.2RJgS2WqZpPwnqOYEWKAnkGQDSp4YVfgbkZVPLHA5KY'
export const supabase = createClient(supabaseUrl, supabaseKey)
