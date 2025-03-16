import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uezehbccvfoiodlyzltd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlemVoYmNjdmZvaW9kbHl6bHRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIxNjY0ODAsImV4cCI6MjA1Nzc0MjQ4MH0.s0a3FSuF1G1MXy-VI8iRhIYUp6bYIygXV5Ccg4hjpe8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
