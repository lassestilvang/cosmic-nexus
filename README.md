# Cosmic Nexus

## Description

Cosmic Nexus is a showcase website that blends futuristic technology with nature's wonders to create extraordinary digital experiences. It serves as a portfolio platform featuring interactive 3D visualizations, a blog with technical content, and modern web development practices, all themed around cosmic and organic elements. Explore the intersection of AI, quantum computing, and sustainable tech through immersive interfaces that push the boundaries of web innovation.

## Features

- **Home Page**: Hero section with animated title and call-to-action buttons, expertise showcase (AI-Powered Innovation, Quantum Computing, Space Exploration, Sustainable Tech), rotating testimonials carousel with client reviews and ratings, floating cosmic-themed elements, and an optional weather widget displaying current conditions and 3-day forecast.
- **Portfolio Page**: Filterable project gallery with categories (All, Web Development, Data Visualization, AI/ML, Education). Features 6 sample projects including a cosmic e-commerce platform, neural network visualizer, quantum computing simulator, bio-luminescent dashboard, AI art generator, and space mission planner. Each project card shows description, technologies, and links to live demo/GitHub.
- **Blog**: MDX-powered blog with posts on topics like AI in space exploration, quantum computing breakthroughs, and web development trends. Includes reading time estimates, categories, and excerpt previews. Posts are generated from MDX files in `src/content/blog/` via a build script.
- **About Page**: Placeholder page for creator information.
- **Contact Page**: Placeholder page for contact details.
- **Navigation**: Fixed header with smooth hover animations, active page indicators, and responsive design.
- **Interactive Elements**: 3D cosmic sphere visualization, particle backgrounds, page transitions, scroll-triggered animations, and accessibility support (respects `prefers-reduced-motion`).
- **Weather Widget**: Client-side weather display using geolocation (fallback to Copenhagen), fetching data from OpenWeather API with current temperature, conditions, and 3-day forecast.
- **Testimonials**: Auto-rotating carousel with navigation controls, star ratings, and company logos.

## Installation Instructions

To get started with Cosmic Nexus, follow these step-by-step instructions:

1. **Prerequisites**:

   - Ensure you have Node.js (version compatible with Next.js 15+) installed on your system.
   - Install pnpm package manager globally: `npm install -g pnpm`.
   - Set up a Cloudflare account for deployment.
   - Obtain an OpenWeather API key from [OpenWeatherMap](https://openweathermap.org/api) for weather widget functionality.

2. **Clone the Repository**:

   ```
   git clone https://github.com/your-username/cosmic-nexus.git
   cd cosmic-nexus
   ```

3. **Install Dependencies**:

   ```
   pnpm install
   ```

4. **Environment Setup**:

   - Create a `.env.local` file in the root directory.
   - Add your OpenWeather API key: `OPENWEATHER_API_KEY=your_api_key_here`.

5. **Run the Development Server**:
   ```
   pnpm dev
   ```
   The application will be available at `http://localhost:3000`.

## Usage

- **Development**: Run `pnpm dev` to start the development server with Turbopack for fast reloading.
- **Building**: Execute `pnpm build` to compile the application (includes running `scripts/generate-posts.js` to convert MDX blog files to JSON).
- **Linting**: Use `pnpm lint` to check code quality with ESLint.
- **Deployment**: Run `pnpm deploy` to build and deploy to Cloudflare Workers using OpenNext.
- **Preview**: Use `pnpm preview` to build and preview the production build locally.
- **Type Generation**: Run `pnpm cf-typegen` to generate TypeScript types for Cloudflare environment bindings.

## Technologies Used

- **Next.js 15.4.6**: React framework for server-side rendering, static generation, and API routes.
- **React 19.1.0**: UI library for building interactive components.
- **TypeScript**: Type-safe JavaScript for better development experience and error prevention.
- **Tailwind CSS v4**: Utility-first CSS framework for responsive, cosmic-themed styling.
- **Framer Motion**: Animation library for smooth transitions, hover effects, and scroll animations.
- **Three.js & React Three Fiber**: 3D graphics libraries for cosmic sphere and interactive visualizations.
- **@tsparticles/react**: Particle effects for dynamic backgrounds.
- **MDX (@next/mdx, @mdx-js/react)**: Markdown with JSX for rich blog content rendering.
- **SWR**: Data fetching library for weather API with caching and revalidation.
- **OpenNext (@opennextjs/cloudflare)**: Tool for deploying Next.js apps to Cloudflare Workers.
- **Wrangler**: Cloudflare's CLI for managing Workers and deployments.
- **Vercel Analytics**: Web analytics tracking.
- **Web Vitals**: Performance monitoring and Core Web Vitals measurement.
- **Gray-matter & reading-time**: Frontmatter parsing and reading time calculation for blog posts.
- **ESLint & Next.js ESLint config**: Code linting and quality enforcement.

## Contributing Guidelines

We welcome contributions to Cosmic Nexus! To contribute:

1. **Fork the Repository**: Create a fork of the project on GitHub.
2. **Create a Feature Branch**: `git checkout -b feature/your-feature-name`.
3. **Make Changes**: Implement your changes, ensuring code quality and following TypeScript best practices.
4. **Run Tests and Linting**: Execute `pnpm lint` and ensure all checks pass.
5. **Commit Changes**: Use descriptive commit messages.
6. **Submit a Pull Request**: Push your branch and create a PR with a clear description of changes.
7. **Report Issues**: Use GitHub Issues to report bugs or suggest features, providing detailed information.

Please follow our coding standards: use TypeScript, maintain accessibility, and ensure responsive design.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact Information

- **Email**: contact@cosmicnexus.dev
- **GitHub**: [https://github.com/your-username/cosmic-nexus](https://github.com/your-username/cosmic-nexus)
- **LinkedIn**: [https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)
- **Website**: [https://cosmicnexus.dev](https://cosmicnexus.dev)
