
## calebbenjin.io

* Framework: Next.js
* Database: PlanetScale
* ORM: Prisma
* Authentication: NextAuth.js
* Deployment: Vercel
* Content: MDX
* Styling: Styled-Components


## Overview
***

* `data/*` - MDX data that is used for blogs, newsletters, and code snippets.
* `layouts/*` - The different page layouts each MDX category (blog, newsletter, snippets) uses.
* `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
* `pages/api/*` - API routes powering /dashboard, newsletter subscription, guestbook, and post views.
* `pages/blog/*` - Static pre-rendered blog pages using MDX.
* `pages/dashboard` - Personal dashboard tracking metrics.
* `pages/*` - All other static pages.
* `prisma/*` - My Prisma schema, which uses a PlanetScale MySQL database.
* `public/*` - Static assets including fonts and images.
* `scripts/*` - Two useful scripts to generate an RSS feed and a sitemap.
* `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.
