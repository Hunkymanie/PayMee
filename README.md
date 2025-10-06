<<<<<<< HEAD
# 💰 PayMe - Modern Financial Dashboard

A beautiful, responsive financial dashboard built with Next.js 15, React 19, and TypeScript. PayMe provides comprehensive financial management capabilities with modern UI/UX design patterns.

## ✨ Features

### 🏠 **Dashboard Overview**
- Real-time account balance display
- Money in/out tracking with growth indicators
- Interactive balance chart with historical data
- Recent transactions overview
- Quick action buttons for common tasks

### 📊 **Analytics & Insights**
- Spending breakdown by category (pie chart)
- Income vs expenses trends (line chart)
- Monthly financial performance metrics
- Visual data representation with Recharts

### 💳 **Transaction Management**
- Comprehensive transaction history
- Advanced filtering and search capabilities
- Transaction status tracking (completed, pending, failed)
- Export functionality for financial records

### 🃏 **Card Management**
- Multiple payment card support
- Card balance and status overview
- 3D card flip animations
- Add/remove card functionality

### ⚙️ **Settings & Profile**
- User profile management
- Security settings
- Notification preferences
- Account customization

## 🚀 Tech Stack

### **Frontend Framework**
- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type safety and enhanced developer experience

### **Styling & UI**
- **Tailwind CSS v4** - Utility-first CSS framework
- **Custom CSS** - Advanced animations and glassmorphism effects
- **Heroicons** - Beautiful SVG icons
- **Responsive Design** - Mobile-first approach

### **Data Visualization**
- **Recharts** - Powerful charting library for React
- **Interactive Charts** - Line charts, pie charts, area charts

### **Development Tools**
- **Turbopack** - Fast bundler for Next.js
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing

## 📁 Project Structure

```
paymee/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Dashboard homepage
│   │   ├── analytics/         # Financial analytics
│   │   ├── transactions/      # Transaction management
│   │   ├── cards/            # Payment cards
│   │   └── settings/         # User settings
│   │
│   ├── components/           # Reusable UI components
│   │   ├── DashboardLayout.tsx    # Main layout wrapper
│   │   ├── BalanceChart.tsx       # Balance visualization
│   │   ├── TransactionList.tsx    # Transaction table
│   │   ├── AnalyticsCharts.tsx    # Analytics charts
│   │   └── ...more components
│   │
│   ├── data/                # Mock data for development
│   │   └── mock.ts         # Sample transactions and users
│   │
│   ├── lib/                # Utility functions
│   │   └── utils.ts       # Formatters and helpers
│   │
│   └── types/             # TypeScript type definitions
│       └── index.ts      # Interface definitions
│
├── public/               # Static assets
├── package.json         # Dependencies and scripts
├── tailwind.config.ts  # Tailwind configuration
└── tsconfig.json      # TypeScript configuration
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/hunkymanie/paymee.git
   cd paymee
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue (#2563eb)
- **Background**: Gradient from #fafbff to #f1f5f9
- **Text**: Slate gray (#1e293b)
- **Success**: Green (#10b981)
- **Warning**: Amber (#f59e0b)
- **Error**: Red (#ef4444)

### **Typography**
- **Font**: System UI font stack
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### **Components**
- **Glassmorphism Cards**: Semi-transparent backgrounds with blur
- **Smooth Animations**: CSS transitions and transforms
- **Responsive Grid**: CSS Grid and Flexbox layouts

## 🔧 Configuration

### **TypeScript Configuration**
- Strict mode enabled for maximum type safety
- Path mapping with `@/*` aliases
- Modern ES features support

### **Tailwind CSS**
- Custom utility classes for cards and effects
- CSS variables for theming
- Responsive design utilities

## 📊 Data Management

Currently uses mock data for demonstration purposes. The application is structured for easy integration with real APIs:

- **Type-safe interfaces** for all data structures
- **Consistent data format** across components
- **Easy migration path** to real backend services

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
npm run build
npx vercel --prod
```

### **Netlify**
```bash
npm run build
# Deploy the .next folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **Next.js team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Recharts** for beautiful data visualization
- **Heroicons** for the icon library

---

⭐ **Star this repository if you found it helpful!**
=======
# PayMee
Fintech dashboard
>>>>>>> c4e932791aec3cb134e214d12c639c7441710010
