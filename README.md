This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Supabase

Create a `.env.local` file using `.env.example` as a reference:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

The app expects:

- a public storage bucket named `plant-photos`
- a `photo_records` table for submitted plant records
- a `quiz_sessions` table for completed quiz sessions

## Manual de botanica

El PDF fuente esta en `public/`. Para ahorrar trabajo repetido, se puede extraer a texto local por paginas:

```bash
npm run extract:manual
```

Tambien se puede extraer un rango chico:

```bash
npm run extract:manual:pages -- --start 184 --end 190
```

El texto queda en `manual-text/pages/`. La pagina 1 impresa del manual empieza en la pagina 8 del PDF, entonces:

```txt
manualPage = pdfPage - 7
```

El estado de carga esta en `docs/progreso-manual.md`.

Para validar referencias internas de claves y especies:

```bash
npm run validate:data
```

Run the SQL in `supabase/setup-auth-records.sql` from the Supabase SQL editor to:

- add `user_id` and `plant_number`
- enable row level security
- restrict records to signed-in `@agro.uba.ar` users
- allow photo uploads into each user's storage folder

In Supabase Auth, enable email sign-in and add the production URL to the allowed redirect URLs:

```txt
https://botanicasis.netlify.app/**
```

## Deploy on Netlify

This project includes `netlify.toml`.

Netlify settings:

```txt
Build command: npm run build
Publish directory: .next
Node version: 22
```

Add these environment variables in Netlify:

```txt
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
```

For Next.js 13.5+ Netlify detects the framework and applies the Next.js adapter automatically.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
