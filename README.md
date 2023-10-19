## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

![image](https://github.com/BekBrace/SolidJs_Supabase_Auth/assets/60483846/674f8b70-7e00-486c-941e-e07e82a1fc6b)

![image](https://github.com/BekBrace/SolidJs_Supabase_Auth/assets/60483846/ba8d4d76-9ef2-4b35-a164-ad8a5e2ac473)

# Bek Brace YouTube Channel

# Solid.js Authentication with Supabase

This repository contains a Solid.js application that demonstrates how to integrate authentication with Supabase.

## Prerequisites

Before you get started, make sure you have the following installed:

- Node.js and npm (Node Package Manager)
- Supabase account (for authentication and database)

## Getting Started

1. Clone this repository to your local machine.

   ```bash
   git clone https://github.com/your-username/solidjs-supabase-auth.git
   ```
2. Navigate to the project directory:
   ```bash
   cd solidjs-supabase-auth
   ```
3. Install project dependencies:
 ```bash
    npm install
 ```
4. Create a Supabase project and set up authentication.

Sign up for a Supabase account: https://app.supabase.io/
Create a new project and obtain the API URL and public key.

5. Configure Supabase credentials:
Create a .env.local file in the project root and add your Supabase credentials:
```bash
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLIC_KEY
```
6. Start the Solid.js development server:
   ```bash
   npm run dev
   ```
   
# Application Structure

components/Register.js: Register component for user registration.

components/Login.js: Login component for user authentication.

components/Dashboard.js: Dashboard component for the authenticated user.

Additional Resources
For more details on Solid.js and Supabase:

Solid.js documentation: https://solidjs.com/docs/latest

Supabase documentation: https://supabase.io/docs

Author
Bek Brace [Amir Bekhit]

 # Generic Reamde.md file 

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
