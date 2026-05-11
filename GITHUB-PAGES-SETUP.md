# Forme — GitHub Pages Deployment

This directory contains the production files for Forme, ready to deploy to GitHub Pages.

## Quick Deploy Instructions

### Step 1: Create a New GitHub Repository

1. Go to https://github.com/new
2. Repository name: `forme` (or another name you prefer)
3. Choose Public or Private (Public is fine for this app)
4. Click "Create repository"

### Step 2: Push This Project to GitHub

Run these commands in your terminal:

```bash
cd /path/to/forme-github

git branch -M main

git remote add origin https://github.com/YOUR_USERNAME/forme.git

git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your new repository on GitHub
2. Click **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select the **Deploy from a branch** option
5. Select branch: `main`
6. Select folder: `/ (root)`
7. Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/forme`

It usually takes 1–2 minutes to deploy. GitHub will show a status message at the top of the repository while deploying.

## File Structure

```
forme-github/
├── index.html          # Main app
├── styles.css          # Styling (dark sophisticated theme)
├── app.js              # Application logic
└── assets/
    └── forme-logo.png  # Logo asset
```

## Customizing the URL

If you want a custom domain (e.g., forme.app):

1. After GitHub Pages is enabled, add a CNAME record in your DNS provider pointing to `YOUR_USERNAME.github.io`
2. Create a file named `CNAME` (no extension) in this directory with your custom domain as the only line (e.g., `forme.app`)
3. Commit and push the CNAME file
4. In GitHub repository Settings > Pages, update the custom domain field

## Future Updates

To update the live app:

1. Make changes to the files in this directory
2. Run:
   ```bash
   git add .
   git commit -m "Update app"
   git push
   ```
3. GitHub Pages will automatically redeploy within 1–2 minutes

## Notes

- All app logic runs in the browser — no backend required
- Measurements are saved in the user’s browser (localStorage)
- The app uses the Platzi Fake Store API for live product data
- GitHub Pages provides free HTTPS and global CDN