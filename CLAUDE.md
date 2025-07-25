# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `gatsby develop` or `npm start` - Start development server
- `gatsby develop -H 0.0.0.0` - Start development server accessible from other devices
- `npm run build` - Build the site for production
- `npm run serve` - Serve the built site locally
- `npm run clean` - Clean the cache and public directory
- `npm run deploy` - Build and deploy to GitHub Pages (main branch)

### Setup
- `npm install -g gatsby-cli` - Install Gatsby CLI globally
- `npm install` - Install dependencies

## Architecture

This is a Gatsby-based personal blog written in Korean. The site uses:

- **Gatsby v5** with React 18
- **MDX** for blog posts with frontmatter-based routing
- **Firebase** for interactive features (guestbook)
- **Google Analytics** for tracking
- **GitHub Pages** deployment to main branch

### Key Structure
- `blog/` - Contains all blog posts as MDX files organized by date/title folders
- `src/pages/` - Gatsby pages including dynamic blog post routing via `{mdx.frontmatter__slug}.js`
- `src/components/` - Reusable React components (layout, comments, video, etc.)
- `gatsby-config.js` - Site configuration with plugins for MDX, images, and analytics

### Blog Content
- Each blog post is in its own folder under `blog/` with an `index.mdx` file
- Posts include images and screenshots stored alongside the content
- Special pages: About, Guestbook, Googling Timeline, and Mogakso (study group activities)

### Deployment
- Build generates static files to `public/`
- Deploy script builds and pushes to main branch via gh-pages
- Requires blog folder to be present in project for successful builds

### Important Notes
- The author mentions in README that blog posts must be included in the project before building to avoid errors
- Site uses Korean language content primarily
- Includes study group activity tracking ("모각소" posts)