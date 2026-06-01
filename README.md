# Space & Physics Engineering Developer Portfolio

A premium, highly interactive developer portfolio handcrafted using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed with rich cosmic and physics-based aesthetics, featuring advanced fluid entrance reveals, interactive canvas systems, 3D mouse tracking transforms, and seamless global light/dark modes.

Live Preview (Local): [http://localhost:5173/](http://localhost:5173/)  
GitHub Repository: [https://github.com/Laiba-dev569/Portfolio](https://github.com/Laiba-dev569/Portfolio)

---

## 🌟 Premium Features

### 1. Interactive Star Dust Canvas Background
* Powered by a high-performance **HTML5 Canvas** engine running in a continuous `requestAnimationFrame` render loop.
* Renders dozens of floating coordinate stars that drift slowly under self-velocity vectors.
* Features **Dynamic Mouse Repulsion**: particles register your cursor's pointer coordinates and gently repel outwards, creating an interactive physical force-field backdrop.

### 2. Spring-Staggered Text reveals
* Animates the main heading stagger on initial load.
* Splits the name `"Laiba"` into separate characters, popping them up sequentially using **Framer Motion spring physics** (`stiffness: 150, damping: 12`) for an elegant bounce effect.

### 3. Butter-Smooth 3D Perspective Card Tilts
* Elevates the project card showcase with a customized relative pointer-coordinate algorithm.
* Project cards dynamically calculate cursor coordinates and perform **3D perspective tilt translations** (`rotateX` and `rotateY` tracking) on mouse hover.
* Styled with glowing dynamic shadows utilizing theme-specific variables (`var(--color-accent-glow)`).

### 4. Seamless Global Light & Dark Modes
* Fully variable-driven styling system mapped under CSS custom properties in `index.css`.
* **Persisted Theme Switch**: Injects a custom icon toggle button (`Sun` and `Moon` icons) in the sticky navigation header and mobile drawer, saving preference values in `localStorage`.
* Applied transition animations across background and text colors to ensure switching is smooth and gradual.

### 5. Curated Signature Projects
Showcases three signature space, physics, and AI-oriented utilities in an extremely clean 3-column unified minimalist card grid:
* **Antigravity To-Do List**: A zero-gravity task management interface built for astronauts to track mission checklists, featuring floating prioritizations.
* **Astra AI Companion**: An offline-first cognitive space assistant providing astronaut telemetry logging and checklist assistance under high simulated communication delay.
* **NASA Space Weather App**: A operations dashboard tracking real-time solar flares, geomagnetic Kp-index records, and magnetosphere warning indicators.

### 6. Built-in Direct Contact Channels
* Configured `"Get in Touch"` action buttons to trigger a direct email draft via `mailto:mushtaqlaiba8@gmail.com` immediately.
* Integrated dynamic footer contact shortcuts including a custom glowing `Mail` icon.

---

## 🛠️ Technology Stack

* **Core Structure**: React 19 (TypeScript)
* **Build System**: Vite 8 (Client Environment)
* **Styling Engine**: Tailwind CSS v4 (with `@tailwindcss/vite` plugin Integration)
* **Motion Library**: Framer Motion 12
* **Icon Suite**: Lucide React

---

## 🚀 Getting Started Locally

To run the project locally on your machine, clone this repository and install its dependencies:

```bash
# 1. Clone the repository
git clone https://github.com/Laiba-dev569/Portfolio.git

# 2. Enter project folder
cd Portfolio

# 3. Install NPM packages
npm install

# 4. Start local development server
npm run dev
```

The server will spin up on: [http://localhost:5173/](http://localhost:5173/)

---

## 📦 Building for Production

To verify compilation and compile static assets for production deployment:

```bash
# Run typescript compile check and build production bundle
npm run build
```

This compiles optimized assets in the `/dist` directory, fully prepared for one-click static hosting on **Vercel**, **Netlify**, or **GitHub Pages**.
