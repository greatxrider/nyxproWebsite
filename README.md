# Nyxpro Website - Professional Business Solutions Landing Page

A modern, responsive landing page for Nyxpro built with Next.js, TypeScript, Tailwind CSS, and Supabase for authentication and backend services.

## 🚀 Features

### Landing Page

- **Modern Hero Section** - Eye-catching introduction with company mission
- **Services Overview** - Comprehensive showcase of business solutions
- **About Section** - Founder profiles and company values
- **Connect Section** - Contact form and social media integration
- **Responsive Design** - Optimized for all devices and screen sizes
- **Accessibility** - WCAG compliant with proper ARIA labels and keyboard navigation

### Authentication System

- **User Registration** - Secure sign-up with email verification
- **User Login** - Password-based authentication
- **Password Reset** - Email-based password recovery
- **User Management** - Profile management and session handling
- **Protected Routes** - Secure areas for authenticated users

### Technical Features

- **TypeScript** - Full type safety throughout the application
- **Server-Side Rendering** - Fast initial page loads with Next.js App Router
- **Database Integration** - PostgreSQL with Supabase for data persistence
- **Real-time Updates** - Live data synchronization with Supabase Realtime
- **Modern UI/UX** - Clean design with smooth animations and transitions

## 🛠 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React for consistent iconography
- **Backend**: Supabase (PostgreSQL + Authentication + Realtime)
- **Deployment**: Vercel-ready configuration

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone <your-repo-url>
   cd nyxproWebsite
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   ```bash
   cp env.example .env.local
   ```

   Update `.env.local` with your Supabase credentials (see [Supabase Setup Guide](./SUPABASE_SETUP_GUIDE.md))

4. **Start the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Application Configuration
NEXTAUTH_SECRET=your_random_secret
NEXTAUTH_URL=http://localhost:3000
```

### Supabase Setup

Follow the comprehensive [Supabase Setup Guide](./SUPABASE_SETUP_GUIDE.md) to:

- Create your Supabase project
- Set up database tables
- Configure authentication
- Enable real-time features

## 📁 Project Structure

```
nyxproWebsite/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles and Tailwind imports
│   │   ├── layout.tsx          # Root layout with AuthProvider
│   │   └── page.tsx            # Landing page
│   ├── components/             # React components
│   │   ├── AuthProvider.tsx    # Authentication context provider
│   │   ├── AuthModal.tsx       # Login/signup modal
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Services.tsx        # Services showcase
│   │   ├── About.tsx           # About section with founders
│   │   ├── Connect.tsx         # Contact form and social links
│   │   └── Footer.tsx          # Site footer
│   ├── lib/
│   │   └── supabase.ts         # Supabase client configuration
│   └── types/
│       └── database.ts         # TypeScript database types
├── public/
│   └── images/                 # Static images and assets
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
```

## 🎨 Design System

### Color Palette

- **Primary**: Teal/cyan based theme (`primary-50` to `primary-900`)
- **Dark Mode**: Full dark theme support with `dark-50` to `dark-900`
- **Semantic Colors**: Success, warning, error states

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights with gradient text effects
- **Body**: Regular weight with proper line spacing

### Components

- **Buttons**: Primary and secondary variants with hover states
- **Cards**: Rounded corners with shadow and hover effects
- **Forms**: Consistent styling with focus states and validation

## 📱 Social Media Integration

The website includes prominent social media links to:

- **Facebook**: [facebook.com/nyxpro2022](https://www.facebook.com/nyxpro2022)
- **LinkedIn**: [linkedin.com/in/jephmari](https://www.linkedin.com/in/jephmari/)

Links are accessible in:

- Header navigation (desktop)
- Mobile menu
- Connect section
- Footer

## 🔐 Authentication Features

### User Authentication

- Email/password registration and login
- Email verification for new accounts
- Password reset functionality
- Persistent sessions with automatic refresh

### User Experience

- Modal-based authentication (no page redirects)
- Loading states and error handling
- Responsive design for all screen sizes
- Accessibility compliant

### Security

- Row Level Security (RLS) policies
- Secure session management
- Protected API routes
- Input validation and sanitization

## 📊 Database Schema

### Users Table (`profiles`)

- User profile information
- Automatic creation on signup
- User-controlled access policies

### Contacts Table (`contacts`)

- Contact form submissions
- Email notifications (optional)
- Admin access for review

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables for Production

- Update Supabase URLs for production
- Set secure `NEXTAUTH_SECRET`
- Update `NEXTAUTH_URL` to your domain

## 🧪 Testing

### Manual Testing Checklist

- [ ] Authentication flow (signup, login, logout)
- [ ] Responsive design on all devices
- [ ] Contact form submission
- [ ] Social media links
- [ ] Page navigation and scrolling
- [ ] Dark mode compatibility (if implemented)

### Automated Testing (Future Enhancement)

- Unit tests with Jest
- Component testing with Testing Library
- E2E tests with Playwright

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📈 Performance Optimizations

- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic with Next.js App Router
- **Font Optimization**: Google Fonts with `next/font`
- **Bundle Analysis**: Use `@next/bundle-analyzer` for optimization insights

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary to Nyxpro. All rights reserved.

## 📞 Support

For support or questions:

- Email: contact@nyxpro.com
- LinkedIn: [linkedin.com/in/jephmari](https://www.linkedin.com/in/jephmari/)
- Facebook: [facebook.com/nyxpro2022](https://www.facebook.com/nyxpro2022)

## 🎯 Next Steps

1. **Set up Supabase** following the [setup guide](./SUPABASE_SETUP_GUIDE.md)
2. **Customize content** with your actual business information
3. **Test authentication** thoroughly
4. **Deploy to production** with proper environment variables
5. **Monitor performance** and user engagement

---

Built with ❤️ by the Nyxpro Team
