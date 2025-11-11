# Girish M S - Portfolio Website

A modern, responsive portfolio website built with Next.js 14 and Tailwind CSS, inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/).

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations and transitions
- **Fully Responsive**: Optimized for all screen sizes from mobile to desktop
- **Interactive Navigation**: Smooth scrolling with active section highlighting
- **Dark Theme**: Easy on the eyes with a professional dark color scheme
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Font**: Inter
- **Deployment**: Ready for Vercel/Netlify

## 📦 Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
portfolio-site/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Hero.tsx         # Hero section with name and links
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Work experience timeline
│   ├── Projects.tsx     # Featured projects
│   ├── Certifications.tsx # Certifications and awards
│   └── Footer.tsx       # Footer component
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

## ✏️ Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, title, and description
   - Update social media links (GitHub, LinkedIn, Email)

2. **About Section** (`components/About.tsx`):
   - Update bio and description

3. **Experience** (`components/Experience.tsx`):
   - Update work experience entries
   - Add/remove positions as needed

4. **Projects** (`components/Projects.tsx`):
   - Update project details
   - Add project links and technologies

5. **Certifications** (`components/Certifications.tsx`):
   - Update certifications and awards
   - The Google Drive link is already configured

### Add Resume PDFs

Place your resume PDFs in the `public` folder and update the link in `components/Experience.tsx`:

```typescript
<a href="/your-resume.pdf" ...>View Full Résumé</a>
```

## 🎨 Color Scheme

The portfolio uses a dark theme with teal/blue accents:

- Background: `slate-900` (#0f172a)
- Text: `slate-300` / `slate-400`
- Accent: `primary-300` / `primary-400` (teal/blue)
- Hover effects: Subtle opacity and color transitions

## 📱 Responsive Design

- **Mobile (<768px)**: Single column layout with mobile navigation
- **Tablet (768px-1024px)**: Enhanced spacing and typography
- **Desktop (>1024px)**: Two-column layout with sticky navigation

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

```bash
npm run build
npm run start
```

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspiration: [Brittany Chiang](https://brittanychiang.com/)
- Built by Girish M S
- Font: [Inter](https://rsms.me/inter/) by Rasmus Andersson

## 📧 Contact

- Email: gsaraswathipura@gmail.com
- LinkedIn: [girish-m-s](https://www.linkedin.com/in/girish-m-s/)
- GitHub: [girish-m-s](https://github.com/girish-m-s)

---

Made with ❤️ using Next.js and Tailwind CSS

