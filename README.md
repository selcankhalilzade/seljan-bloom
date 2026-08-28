# Seljan

A boutique browse site for **Seljan**, a handmade knit studio of beanies, scarves, and charms. The public homepage is a **coming soon** waitlist. The catalog still lives at `/shop` if you need it privately.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43127](http://localhost:43127). The app uses Next.js, Tailwind CSS, and shadcn/ui.

## What’s here

- Home, shop (filter by beanies / scarves / charms), piece pages, about, and contact
- Sample catalog you can replace with real photos and prices
- Contact form that posts to `/api/inquire` (logged locally; plug in email later)

Brand files live in `public/brand/` and `public/flower.svg`. Product copy lives in `src/lib/products.ts`.

## Put it on your domain

This preview is only running in Cursor. A public site needs two things: a GitHub repo, and a host that serves Next.js.

### 1. Put the code on GitHub

If this is still a new project without a repository, click **Create repo** in Cursor, then push. You need that GitHub URL for the next step.

### 2. Deploy on Vercel (recommended)

Vercel is built for Next.js. A hobby account is enough for this site.

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. **Add New → Project**, import the Seljan repo.
3. Leave the defaults (Next.js is detected). Click **Deploy**.
4. When it finishes you get a URL like `seljan.vercel.app`. That is already a live website.

Later pushes to `main` redeploy automatically.

Netlify or Cloudflare Pages also work if you prefer those.

### 3. Connect your domain

Buy the name wherever you like (Namecheap, Google Domains / Squarespace, Cloudflare, GoDaddy). Then in Vercel:

1. Open the project → **Settings → Domains**.
2. Add `yourdomain.com` and `www.yourdomain.com`.
3. Vercel shows the DNS records to add. Typical setup:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `76.76.21.21` (or whatever Vercel shows on the domain card) |
| CNAME | `www` | the CNAME target on that same card (often `cname.vercel-dns.com`) |

4. In your domain registrar’s DNS panel, add those records. Wait until they propagate (often minutes, sometimes a few hours).
5. Vercel issues HTTPS for you. When the domain is **Valid**, `https://yourdomain.com` is the shop.

If the registrar offers “connect to Vercel” or nameserver delegation, you can use that instead of typing records by hand.

### 4. Still before you call it finished

- Replace knit placeholders with photos in `public/` and update `src/lib/products.ts`.
- Add real Instagram / TikTok / email links in the footer.
- The contact form currently only logs inquiries on the server. To receive them in your inbox, plug Resend, Formspree, or a similar service into `src/app/api/inquire/route.ts`.

You do not need checkout, a database, or a custom server to launch this browse site.
