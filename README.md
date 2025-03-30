# Personal Portfolio - Nuxt & Sanity

A modern personal portfolio site built with Nuxt.js and Sanity headless CMS.

## Overview

This project serves as my personal portfolio, showcasing my projects, skills, and professional experience. I chose the combination of Nuxt.js and Sanity for:

- **Content Management**: Sanity provides a flexible, structured approach to managing portfolio content
- **Developer Experience**: Nuxt's Vue-based framework offers excellent tooling and performance
- **Learning Opportunity**: Exploring this tech stack allowed me to expand my skillset
- **Completeness**: The combination enables a fully-featured portfolio with minimal compromise

## Tech Stack

- **Frontend**: Nuxt.js (Vue-based framework)
- **Content Management**: Sanity CMS
- **Styling**: Tailwind CSS
- **Query Language**: GROQ (Graph-Relational Object Queries)
- **Deployment**: Vercel

## Features

- Responsive design
- Dark/light mode support
- Project showcase with images and details
- Content fully managed through Sanity Studio
- Optimized image loading via Sanity's image pipeline

## Repository Structure

- `/nuxt-app` - Nuxt.js frontend application
- `/sanity` - Sanity Studio configuration and schemas
- `/public` - Static assets (including favicon)

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Gabrielb102/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   # Frontend
   cd nuxt-app
   npm install
   
   # Sanity Studio
   cd ../sanity
   npm install
   ```

3. Setup environment variables:
   Create `.env` files based on `.env.example` templates

### Development

Run the Nuxt application:
```bash
cd nuxt-app
npm run dev
```

Run Sanity Studio:
```bash
cd sanity
npm run dev
```

## Deployment

The site is configured for deployment on Vercel.

## License

[MIT](LICENSE)