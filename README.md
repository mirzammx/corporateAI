
# My Meet AI

**My Meet AI** is a revolutionary AI-powered video calling SaaS platform where every meeting includes an **AI agent trained for a specific role** that actively participates in the conversation in real time.

---

# Overview

My Meet AI transforms traditional video conferencing by integrating **intelligent AI agents directly into live meetings**.

These agents can act as:

- Language tutors  
- Interview coaches  
- Sales assistants  
- Custom AI roles  

The AI doesn't just observe — it **actively helps during the conversation in real time**.

---

# Key Features

- Real-time AI responses powered by **OpenAI Realtime API**
- Live video meetings using **Stream Video SDK**
- Full-stack type safety with **tRPC and TanStack Query**
- Modern React stack with **Next.js 15 and React 19**
- **Server-side rendering** and server components for performance

---

# Motivation

Traditional video conferencing platforms are **passive**. They allow communication but do not actively participate.

My Meet AI solves this by enabling AI agents that can:

- Provide real-time assistance during meetings
- Adapt to specific roles (tutor, coach, sales, etc.)
- Enable scalable personalized interactions
- Create interactive meeting experiences

Example use cases:

- Practicing interviews
- Learning languages
- Sales training
- AI assistants during meetings

---

# Quick Start

## Prerequisites

- Node.js **20+**
- PostgreSQL database (**Neon recommended**)

Required accounts:

- Stream (Video SDK)
- OpenAI (Realtime API)
- Polar (Payments)
- Inngest (Background jobs)

---

# Installation

## 1. Clone the Repository

```bash
git clone <repository-url>
cd my-meet-ai
2. Install Dependencies
npm install

or

pnpm install

or

yarn install
3. Environment Variables

Create .env.local

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
Command	Description
npm run dev	Start development server
npm run build	Build production version
npm run start	Start production server
npm run lint	Run ESLint
npm run db:push	Push database schema
npm run db:studio	Open Drizzle database GUI
npm run dev:inngest	Start Inngest dev server
Usage
Creating an AI Agent

Navigate to Agents in the dashboard

Click Create New Agent

Configure:

Name – Agent name

Instructions – Define AI role (e.g. tutor, interview coach)

Starting a Meeting

Go to Meetings

Click New Meeting

Select an AI agent

Click Start Meeting

The AI agent will join automatically.

During a Call

Features available:

Real-time AI interaction

Mute/unmute

Camera controls

Screen sharing

Recording meetings

Customizing AI Behavior

AI agents can be customized through:

System prompts

Role-specific training

Meeting context

This allows AI to behave differently depending on the meeting type.

Tech Stack
Frontend

Next.js 15

React 19

TypeScript

Backend

tRPC

TanStack Query

Next.js API Routes

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

Create a feature branch

git checkout -b feature/your-feature-name

Make your changes

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

Server Components for better performance

Proper error handling

Accessibility following WCAG guidelines

Performance optimization


If you want, I can also show you **how to upgrade this into a *
