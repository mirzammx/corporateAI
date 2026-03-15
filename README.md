 Meet AI
A revolutionary video calling SaaS platform powered by AI agents. Every meeting is a real-time call with an AI trained for a specific role, actively participating and helping during the conversation.

Description
My Meet AI transforms traditional video conferencing by integrating intelligent AI agents directly into live meetings. Whether you need a language tutor, interview coach, sales assistant, or a completely custom AI role, the AI agent is there to actively help during the call in real-time.

The platform leverages cutting-edge technology to deliver seamless, real-time AI interactions:

Real-time AI responses powered by OpenAI's Realtime API
Live video calls using Stream Video SDK
Full-stack type safety with tRPC and TanStack Query
Modern React with Next.js 15 and React 19
Server-side rendering and server components for optimal performance
Motivation
Traditional video conferencing tools are passive platforms—they facilitate communication but don't actively participate. My Meet AI was built to bridge this gap by introducing intelligent AI agents that can:

Provide real-time assistance during meetings, not just before or after
Adapt to specific roles and use cases (tutoring, coaching, sales, etc.)
Enable scalable, personalized interactions without human limitations
Create engaging, interactive experiences that go beyond simple video calls
Whether you're learning a new language, preparing for an interview, practicing sales pitches, or need a custom AI assistant, My Meet AI brings AI directly into your conversations.

Quick Start
Prerequisites
Node.js 20+ and npm/pnpm/yarn
PostgreSQL database (Neon recommended)
Accounts for:
Stream (Video SDK)
OpenAI (Realtime API)
Polar (Payments)
Inngest (Background jobs)
Installation
Clone the repository

git clone <repository-url>
cd my-meet-ai
Install dependencies

npm install
# or
pnpm install
# or
yarn install
Set up environment variables

Create a .env.local file in the root directory with the following variables:

# Database
DATABASE_URL=your_neon_postgresql_connection_string

# Stream Video SDK
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Better Auth
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# Polar (Payments)
POLAR_ACCESS_TOKEN=your_polar_access_token
POLAR_WEBHOOK_SECRET=your_polar_webhook_secret

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
Set up the database

npm run db:push
Start the development server

npm run dev
Start Inngest dev server (in a separate terminal)

npm run dev:inngest
Open your browser

Navigate to http://localhost:3000

Development Scripts
npm run dev - Start Next.js development server
npm run build - Build for production
npm run start - Start production server
npm run lint - Run ESLint
npm run db:push - Push database schema changes
npm run db:studio - Open Drizzle Studio (database GUI)
npm run dev:inngest - Start Inngest dev server for background jobs
Usage
Creating an AI Agent
Navigate to the Agents section in the dashboard
Click Create New Agent
Configure your agent:
Name: Give your agent a descriptive name
Instructions: Define the AI's role (e.g., "Language Tutor", "Interview Coach") and customize the AI's behavior
Starting a Meeting
Go to the Meetings section
Click New Meeting
Select an AI agent to join the call
Click Start Meeting
The AI agent will join automatically and respond in real-time
During a Call
Real-time AI interaction: The AI listens and responds naturally during the conversation
Video controls: Mute/unmute, turn camera on/off, share screen
Recording: Meetings can be recorded for later review
Customizing AI Behavior
AI agents can be customized through:

System prompts: Define the AI's personality, expertise, and behavior
Role-specific training: Configure responses for specific use cases
Meeting context: Provide background information before meetings start
Tech Stack
Frontend & Framework
Next.js 15 - React framework with App Router
React 19 - Latest React with server components
TypeScript - Type-safe development
Backend & API
tRPC - End-to-end type-safe APIs
TanStack Query - Powerful data synchronization
Next.js API Routes - Serverless API endpoints
Database & ORM
Drizzle ORM - TypeScript ORM
PostgreSQL - Relational database
Neon - Serverless Postgres platform
Styling & UI
Tailwind CSS v4 - Utility-first CSS framework
Shadcn/UI - Accessible component library
Radix UI - Unstyled, accessible components
Authentication & Payments
Better Auth - Modern authentication solution
Polar - Payment processing and subscriptions
Video & Real-time
Stream Video SDK - Video calling infrastructure
Stream Chat SDK - Real-time messaging
OpenAI Realtime API - Real-time AI interactions
Background Jobs
Inngest - Reliable background job processing
Contributing
We welcome contributions! Here's how you can help:

Getting Started
Fork the repository

Create a feature branch

git checkout -b feature/your-feature-name
Make your changes

Follow the existing code style
Write clear commit messages
Add tests if applicable
Test your changes

npm run lint
npm run build
Submit a pull request

Provide a clear description of your changes
Reference any related issues
Ensure all checks pass
Code Style
Use TypeScript for all new code
Follow the existing ESLint configuration
Use Prettier for code formatting (if configured)
Write meaningful variable and function names
Add comments for complex logic
Reporting Issues
If you find a bug or have a feature request:

Check existing issues to avoid duplicates
Create a new issue with:
Clear title and description
Steps to reproduce (for bugs)
Expected vs actual behavior
Environment details (OS, Node version, etc.)
Development Guidelines
Type Safety: Leverage TypeScript and tRPC for end-to-end type safety
Server Components: Prefer server components when possible for better performance
Error Handling: Use proper error boundaries and error states
Accessibility: Follow WCAG guidelines and use Shadcn/UI components
Performance: Optimize images, use server components, and minimize client-side JavaScript
