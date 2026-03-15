 Meet AI
 Meet AI is a revolutionary AI-powered video calling SaaS platform where every meeting includes an AI agent trained for a specific role that actively participates in the conversation in real time. 

Pasted text

Overview

 Meet AI transforms traditional video conferencing by integrating intelligent AI agents directly into live meetings.

These agents can act as:

Language tutors

Interview coaches

Sales assistants

Custom AI roles

The AI doesn't just observe — it actively helps during the conversation in real time. 

Pasted text

Key Features

Real-time AI responses powered by OpenAI Realtime API

Live video meetings using Stream Video SDK

Type-safe full stack with tRPC and TanStack Query

Modern React stack with Next.js 15 and React 19

Server-side rendering and server components for performance

Motivation

Traditional video conferencing platforms are passive. They allow communication but do not actively participate.

My Meet AI solves this by enabling AI agents that can:

Assist in real time during meetings

Adapt to specific roles (tutor, coach, sales, etc.)

Scale personalized interactions

Create interactive meeting experiences

Examples of use cases:

Practicing interviews

Learning languages

Sales training

AI assistants during meetings

Quick Start
Prerequisites

Node.js 20+

PostgreSQL database (Neon recommended)

Required accounts:

Stream (Video SDK)

OpenAI (Realtime API)

Polar (Payments)

Inngest (Background jobs)

Installation
1. Clone the Repository
git clone <repository-url>
cd my-meet-ai
2. Install Dependencies
npm install

or

pnpm install

or

yarn install
3. Environment Variables

Create .env.local:

# Database
DATABASE_URL=

# Stream Video SDK
NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=

# OpenAI
OPENAI_API_KEY=

# Authentication
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000

# Payments
POLAR_ACCESS_TOKEN=
POLAR_WEBHOOK_SECRET=

# Background Jobs
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
4. Setup Database
npm run db:push
5. Start Development Server
npm run dev

Run Inngest server in another terminal:

npm run dev:inngest

Open:

http://localhost:3000
Development Scripts
Command	Purpose
npm run dev	Start development server
npm run build	Production build
npm run start	Start production server
npm run lint	Run ESLint
npm run db:push	Push database schema
npm run db:studio	Open Drizzle database GUI
npm run dev:inngest	Start background job server
Usage
Creating an AI Agent

Go to Agents in the dashboard

Click Create New Agent

Configure:

Name – agent name

Instructions – define the AI role (e.g., tutor, interview coach)

Starting a Meeting

Go to Meetings

Click New Meeting

Select an AI agent

Click Start Meeting

The AI agent joins the call automatically.

During a Call

Features available:

Real-time AI interaction

Mute/unmute

Camera controls

Screen sharing

Meeting recording

Customizing AI Behavior

Agents can be customized through:

System prompts

Role-specific training

Meeting context

This allows the AI to behave differently depending on the meeting type.

Tech Stack
Frontend

Next.js 15

React 19

TypeScript

Backend

tRPC

TanStack Query

Next.js API routes

Database

PostgreSQL

Drizzle ORM

Neon

UI

Tailwind CSS v4

Shadcn UI

Radix UI

Authentication & Payments

Better Auth

Polar

Real-time Infrastructure

Stream Video SDK

Stream Chat SDK

OpenAI Realtime API

Background Jobs

Inngest

Contributing
Steps

Fork the repository

Create a branch

git checkout -b feature/your-feature-name

Make changes

Test your changes

npm run lint
npm run build

Submit a pull request

Code Guidelines

Use TypeScript

Follow ESLint rules

Use Prettier

Write clear variable names

Comment complex logic

Reporting Issues

When reporting bugs include:

Clear title and description

Steps to reproduce

Expected vs actual behavior

Environment details (OS, Node version)

Development Principles

Type Safety using TypeScript and tRPC

Server Components for performance

Error Handling with proper boundaries

Accessibility using WCAG guidelines

Performance optimization
