# 🚀 GitHub Pages Deployment Guide

This guide will help you deploy your new portfolio to replace the existing content at https://michaelajao.github.io/

## 📋 Prerequisites

1. **GitHub Repository**: You need access to the `michaelajao/michaelajao.github.io` repository
2. **Local Setup**: This project should be ready to deploy

## 🗑️ Step 1: Remove Existing Content

### Option A: Complete Repository Replacement (Recommended)
1. Go to your existing repository: https://github.com/michaelajao/michaelajao.github.io
2. **Download/backup** any important files you want to keep
3. Delete all files in the repository (you can do this via GitHub web interface or locally)

### Option B: Local Git Commands
```bash
# Clone your existing repository
git clone https://github.com/michaelajao/michaelajao.github.io.git temp-backup

# Backup important files if needed
cp temp-backup/important-file.pdf ./public/

# Remove all content from your GitHub Pages repo
cd temp-backup
git rm -r *
git commit -m "Clear repository for new portfolio"
git push origin main
```

## 📤 Step 2: Deploy New Portfolio

### Method 1: Push to Existing Repository (Recommended)
```bash
# In your researcher-portfolio directory
git remote add pages https://github.com/michaelajao/michaelajao.github.io.git

# Push your new portfolio
git push pages main --force
```

### Method 2: Manual Upload via GitHub Web Interface
1. Go to https://github.com/michaelajao/michaelajao.github.io
2. Upload all files from your `researcher-portfolio` directory
3. Commit the changes

## ⚙️ Step 3: Configure GitHub Pages

1. Go to your repository settings: https://github.com/michaelajao/michaelajao.github.io/settings/pages
2. Under "Source", select **GitHub Actions**
3. The deployment workflow will automatically trigger

## 🔧 Step 4: Verify Deployment

1. Check the **Actions** tab in your repository to see the deployment status
2. Once complete, visit https://michaelajao.github.io/ to see your new portfolio
3. The deployment typically takes 2-5 minutes

## 📝 Important Notes

- **Domain**: Your site will be available at `https://michaelajao.github.io/`
- **Automatic Deployments**: Any future pushes to the `main` branch will automatically deploy
- **Custom Domain**: If you had a custom domain configured, you may need to reconfigure it in repository settings

## 🐛 Troubleshooting

### Build Failures
- Check the Actions tab for error details
- Ensure all dependencies are properly listed in `package.json`
- Verify that the build completes locally with `npm run build`

### 404 Errors
- Ensure the `.nojekyll` file is present in the `public` directory
- Check that the GitHub Pages source is set to "GitHub Actions"

### Deployment Not Updating
- Clear your browser cache
- Wait a few minutes for CDN propagation
- Check if the Actions workflow completed successfully

## 🎉 Success!

Once deployed, your new portfolio with animated bubbles and modern design will be live at https://michaelajao.github.io/!

## 📞 Need Help?

If you encounter any issues:
1. Check the GitHub Actions logs in your repository
2. Verify all files were uploaded correctly
3. Ensure GitHub Pages is configured to use GitHub Actions as the source
