# Portfolio Setup Instructions

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed (version 18 or higher):
```bash
node --version
```

If you don't have Node.js, download it from [nodejs.org](https://nodejs.org/)

### Installation Steps

1. **Navigate to the project directory:**
```bash
cd /Users/girishms/Documents/Portfolio/portfolio-site
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Customization Guide

### 1. Personal Information

#### Update Contact Details
Edit `components/Hero.tsx`:
- Line 8: Update your name
- Line 11-12: Update your title/role
- Line 14-15: Update your tagline
- Lines 46-120: Update social media links

#### Update About Section
Edit `components/About.tsx`:
- Lines 16-35: Update your bio and description

### 2. Work Experience

Edit `components/Experience.tsx`:
- Lines 3-48: Update the `experiences` array with your actual work history
- Each experience object should have:
  - `period`: Time period (e.g., "2023 — Present")
  - `title`: Your job title
  - `company`: Company name
  - `description`: What you did
  - `technologies`: Array of tech stack
  - `link`: Link to company website or project

Example:
```typescript
{
  period: '2023 — Present',
  title: 'Senior ML Engineer',
  company: 'Your Company',
  description: 'Your achievements and responsibilities...',
  technologies: ['Python', 'TensorFlow', 'AWS'],
  link: 'https://company.com',
}
```

### 3. Projects

Edit `components/Projects.tsx`:
- Lines 3-67: Update the `projects` array
- Add your own projects with:
  - `title`: Project name
  - `description`: What the project does
  - `technologies`: Tech stack used
  - `link`: Link to GitHub, live demo, or case study
  - `image`: (Optional) Path to project image

### 4. Certifications & Awards

Edit `components/Certifications.tsx`:
- Lines 3-31: Update the `certifications` array
- Lines 33-55: Update the `awards` array
- The Google Drive link on line 73 is already configured

### 5. Resume Links

The following resume PDFs are already in the `public/` folder:
- `MLE_Girish_Spura_Resume.pdf`
- `DE_Girish_Spura.pdf`
- `LLM_Girish_Spura_Resume.pdf`

To link to them, update `components/Experience.tsx` line 116:
```typescript
<a href="/MLE_Girish_Spura_Resume.pdf" ...>View Full Résumé</a>
```

### 6. Metadata & SEO

Edit `app/layout.tsx` (lines 7-17) to update:
- Page title
- Meta description
- Keywords
- Open Graph tags

## 🎨 Styling Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    // Change these values to your preferred colors
    300: '#7dd3fc',
    400: '#38bdf8',
  },
}
```

### Fonts

The site uses Inter font by default. To change:
1. Edit `app/layout.tsx` line 4
2. Import your preferred Google Font
3. Update the `font-sans` in `tailwind.config.ts`

## 📱 Testing

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Lint Check
```bash
npm run lint
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js
- Install dependencies
- Build the project
- Deploy to a live URL

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Or connect your Git repository for automatic deployments

### Custom Domain

After deploying, you can add a custom domain:
- **Vercel**: Project Settings → Domains
- **Netlify**: Site Settings → Domain Management

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

### Build Errors
Clear cache and reinstall:
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Styling Issues
Rebuild Tailwind:
```bash
npm run build
```

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)

## 🆘 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Verify all files are in the correct locations
3. Ensure Node.js version is 18 or higher
4. Check that all dependencies installed correctly

## ✅ Checklist Before Deploying

- [ ] Updated personal information in Hero.tsx
- [ ] Updated About section
- [ ] Added all work experiences
- [ ] Added all projects
- [ ] Updated certifications and awards
- [ ] Linked resume PDFs correctly
- [ ] Updated metadata in layout.tsx
- [ ] Tested on mobile, tablet, and desktop
- [ ] Checked all links work
- [ ] Verified no console errors
- [ ] Tested production build locally

---

Happy coding! 🎉

