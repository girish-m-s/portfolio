# Deployment Guide

## 🚀 Deploy Your Portfolio in 5 Minutes

### Option 1: Vercel (Recommended) ⭐

Vercel is the company behind Next.js and offers the best integration.

#### Steps:

1. **Create a GitHub Repository**
   ```bash
   cd /Users/girishms/Documents/Portfolio/portfolio-site
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Push to GitHub**
   - Go to [github.com](https://github.com) and create a new repository
   - Follow the instructions to push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com/signup](https://vercel.com/signup)
   - Sign up with GitHub
   - Click "New Project"
   - Import your portfolio repository
   - Click "Deploy"
   
   ✅ Done! Your site will be live in ~2 minutes at `your-portfolio.vercel.app`

4. **Custom Domain (Optional)**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain (e.g., `girishms.com`)
   - Follow DNS configuration instructions

### Option 2: Netlify

1. **Build the project locally**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `.next` folder, or
   - Connect your GitHub repository for automatic deployments

### Option 3: AWS Amplify

1. **Push to GitHub** (if not done already)

2. **AWS Amplify Console**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
   - Click "New App" → "Host web app"
   - Connect your GitHub repository
   - Choose your repository and branch
   - Build settings (auto-detected for Next.js):
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```
   - Click "Save and Deploy"

### Option 4: GitHub Pages + Docker

GitHub Pages doesn't support Next.js server-side features, but you can use static export:

1. **Update next.config.mjs**:
   ```javascript
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   };
   ```

2. **Build and export**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   - Push the `out` folder to `gh-pages` branch

### Option 5: DigitalOcean App Platform

1. Push code to GitHub
2. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
3. Create New App → Connect GitHub
4. Select repository
5. Configure build:
   - Build Command: `npm run build`
   - Run Command: `npm start`
6. Deploy

## 🔧 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All personal information is updated
- [ ] All links are working (test each one)
- [ ] Resume PDFs are in the `public/` folder
- [ ] No console errors in browser
- [ ] Tested on mobile, tablet, and desktop
- [ ] Production build works locally:
  ```bash
  npm run build
  npm start
  ```
- [ ] All images are optimized (if you added any)
- [ ] Meta tags are updated in `app/layout.tsx`
- [ ] Google Drive certifications link is correct

## 🌐 Custom Domain Setup

### For Vercel:

1. Buy a domain from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Google Domains](https://domains.google)
2. In Vercel dashboard: Settings → Domains → Add Domain
3. Add DNS records as instructed by Vercel
4. Wait for DNS propagation (5-30 minutes)

### Example DNS Configuration:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `app/layout.tsx`:
   ```typescript
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   ```

### Vercel Analytics

Simply add in `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react';

// In the return statement:
<Analytics />
```

Then run:
```bash
npm install @vercel/analytics
```

## 🔒 Environment Variables

If you add any API keys or secrets:

### Vercel:
- Go to Project Settings → Environment Variables
- Add variables (e.g., `NEXT_PUBLIC_API_KEY`)

### Netlify:
- Go to Site Settings → Build & Deploy → Environment

## 🚀 Continuous Deployment

Once connected to GitHub:

1. Every push to `main` branch = automatic deployment
2. Pull requests get preview deployments
3. Rollback to previous versions anytime

## 💰 Cost Estimates

| Platform | Free Tier | Paid Plans |
|----------|-----------|------------|
| **Vercel** | Unlimited personal projects | $20/month Pro |
| **Netlify** | 100GB bandwidth/month | $19/month Pro |
| **AWS Amplify** | 12 months free, then ~$5/month | Pay as you go |
| **DigitalOcean** | $0 | $5/month App Platform |

**Recommendation**: Start with Vercel's free tier - it's perfect for portfolios!

## 📈 Performance Optimization

After deployment, test your site:

1. **Lighthouse Score**
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Run audit
   - Aim for 90+ in all categories

2. **PageSpeed Insights**
   - Visit [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your deployed URL
   - Follow suggestions

## 🆘 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### 404 Errors After Deployment

- Check `next.config.mjs` for correct configuration
- Verify all file paths are relative
- Ensure public files are included

### Slow Loading

- Optimize images with Next.js Image component
- Check bundle size: `npm run build` shows sizes
- Use lazy loading for heavy components

## 📧 Post-Deployment

1. **Test Everything**
   - Click every link
   - Test contact form (if you add one)
   - Check mobile responsiveness
   - Test on different browsers

2. **Share Your Portfolio**
   - Update LinkedIn profile with link
   - Add to GitHub profile README
   - Share on Twitter/X
   - Add to resume

3. **Monitor Performance**
   - Set up analytics
   - Check for errors in Vercel/Netlify dashboard
   - Monitor loading times

## 🎉 You're Live!

Congratulations! Your portfolio is now live and accessible to the world.

**Example URLs:**
- Vercel: `https://girish-portfolio.vercel.app`
- Custom: `https://girishms.com`

Need help? Check:
- [Vercel Support](https://vercel.com/support)
- [Next.js Discord](https://nextjs.org/discord)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

**Next Steps:**
- Keep your portfolio updated
- Add new projects regularly
- Consider adding a blog section
- Implement dark/light mode toggle
- Add contact form
- Integrate with CMS for easier updates

Happy deploying! 🚀

