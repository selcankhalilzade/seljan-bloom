# Seljan

A boutique browse site for **Seljan**, a handmade knit studio of beanies, scarves, and charms. The six-petal flower and peach-and-terracotta palette come from the brand board. There is no checkout yet — visitors browse the studio table and write to ask about a piece.

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
