# Flash Forward - Nonprofit Website

## Overview

Flash Forward is a modern, responsive nonprofit website built for a student-led organization focused on designing and distributing solar-powered flashlights to children in off-grid communities. The application is built using a full-stack TypeScript architecture with React frontend and Express backend, leveraging modern web development practices and tools.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: connect-pg-simple for PostgreSQL session storage

### Development Environment
- **Development Server**: Vite dev server with HMR
- **TypeScript**: Strict configuration with path mapping
- **Bundling**: ESBuild for server-side bundling
- **Replit Integration**: Custom plugins for development environment

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: User management system with username/password authentication
- **Migrations**: Database migrations managed through Drizzle Kit
- **Storage Interface**: Abstracted storage layer with in-memory fallback for development

### UI Components
The application uses a comprehensive component library including:
- Navigation with smooth scrolling and mobile responsiveness
- Hero section with animated content reveals
- About section highlighting mission and values
- Team section showcasing core members
- Impact section with animated counters
- Product section detailing flashlight specifications
- Blog section for updates and stories
- Partnership section showing collaborations
- FAQ section with collapsible content
- Footer with newsletter signup and contact information

### Custom Hooks
- `useScrollAnimation`: Intersection Observer-based animations
- `useCounterAnimation`: Animated number counters with scroll triggers
- Standard React Query hooks for data fetching

## Data Flow

### Frontend Data Flow
1. React components use TanStack Query for server state
2. Custom hooks manage UI interactions and animations
3. Form data flows through React Hook Form with Zod validation
4. API requests use custom fetch wrapper with error handling

### Backend Data Flow
1. Express routes handle HTTP requests
2. Storage interface abstracts database operations
3. Drizzle ORM manages database queries and migrations
4. Session middleware handles user authentication

### Database Schema
- **Users Table**: Basic user management with username/password
- **Schema Validation**: Zod schemas for type-safe data validation
- **Type Safety**: Full TypeScript integration with database types

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI component primitives
- **wouter**: Lightweight React router
- **zod**: Runtime type validation

### Development Dependencies
- **tsx**: TypeScript execution for development
- **vite**: Build tool and development server
- **tailwindcss**: Utility-first CSS framework
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

### UI and Styling
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **tailwind-merge**: Tailwind class merging utility
- **lucide-react**: Icon library

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: ESBuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **Development**: Uses tsx for hot reloading with Vite middleware
- **Production**: Serves static files from Express with built React app
- **Database**: Requires `DATABASE_URL` environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Static file serving capability
- Environment variable support

## Changelog
- July 01, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.