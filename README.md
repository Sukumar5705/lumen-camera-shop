# Lumen Camera Website

> A modern premium camera and photography storefront UI built with React, TypeScript, Vite, and Tailwind CSS.

---

## Badges

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-6.x-blue)
![Vite](https://img.shields.io/badge/Vite-8.x-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-pink)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/version-0.0.0-orange)

---

# Table of Contents

- Overview
- Live Demo
- Screenshots
- Features
- Tech Stack
- Project Architecture
- Folder Structure
- Installation
- Available Scripts
- Project Notes

---

# Overview

Lumen Camera Website is a responsive photography and camera storefront interface showcasing products, brands, and editorial content.

The project demonstrates a polished e-commerce style user experience with animated interactions, product browsing, brand discovery, and blog content.

This project is intended for:

- Camera enthusiasts
- Photography businesses
- Frontend developers
- UI/UX portfolio demonstrations

---

# Live Demo

> Deployment not included.

```
Add your deployed URL here.
```

---

# Screenshots

```
screenshots/
├── home.png
├── hero.png
├── categories.png
├── featured-products.png
├── shop.png
├── brands.png
├── blog.png
├── newsletter.png
└── footer.png
```

---

# Features

## User Features

- Browse featured camera products
- Browse camera brands
- Read photography blogs
- Product search
- Category filtering
- Brand filtering
- Price filtering
- Rating filtering
- Stock filtering
- Product sorting
- Product pagination
- Wishlist toggle (client-side)

## Shop Features

- Search products
- Category filters
- Brand filters
- Price range filters
- Rating filters
- In-stock filter
- Featured sorting
- Price sorting
- Best-selling sorting
- Highest-rated sorting
- Pagination

## Brand Features

- Brand search
- Filter by brand type
- Brand details modal

## Blog Features

- Featured article
- Search blogs
- Category filtering
- Recent posts
- Popular posts
- Pagination

## UI Features

- Responsive layout
- Animated page sections
- Hover animations
- Mobile-friendly navigation
- Newsletter section
- Promotional banner
- SEO information section

## Developer Features

- React Router
- TypeScript
- Component-based architecture
- Static data organization
- ESLint configuration
- Vite development workflow

---

# Tech Stack

## Frontend

| Technology | Usage |
|------------|-------|
| React 19 | UI |
| TypeScript | Language |
| React Router DOM | Routing |

## Styling

| Technology | Usage |
|------------|-------|
| Tailwind CSS v4 | Styling |

## Animations

| Library | Usage |
|----------|------|
| Framer Motion | Page & component animations |

## Icons

- Lucide React
- React Icons

## Utilities

- clsx
- tailwind-merge

## Development

- Vite
- ESLint

---

# Project Architecture

```
src/
│
├── assets/
│   Static images and icons
│
├── components/
│   ├── camera/
│   │   Reusable website sections
│   └── ui/
│       Reusable UI components
│
├── data/
│   Static product, brand, and blog data
│
├── hooks/
│   Custom React hooks
│
├── lib/
│   Utility helpers and error handling
│
├── pages/
│   Route-level pages
│
├── App.tsx
├── main.tsx
└── index.css
```

---

# Installation

```bash
git clone <repository-url>

cd lumen-camera-website

npm install

npm run dev
```

---

# Build

```bash
npm run build
```

---

# Preview

```bash
npm run preview
```

---

# Lint

```bash
npm run lint
```

---

# Available Routes

| Route | Description |
|-------|-------------|
| / | Home |
| /shop | Product listing |
| /brands | Brand directory |
| /blog | Photography blog |

---

# Project Notes

This project is a frontend-only application.

No backend, authentication, database, or API integrations were detected in the source code.

Product, brand, and blog content are provided through static TypeScript data files located under `src/data/`.
