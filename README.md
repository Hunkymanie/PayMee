# PayMe - Financial Dashboard with Supabase Authentication

A modern, responsive financial dashboard built with Next.js 15, React 19, TypeScript, and Supabase authentication.

## Features

### 🔐 Authentication
- **Google OAuth** sign-in via Supabase
- Protected routes with authentication middleware
- User profile management with avatar support
- Secure logout functionality

### 📊 Dashboard
- Real-time financial overview
- Interactive charts and analytics
- Transaction management
- Card management with flip animation
- Spending breakdown and insights

### 🎨 Modern UI/UX
- Responsive design with Tailwind CSS
- Glassmorphism effects and animations
- Mobile-first approach
- Dark mode ready

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Authentication**: Supabase Auth with Google OAuth
- **Charts**: Recharts
- **Icons**: Heroicons
- **Build Tool**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Supabase account
- Google OAuth credentials (for authentication)

### 1. Clone the Repository

```bash
git clone https://github.com/hunkymanie/paymee.git
cd paymee
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. **Create a Supabase Project**
   - Go to [supabase.com](https://supabase.com)
   - Create a new project
   - Wait for the database to set up

2. **Configure Google OAuth**
   - In your Supabase dashboard, go to Authentication > Providers
   - Enable Google provider
   - Add your Google OAuth credentials:
     - Client ID
     - Client Secret
   - Set the redirect URL to: `http://localhost:3000/auth/callback`

3. **Get Your Supabase Credentials**
   - Go to Settings > API
   - Copy your project URL and anon public key

### 4. Environment Setup

1. **Copy the environment example**:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Update .env.local** with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

### 5. Configure Google OAuth (Optional - for production)

If you want to set up Google OAuth:

1. **Google Cloud Console**:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select existing
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URIs:
     - `http://localhost:3000/auth/callback` (development)
     - `https://your-domain.com/auth/callback` (production)

2. **Add credentials to Supabase**:
   - In Supabase dashboard: Authentication > Providers > Google
   - Add your Client ID and Client Secret

### 6. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Authentication Flow

### How It Works

1. **User visits protected route** → Redirected to login page
2. **User clicks "Continue with Google"** → Redirected to Google OAuth
3. **Google authentication** → Redirected back via Supabase
4. **Callback processing** → Session established, redirected to dashboard
5. **Protected routes** → User can access dashboard features

### Key Components

- **UserProvider**: Manages authentication state globally
- **ProtectedRoute**: Wrapper component for authenticated pages
- **Middleware**: Handles session refresh and routing
- **Login page**: Google OAuth interface
- **Callback handler**: Processes authentication response

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── auth/              # Authentication routes
│   │   ├── callback/      # OAuth callback handler
│   │   └── auth-code-error/ # Error handling
│   ├── login/             # Login page
│   └── (dashboard)/       # Protected dashboard routes
├── components/            # React components
│   ├── auth/             # Authentication components
│   ├── providers/        # Context providers
│   └── layout/           # Layout components
├── lib/                  # Utilities and configurations
│   └── supabase/         # Supabase client configuration
├── hooks/                # Custom React hooks
├── data/                 # Mock data and types
└── config/               # App configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Authentication Features

### Current Implementation

✅ **Google OAuth Sign-in**
✅ **Protected Routes** 
✅ **User Session Management**
✅ **Automatic Session Refresh**
✅ **User Profile Display**
✅ **Secure Logout**
✅ **Error Handling**

### User Experience

- **Seamless Authentication**: One-click Google sign-in
- **Session Persistence**: Users stay logged in across browser sessions
- **Automatic Redirects**: Users are redirected back to intended pages after login
- **Loading States**: Smooth loading indicators during authentication
- **Error Handling**: Clear error messages for authentication issues

## Customization

### Adding New OAuth Providers

1. Enable the provider in Supabase dashboard
2. Update the login page with new provider button
3. Configure provider-specific settings

### Modifying User Data

- User information is stored in Supabase Auth
- Profile data accessible via `user.user_metadata`
- Avatar, name, and email automatically synced from Google

### Styling

- All authentication components use Tailwind CSS
- Consistent with the overall app design system
- Responsive and mobile-friendly

## Deployment

### Vercel (Recommended)

1. **Deploy to Vercel**:
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Environment Variables**:
   - Add your Supabase credentials to Vercel environment variables
   - Update Google OAuth redirect URLs for production domain

3. **Supabase Configuration**:
   - Update Site URL in Supabase to your production domain
   - Add production domain to redirect URLs

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## Troubleshooting

### Common Issues

1. **"Missing Supabase environment variables"**
   - Ensure `.env.local` has correct Supabase URL and key
   - Check that variables start with `NEXT_PUBLIC_`

2. **Google OAuth not working**
   - Verify Google OAuth credentials in Supabase
   - Check redirect URLs match exactly
   - Ensure Google+ API is enabled

3. **Session not persisting**
   - Check that middleware is configured correctly
   - Verify Supabase project settings

4. **Build errors**
   - Ensure all environment variables are set
   - Check that Supabase credentials are valid

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test authentication flow
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions:
- Create an issue on GitHub
- Check Supabase documentation
- Review Next.js authentication guides

---

Built with ❤️ using Next.js, Supabase, and modern web technologies.