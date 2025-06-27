# Supabase Setup Guide for Nyxpro Website

This guide will walk you through setting up Supabase for your Nyxpro website, including authentication and database configuration.

## 1. Create a Supabase Project

1. Visit [supabase.com](https://supabase.com) and sign up/sign in
2. Click "New Project"
3. Choose your organization
4. Fill in project details:
   - **Name**: `nyxpro-website`
   - **Database Password**: Generate a strong password and save it securely
   - **Region**: Choose closest to your target audience
5. Wait for the project to be created (usually takes 2-3 minutes)

## 2. Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy the following values:
   - **Project URL** (starts with `https://`)
   - **Project API Keys** > **anon public** (for client-side operations)
   - **Project API Keys** > **service_role** (for server-side operations - keep this secure!)

## 3. Configure Environment Variables

1. Create a `.env.local` file in your project root (copy from `env.example`):

```bash
# Copy env.example to .env.local
cp env.example .env.local
```

2. Update `.env.local` with your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Application Configuration
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=http://localhost:3000
```

## 4. Set Up Database Schema

### A. User Profiles Table

1. In Supabase dashboard, go to **SQL Editor**
2. Run this SQL to create the profiles table:

```sql
-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Create function to handle user registration
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (
        NEW.id,
        NEW.email,
        COALESCE(NEW.raw_user_meta_data->>'full_name', '')
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user registration
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### B. Contact Messages Table

```sql
-- Create contacts table for form submissions
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy (only authenticated users can insert)
CREATE POLICY "Authenticated users can submit contacts" ON public.contacts
    FOR INSERT TO authenticated WITH CHECK (true);

-- Create policy for admin access (you'll need to set user roles)
CREATE POLICY "Service role can view all contacts" ON public.contacts
    FOR ALL USING (auth.jwt()->>'role' = 'service_role');
```

## 5. Configure Authentication Settings

1. In Supabase dashboard, go to **Authentication** > **Settings**
2. Configure the following:

### Site URL

- **Site URL**: `http://localhost:3000` (for development)
- **Redirect URLs**: `http://localhost:3000/**` (for development)

_Note: Update these for production deployment_

### Email Templates

Customize the email templates for:

- **Confirm signup**
- **Magic link**
- **Change email address**
- **Reset password**

Add your Nyxpro branding to these templates.

### Auth Providers

Configure any social auth providers you want:

- Google
- GitHub
- Facebook
- LinkedIn (matches your social links!)

## 6. Testing Authentication

1. Start your development server:

```bash
npm run dev
```

2. Visit `http://localhost:3000`
3. Click "Get Started" to open the auth modal
4. Test both sign up and sign in functionality
5. Check your Supabase dashboard **Authentication** > **Users** to see registered users

## 7. Implementing Contact Form Submission

Update your `Connect.tsx` component to handle form submissions:

```typescript
// In src/components/Connect.tsx, add this function
const handleContactSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  try {
    const { error } = await supabase.from("contacts").insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        company: formData.company || null,
        message: formData.message,
      },
    ]);

    if (error) throw error;

    // Reset form and show success message
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      message: "",
    });
    alert("Message sent successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error sending message. Please try again.");
  } finally {
    setLoading(false);
  }
};
```

## 8. Production Deployment

### Environment Variables for Production

Update your production environment with:

- Production Supabase URL and keys
- Production domain in `NEXTAUTH_URL`
- Update Supabase site URL and redirect URLs

### Database Security

1. Review and adjust Row Level Security policies
2. Set up proper user roles if needed
3. Configure backup and monitoring

### Performance Optimization

1. Enable database replication if needed
2. Set up connection pooling for high traffic
3. Configure CDN for static assets

## 9. Advanced Features

### User Dashboard

Create a protected user dashboard:

```typescript
// src/app/dashboard/page.tsx
"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) return <div>Loading...</div>;
  if (!user) return null;

  return (
    <div>
      <h1>Welcome, {user.email}!</h1>
      {/* Dashboard content */}
    </div>
  );
}
```

### Real-time Features

Enable real-time subscriptions for live updates:

```typescript
// Listen to contact form submissions in real-time
useEffect(() => {
  const subscription = supabase
    .channel("contacts")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "contacts" },
      (payload) => {
        console.log("New contact submitted:", payload.new);
        // Update UI accordingly
      }
    )
    .subscribe();

  return () => {
    subscription.unsubscribe();
  };
}, []);
```

## 10. Security Best Practices

1. **Never expose service role key** on the client side
2. Use **Row Level Security** for all tables
3. Validate all user inputs on both client and server side
4. Implement **rate limiting** for form submissions
5. Use **proper error handling** without exposing sensitive information
6. Regularly **audit user permissions** and access patterns

## 11. Monitoring and Analytics

1. Set up Supabase **monitoring** in the dashboard
2. Enable **database logs** for debugging
3. Monitor **authentication events**
4. Track **API usage** and performance
5. Set up **alerts** for unusual activity

## Next Steps

1. Follow this guide to set up your Supabase project
2. Test authentication thoroughly
3. Implement the contact form submission
4. Deploy to production
5. Monitor and optimize performance

For additional help, refer to:

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase Auth Helpers](https://supabase.com/docs/guides/auth/auth-helpers)

## Support

If you encounter any issues:

1. Check the Supabase logs in your dashboard
2. Review the browser console for errors
3. Ensure environment variables are correctly set
4. Verify database policies and permissions
