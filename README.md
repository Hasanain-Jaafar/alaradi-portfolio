# ✨ Alaradi Portfolio

https://hasseonline.cloud/

A clean, modern portfolio website built to showcase my work. Dark theme with subtle dark-blue gradients, fully responsive, and optimized for performance.

---

## 🚀 What's This?

A personal portfolio with:

- **Services** — What I offer
- **Blog** — My thoughts and tutorials
- **About** — Who I am
- **Contact** — Get in touch via a working email form

Built with modern web tech, fully responsive, and lightning fast.

---

## 🛠️ Built With

**Core:**

- Next.js 16.1.1 — React framework
- Tailwind CSS — Styling

**Features:**

- Resend — Contact form emails
- Lucide React — Icons
- Google Fonts — Typography

**Why these?** All free, well-documented, and perfect for portfolios.

---

## 🎨 Design Highlights

- **Dark minimal aesthetic** — Easy on the eyes
- **Dark blue → light blue gradients** — For the main website theme
- **Poppins + Limelight fonts** — Modern and readable
- **Mobile-first** — Looks great on any device

---

## 💻 Run It Locally

Want to see how it works or use it as a template? Here's how:

### 1. Clone it

```bash
git clone https://github.com/Hasanain-Jaafar/alaradi-portfolio.git
cd alaradi-portfolio
```

### 2. Install stuff

```bash
npm install
```

### 3. Add your email API key

Create a file called `.env.local` in the root folder:

```
RESEND_API_KEY=your_key_here
CONTACT_EMAIL=your@email.com
```

Get a free API key from [resend.com](https://resend.com) (3,000 emails/month free).

### 4. Start the dev server

```bash
npm run dev
```

Go to `http://localhost:3000` in your browser. Done! 🎉

---

## 📁 Project Structure

```
src/app/
├── components/        # Reusable pieces (navbar, footer, buttons)
├── about/            # About page
├── services/         # Services page
├── blogs/            # Blog listing
├── contact/          # Contact form
├── layout.jsx        # Site-wide layout
└── page.jsx          # Homepage
```

Simple and organized.

---

## 🌐 Deploy It

### Easiest way: Vercel OR Netlify

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) OR [netlify.com](https://www.netlify.com) and sign in
3. Click "New Project" → import your repo
4. Add your environment variables (`RESEND_API_KEY`)
5. Click "Deploy"

**That's it.** Your site goes live in ~2 minutes, for free.

---

## 🎨 Customize It

### Change the colors

Edit `globals.css`:

```javascript
@theme {
  /* ? ====== CUSTOM COLORS ====== */
  /*  */
  --color-primary: #ff6f91;
  /*  */
  /* ? ===== TEXT COLORS ===== */
  /*  */
  --color-bg-secondary: #313131;
  --color-paragraph: white;
  --color-text: rgba(215, 215, 215, 0.8);
  --color-text-light: #ddd;
  --color-bg-accent: #f54a00;
  /*  */
  }
```

### Change the fonts

Add in `globals.css` any [Google Font](https://fonts.google.com/).
```javascript
@import url(google_Font);
```

### Add blog posts

Drop `.mdx` files in the blog folder. Markdown + React components = easy content creation.


---

## 📝 License

Free to use under the MIT License. Fork it, customize it, make it yours. Just give credit if you use it as-is!

---
<br>
