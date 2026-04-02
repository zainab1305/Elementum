# The Website Global

React implementation of the provided Figma-inspired landing page, built with Vite and prepared for Docker-based submission.

## Stack

- React
- Vite
- CSS
- Docker + Nginx

## Project Structure

- `src/App.jsx`: top-level page composition
- `src/components/Navbar.jsx`: navigation/header
- `src/components/Hero.jsx`: hero headline and face collage
- `src/components/IntroSection.jsx`: reusable split intro section
- `src/components/OffersSection.jsx`: offer heading and rows
- `src/components/TestimonialSection.jsx`: testimonial heading, quote card, and floating portraits
- `src/components/SiteFooter.jsx`: newsletter CTA and footer links
- `src/index.css`: global styling and responsive rules

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Docker

Run the project with Docker Compose:

```bash
docker-compose up --build
```

The production container is served through Nginx using the included `Dockerfile`, `docker-compose.yml`, and `nginx.conf`.

## Notes

- The UI has been divided into reusable React components without changing the visual implementation.
- Assets in `src/assets` are used directly to match the supplied design.
- Responsive behavior for desktop, tablet, and mobile is handled in `src/index.css`.
