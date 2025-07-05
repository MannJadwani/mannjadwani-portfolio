# Supabase Setup for Contact Form

This document explains how to set up Supabase to handle contact form submissions.

## 1. Create a Supabase Project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Fill in your project details
4. Wait for the project to be created

## 2. Get Your Supabase Credentials

1. Go to your project dashboard
2. Click on "Settings" in the left sidebar
3. Click on "API" 
4. Copy the following values:
   - **Project URL** (looks like: `https://your-project-id.supabase.co`)
   - **anon public key** (starts with `eyJhbGciOiJ...`)

## 3. Create Environment Variables

Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Create the Contacts Table

1. Go to your Supabase dashboard
2. Click on "Table Editor" in the left sidebar
3. Click "Create a new table"
4. Name it `contacts`
5. Add the following columns:

| Column Name | Data Type | Primary Key | Not Null | Default Value |
|-------------|-----------|-------------|----------|---------------|
| id          | int8      | ✓           | ✓        | Auto-increment |
| name        | text      |             | ✓        |                |
| email       | text      |             | ✓        |                |
| subject     | text      |             | ✓        |                |
| message     | text      |             | ✓        |                |
| company     | text      |             |          |                |
| phone       | text      |             |          |                |
| created_at  | timestamptz |           | ✓        | now()          |

Or run this SQL query in the SQL Editor:

```sql
CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(50),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 5. Set Up Row Level Security (Optional but Recommended)

1. Go to "Authentication" > "Policies"
2. Enable RLS on the `contacts` table
3. Create a policy to allow public inserts:

```sql
CREATE POLICY "Allow public inserts" ON contacts
  FOR INSERT TO anon
  WITH CHECK (true);
```

## 6. Test Your Setup

1. Start your Next.js development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your Supabase dashboard > Table Editor > contacts to see the submission

## Features Included

- ✅ Form validation
- ✅ Loading states
- ✅ Success/error messages
- ✅ Glassmorphic design
- ✅ Responsive layout
- ✅ TypeScript support
- ✅ Supabase integration

## Troubleshooting

### Common Issues:

1. **"Failed to submit your message"**
   - Check your environment variables are correct
   - Verify the contacts table exists
   - Check browser console for detailed error messages

2. **Connection errors**
   - Ensure your Supabase project is not paused
   - Verify the project URL is correct
   - Check your internet connection

3. **Permission errors**
   - Make sure Row Level Security allows public inserts
   - Check your Supabase project settings

Need help? Check the [Supabase documentation](https://supabase.com/docs) or contact support. 