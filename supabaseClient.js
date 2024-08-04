import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mqzxyhbawzfwiepfcjae.supabase.co'

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xenh5aGJhd3pmd2llcGZjamFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk4NzQ3MjksImV4cCI6MjAzNTQ1MDcyOX0.fZRxp2Ueu3GP758AszoQn9RPR56vAmAhxuUqPtPxd_o'

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
