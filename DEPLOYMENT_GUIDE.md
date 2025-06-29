# NYXPRO Website - Vercel Deployment Guide

## 🚀 Pre-Deployment Checklist

Your website is now ready for Vercel deployment! Here's what has been prepared:

### ✅ Configuration Files Created/Updated:

- **vercel.json** - Optimized Vercel deployment configuration
- **next.config.js** - Enhanced with production optimizations
- **.gitignore** - Comprehensive file exclusions
- **layout.tsx** - Fixed metadata warnings

### 📋 Environment Variables Needed:

Based on your `env.example` file, you'll need to set up these environment variables in Vercel:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
```

## 🌐 Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended for beginners)

1. **Create Vercel Account**

   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Connect Your Repository**

   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

3. **Configure Environment Variables**

   - In the "Configure Project" section, expand "Environment Variables"
   - Add each variable from the list above
   - Set all variables for "Production", "Preview", and "Development"

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your site automatically
   - You'll get a live URL (e.g., `https://nyxpro-website.vercel.app`)

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy from Project Directory**
   ```bash
   vercel
   ```
4. **Follow the prompts:**

   - Link to existing project or create new one
   - Configure settings
   - Add environment variables when prompted

5. **Set Environment Variables** (if not done during setup)

   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   vercel env add SUPABASE_SERVICE_ROLE_KEY
   vercel env add NEXTAUTH_SECRET
   vercel env add NEXTAUTH_URL
   vercel env add NEXT_PUBLIC_SITE_URL
   ```

6. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

## 🔧 Post-Deployment Configuration

### 1. Update Environment Variables

After getting your Vercel domain, update these variables:

- `NEXTAUTH_URL` → Your actual Vercel domain
- `NEXT_PUBLIC_SITE_URL` → Your actual Vercel domain

### 2. Custom Domain (Optional)

If you have a custom domain:

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed
5. Update environment variables to use your custom domain

### 3. Supabase Configuration

Make sure your Supabase project allows your new domain:

1. Go to Supabase Dashboard
2. Project Settings → API
3. Add your Vercel domain to "Site URL"
4. Update redirect URLs for authentication

## 🚨 Common Issues & Solutions

### Build Fails

- **Issue**: Build errors in Vercel
- **Solution**: Run `npm run build` locally first to catch errors

### Environment Variables Not Working

- **Issue**: App not connecting to Supabase
- **Solution**: Double-check all environment variables are set correctly

### Images Not Loading

- **Issue**: Images showing broken links
- **Solution**: Ensure all image paths start with `/` for absolute paths

### Authentication Redirect Issues

- **Issue**: Auth redirects to localhost
- **Solution**: Update `NEXTAUTH_URL` to your Vercel domain

## 📱 Testing Your Deployment

After deployment, test these features:

- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Images display properly
- [ ] Supabase authentication (if applicable)
- [ ] Contact forms work
- [ ] Mobile responsiveness
- [ ] Page load speed (check Vercel Analytics)

## 🔄 Continuous Deployment

Your site is now set up for automatic deployments:

- **Production**: Pushes to `main` branch auto-deploy to production
- **Preview**: Pushes to other branches create preview deployments
- **Pull Requests**: Get preview URLs for testing changes

## 📊 Monitoring

Vercel provides built-in analytics:

- Go to your project dashboard
- Enable Vercel Analytics for insights
- Monitor performance and usage

## 🎉 Your Site is Live!

Your NYXPRO website should now be live at your Vercel URL. Share the link and start attracting clients!

### Next Steps:

1. Set up Google Analytics (optional)
2. Submit sitemap to Google Search Console
3. Set up monitoring for uptime
4. Consider Vercel Pro for additional features

---

**Need Help?**

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- Contact Vercel Support if needed

**Congratulations! 🎊 Your professional NYXPRO website is now live!**
